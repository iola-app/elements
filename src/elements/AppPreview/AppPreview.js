import React, { Component } from 'react';
import element, { css } from '@iola/custom-element';

import styles from './AppPreview.scss';

@element({
  tag: 'iola-app-preview',
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
  render() {
    return (
      <div className="app-preview">
        <div className="screen">
          <div className="status-bar">
            <div className="icons"></div>
            <div className="time">12:30</div>
          </div>
          <div className="title">Sign In</div>
          <div className="form">
            <input className="input login" placeholder="Email or login" type="text" />
            <span className="with-icon">
              <input className="input password" placeholder="Password" type="text" />
            </span>
            <div className="forgot-password">Forgot password?</div>
          </div>
          <div className="button">Sign In</div>
          <div className="button bordered">Sign Up</div>
          <div className="button bordered">Change Website URL</div>
        </div>
      </div>
    );
  }
}
