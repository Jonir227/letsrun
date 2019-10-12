import withRedux from "next-redux-wrapper";
import App, { AppContext } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import createStore from "../redux/createStore";

interface ILetsRun {
  store: any;
}

class LetsRun extends App<ILetsRun> {
  static async getInitialProps(context: AppContext) {
    const { Component, ctx } = context;
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }
  public render() {
    const { store, Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(createStore)(LetsRun);
