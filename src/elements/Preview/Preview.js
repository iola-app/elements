import React, { Component } from 'react';
import element from '@iola/custom-element';

import styles from './styles.scss';

@element({ tag: 'iola-preview', styles })
export default class Preview extends Component {
  render() {
    return (
      <div className="custom-element">Hello custom elements ( Preview )</div>
    );
  }
}
