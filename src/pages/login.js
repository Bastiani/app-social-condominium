import React from 'react';
import { View } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import { onSignIn } from '../services/auth';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'rafacdb@gmail.com',
      password: '123456',
    };
  }
  render() {
    return (
      <View style={{ paddingVertical: 20 }}>
        <Card>
          <FormLabel>E-mail</FormLabel>
          <FormInput
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            placeholder="Type your e-mail"
          />
          <FormLabel>Password</FormLabel>
          <FormInput
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            secureTextEntry
            placeholder="Type your password"
          />

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="Log in"
            onPress={async () => {
              try {
                const res = await onSignIn(this.state);
                console.log(`onPress ====== ${res}`);
                res.startsWith('JWT')
                  ? this.props.navigation.navigate('SignedIn')
                  : this.props.navigation.navigate('SignedOut');
              } catch (err) {
                console.log(`onPress catch ====== ${err}`);
                this.props.navigation.navigate('SignedOut');
              }
            }}
          />
        </Card>
      </View>
    );
  }
}

export default Login;
