import React, { Component } from "react";

export const WithLogging = (WrapedComponent) => {
  class WithLoggingComponent extends Component {
    componentDidMount() {
      console.log (`Rendring ${WrapedComponent.name}`);
    }

    render() {
      return <WrapedComponent {...this.props} />;
    }
  }

  return WithLoggingComponent;
};
