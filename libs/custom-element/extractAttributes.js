import camelCase from 'camelcase';

/**
 * @param {Array<String>} attrs
 * @param {HTMLElement} element
 */
export default (attrs, element) => attrs.reduce((props, attrName) => {
 props[camelCase(attrName)] = element.getAttribute(attrName);

 return props;
}, {});
