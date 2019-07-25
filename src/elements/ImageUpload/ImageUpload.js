import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import classes from 'classnames';
import element from '@iola/custom-element';

import styles from './ImageUpload.scss';

@element({
  tag: 'iola-image-upload',
  attrs: ['value'],
  methods: ['getFile', 'getUrl'],
  styles,

  /**
   * @param {object} props
   * @param {HTMLElement} element
   */
  props: (props, element) => ({
    ...props,
    onChange: ({ file, url }) => element.dispatchEvent(
      new CustomEvent('change', {
        detail: { file, url },
      }),
    ),
  }),
})
export default class ImageUpload extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
  };

  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      url: state.url || props.value,
    };
  }

  state = {
    url: null,
    file: null,
  };

  getFile = () => this.state.file;
  getUrl = () => this.state.url;

  onDropAccepted = ([ file ]) => {
    const { onChange } = this.props;
    const url = URL.createObjectURL(file);

    this.setState({ url, file });
    onChange({ file, url });
  };

  renderArea = (props) => {
    const { url } = this.state;
    const { getRootProps, getInputProps, isDragActive } = props;

    const rootProps = getRootProps();
    const inputProps = getInputProps();
    const previewStyle = url && { backgroundImage: `url(${url})` };
    const containerClass = classes([ 'container', {
      'drag-active': isDragActive,
      'no-value': !url,
    }]);

    return (
      <div className={containerClass}>
        <div className="dropzone" {...rootProps}>
          <input {...inputProps} />

          <div className="preview" style={previewStyle}>
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
