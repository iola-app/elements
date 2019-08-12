import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import element, { css } from '@iola/custom-element';
import { SketchPicker } from 'react-color';
import classes from 'classnames';

import colors from './colors';

@element({
  tag: 'iola-color-picker',
  attrs: ['value'],
  methods: ['getColor'],

  /**
   * @param {object} props
   * @param {HTMLElement} element
   */
  props: (props, element) => ({
    ...props,
    element,
    onChange: color => element.dispatchEvent(
      new CustomEvent('change', {
        detail: { color },
      }),
    ),
  }),

  styles: css`
    :host {
      display: inline-block;
      width: 50px;
      height: 30px;
      border-color: #cccccc;
    }

    .container {
      display: flex;
      width: 100%;
      height: 100%;
      border-color: inherit;
      position: relative;
    }

    .color {
      flex: 1;
      border-width: 1px;
      border-style: solid;
      border-radius: 3px;
      border-color: inherit;
    }

    .picker-wrap {
      display: none;
      position: absolute;
      margin-top: 5px;
      top: 100%;

      z-index: 3;
    }

    .visible .picker-wrap {
      display: block;
    }
  `,
})
export default class ColorPicker extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    element: PropTypes.instanceOf(HTMLElement),
  };

  static defaultProps = {
    value: colors[0],
  };

  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      value: props.value,
      color: props.value === state.value ? state.color : props.value,
    };
  }

  selfRef = createRef();
  state = {
    value: null,
    color: null,
    visible: false,
  };

  getColor = () => this.state.color;
  onClick = (event) => {
    const { visible } = this.state;

    event.preventDefault();
    this.setState({ visible: !visible });
  };

  onChangeComplete = ({ hex: color }) => {
    const { onChange } = this.props;
    this.setState({ color });

    onChange(color);
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.onClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.onClickOutside);
  }

  onClickOutside = (event) => {
    const { element } = this.props;

    if (event.target !== element) {
      this.setState({ visible: false });
    }
  }

  render() {
    const { color, visible } = this.state;
    const containerClasses = classes(['container', { visible }]);

    return (
      <div ref={this.selfRef} className={containerClasses}>
        <a
          href="#"
          className="color"
          style={{ backgroundColor: color }}
          onClick={this.onClick}
        />
        <div className="picker-wrap">
          <SketchPicker
            presetColors={colors}
            disableAlpha
            className="picker"
            color={color}
            onChangeComplete={this.onChangeComplete}
          />
        </div>
      </div>
    );
  }
}
