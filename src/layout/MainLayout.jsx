import React, { Component } from 'react';

export class MainLayout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="main-layout">
        <div className="content-wrapper">
          This is the main layout
          <div className="content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default MainLayout;
