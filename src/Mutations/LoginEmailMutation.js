// @flow

import { commitMutation, graphql } from 'react-relay';

const LoginEmailMutation = graphql`
  mutation LoginEmailMutation($input: LoginEmailInput!) {
    LoginEmail(input: $input) {
      token
    }
  }
`;

function loginEmail(environment: object, email: string, password: string) {
  const variables = {
    input: {
      email,
      password,
    },
  };
  commitMutation(environment, {
    mutation: LoginEmailMutation,
    variables,
    onCompleted: (response, errors) => {
      console.log('Response received from server.');
      console.log(response, errors);
    },
    onError: err => console.error(err),
  });
}

export default loginEmail;
