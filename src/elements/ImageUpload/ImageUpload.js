import React, { Component } from 'react';
import element from '@iola/custom-element';

import styles from './ImageUpload.scss';

@element({
  tag: 'iola-image-upload',
  styles: styles,
})
export default class ImageUpload extends Component {
  render() {
    return (
      <div>Image Upload</div>
    );
  }
}
