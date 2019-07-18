import React, { Component } from 'react';
import element from '@iola/custom-element';

@element({
  tag: 'iola-preview',
})
export default class Preview extends Component {
  render() {
    return (
      <div class="custom-element">Hello custom elements ( Preview )</div>
    );
  }
}
