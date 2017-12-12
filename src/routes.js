import { StackNavigator } from 'react-navigation';

import Login from './pages/login';
import Logged from './pages/logged';

export const SignedOutRoutes = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Log in',
    },
  },
});

export const SignedInRoutes = StackNavigator({
  Logged: {
    screen: Logged,
    navigationOptions: {
      title: 'Social Condominium',
    },
  },
});

export const createRootNavigator = (signedIn = false) =>
  StackNavigator(
    {
      SignedIn: { screen: SignedInRoutes },
      SignedOut: { screen: SignedOutRoutes },
    },
    {
      headerMode: 'none',
      mode: 'modal',
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
  );
