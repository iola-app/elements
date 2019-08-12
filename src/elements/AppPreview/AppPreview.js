import React, { Component } from 'react';
import PropTypes from 'prop-types';
import element, { css } from '@iola/custom-element';

import styles from './AppPreview.scss';

@element({
  tag: 'iola-app-preview',
  attrs: ['background', 'logo', 'primary-color'],
  styles: [
    css`
      :host {
        display: flex;
      }
    `,
    styles,
  ]
})
export default class AppPreview extends Component {
  static propTypes = {
    background: PropTypes.string,
    logo: PropTypes.string,
    primaryColor: PropTypes.string,
  };

  render() {
    const { background, logo, primaryColor } = this.props;
    const screenStyle = background && { backgroundImage: `url(${background})` };
    const logoStyle = logo && { backgroundImage: `url(${logo})` };
    const buttonStyle = primaryColor && { backgroundColor: primaryColor };

    return (
      <div className="app-preview">
        <div className="screen" style={screenStyle}>
          <div className="status-bar">
            <div className="icons"></div>
            <div className="time">12:30</div>
          </div>
          <div className="logo" style={logoStyle} />
          <div className="title">Sign In</div>
          <div className="form">
            <input className="input login" placeholder="Email or login" type="text" />
            <span className="with-icon">
              <input className="input password" placeholder="Password" type="text" />
            </span>
            <div className="forgot-password">Forgot password?</div>
          </div>
          <div className="button" style={buttonStyle}>Sign In</div>
          <div className="button bordered">Sign Up</div>
          <div className="button bordered">Change Website URL</div>
        </div>
      </div>
    );
  }
}
