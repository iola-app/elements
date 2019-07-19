import React from 'react';
import ReactDom from 'react-dom';

import extractAttributes from './extractAttributes';

/**
 * @param {Object} options
 * @param {String} options.tag
 * @param {String} options.extends
 * @param {Array<String>} options.attrs
 * * @param {Array<String>} options.methods
 * @param {Array<String> | String} options.styles
 */
const defineElement = (options = {}) => Component => {
  const observedAttributes = options.attrs || [];
  const styles = Array.isArray(options.styles) ? options.styles : [ options.styles ];

  const shadowRoots = new WeakMap();
  const componentInstances = new WeakMap();

  const render = element => ReactDom.render(
    React.createElement(Component, extractAttributes(observedAttributes, element)),
    shadowRoots.get(element),
    function () {
      componentInstances.set(element, this);
    },
  );

  class CustomElement extends HTMLElement {
    static observedAttributes = observedAttributes;

    constructor(...args) {
      super(...args);

      shadowRoots.set(this, this.attachShadow({ mode: 'open' }));
    }

    connectedCallback() {
      render(this);

      /**
       * Add styles to the shadow root
       */
      styles.forEach(css => {
        const style = document.createElement('style');
        style.appendChild(document.createTextNode(css.toString()));

        shadowRoots.get(this).appendChild(style);
      });
    }

    attributeChangedCallback() {
      render(this);
    }

    disconnectedCallback() {
      ReactDom.unmountComponentAtNode(shadowRoots.get(this));
    }
  }

  if (options.methods) {
    Object.assign(CustomElement.prototype, options.methods.reduce((methods, methodName) => ({
      ...methods,
      [methodName]: function (...args) {
        return componentInstances.get(this)?.[methodName] ?.(...args);
      },
    }), {}));
  }

  if (options.tag) {
    customElements.define(options.tag, CustomElement, {
      extends: options.extends,
    });
  }

  return CustomElement;
};


export { default as css } from './css';
export default defineElement;
