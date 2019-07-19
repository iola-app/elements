import React, { Component } from 'react';
import element, { css } from '@iola/custom-element';

import styles from './Preview.scss';

@element({
  tag: 'iola-preview',
  styles: [
    css`
      :host {
        display: block;
      }
    `,
    styles,
  ]
})
export default class Preview extends Component {
  render() {
    return (
      <div className="custom-element">Hello custom elements ( Preview )</div>
    );
  }
}
