import React, { Component } from 'react';
// import element, { css } from '@iola/custom-element';
import element, { css } from '../../../libs/custom-element';

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
        <div class="screen">
          <div class="status-bar">
            <div class="icons"></div>
            <div class="time">12:30</div>
          </div>
          <div class="title">Sign In</div>
          <div class="form">
            <input class="input login" placeholder="Email or login" type="text" />
            <span class="with-icon">
              <input class="input password" placeholder="Password" type="text" />
            </span>
            <div class="forgot-password">Forgot password?</div>
          </div>
          <div class="button">Sign In</div>
          <div class="button bordered">Sign Up</div>
          <div class="button bordered">Change Website URL</div>
        </div>
      </div>
    );
  }
}
