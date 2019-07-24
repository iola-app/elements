import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import classes from 'classnames';
import element from '@iola/custom-element';

import styles from './ImageUpload.scss';

@element({
  tag: 'iola-image-upload',
  attrs: ['value'],
  styles,
})
export default class ImageUpload extends Component {
  static propTypes = {
    value: PropTypes.string,
  };

  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      value: state.value || props.value,
    };
  }

  state = {
    value: null,
  };

  onDropAccepted = ([ file ]) => {
    const fileReader = new FileReader();
    fileReader.onload = () => this.setState({ value: fileReader.result });
    fileReader.readAsDataURL(file);
  };

  renderArea = (props) => {
    const { value } = this.state;
    const { getRootProps, getInputProps, isDragActive } = props;

    const rootProps = getRootProps();
    const inputProps = getInputProps();
    const containerClass = classes([ 'container', {
      'drag-active': isDragActive,
    }]);

    return (
      <div className={containerClass}>
        <div className="dropzone" {...rootProps}>
          <input {...inputProps} />

          <div className="preview" style={{ backgroundImage: `url(${value})` }}>
            <div className="overlay" />
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <Dropzone
        accept="image/*"
        onDropAccepted={this.onDropAccepted}
      >
        {this.renderArea}
      </Dropzone>
    );
  }
}
