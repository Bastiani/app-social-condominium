import { AsyncStorage } from 'react-native';
import loginEmailMutation from '../Mutations/LoginEmailMutation';
import env from '../createRelayEnvironment';

export const TOKEN_KEY = '@SocialCondominium:token';

export const onSignIn = async ({ email, password }) => {
  try {
    let token = await loginEmailMutation(env, email, password);
    if (token === null) token = 'error';
    console.log(token);
    AsyncStorage.setItem(TOKEN_KEY, token);
    return token;
  } catch (err) {
    console.log(err);
    AsyncStorage.setItem(TOKEN_KEY, 'error');
    return err;
  }
};

export const onSignOut = () => AsyncStorage.removeItem(TOKEN_KEY);

export const isSignedIn = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  console.log(`isSignedIn ===== ${token}`);

  return token !== null;
};
