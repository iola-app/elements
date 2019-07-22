import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import element from '@iola/custom-element';

import styles from './ImageUpload.scss';

@element({
  tag: 'iola-image-upload',
  styles,
})
export default class ImageUpload extends Component {
  onDropAccepted = (files) => {
    console.log('Files', files);
  };

  renderArea = ({ getRootProps, getInputProps }) => {
    const rootProps = getRootProps();
    const inputProps = getInputProps();

    return (
      <div className="container">
        <div className="dropzone" {...rootProps}>
          <input {...inputProps} />
        </div>
      </div>
    );
  };

  render() {
    return (
      <Dropzone
        accept="image/*"
        multiple={false}
        onDropAccepted={this.onDropAccepted}
        children={this.renderArea}
      />;
  }
}
