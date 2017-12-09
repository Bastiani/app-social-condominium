/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

import { isSignedIn } from './services/auth';

import { createRootNavigator } from './routes';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signed: false,
      signLoaded: false,
    };
  }

  componentWillMount() {
    isSignedIn()
      .then(res => this.setState({ signed: res, signLoaded: true }))
      .catch(err => alert('Erro'));
  }

  render() {
    const { signLoaded, signed } = this.state;

    if (!signLoaded) {
      return null;
    }

    const Layout = createRootNavigator(signed);
    return <Layout />;
  }
}
