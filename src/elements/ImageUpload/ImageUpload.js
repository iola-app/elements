import React, { Component } from 'react';
import element from '@iola/custom-element';
import Dropzone from 'react-dropzone';

import styles from './ImageUpload.scss';

@element({
  tag: 'iola-image-upload',
  styles,
})
export default class ImageUpload extends Component {
  onDropAccepted = (files) => {
    console.log('Files', files);
  };

  render() {
    return (
      <Dropzone
        onDropAccepted={this.onDropAccepted}
      >
        {({ getRootProps, getInputProps }) => {
          const rootProps = getRootProps();
          const inputProps = getInputProps();

          return (
            <div className="container">
              <div className="dropzone" {...rootProps}>
                <input {...inputProps} />
              </div>
            </div>
          );
        }}
      </Dropzone>
    );
  }
}
