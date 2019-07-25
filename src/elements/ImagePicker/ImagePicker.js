import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import classes from 'classnames';
import element from '@iola/custom-element';

import styles from './ImagePicker.scss';

@element({
  tag: 'iola-image-picker',
  attrs: ['value'],
  methods: ['getFile', 'getUrl', 'open'],
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
export default class ImagePicker extends Component {
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

  dropzone = createRef();

  state = {
    url: null,
    file: null,
  };

  open = () => this.dropzone.current?.open();
  getFile = () => this.state.file;
  getUrl = () => this.state.url;

  onDropAccepted = ([ file ]) => {
    const { onChange } = this.props;
    const url = URL.createObjectURL(file);

    onChange({ file, url });

    const image = new Image();
    image.src = url;
    image.onload = () => this.setState({ url, file });
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
        ref={this.dropzone}
        accept="image/*"
        onDropAccepted={this.onDropAccepted}
      >
        {this.renderArea}
      </Dropzone>
    );
  }
}
