// @flow

import { commitMutation, graphql } from 'react-relay';

const LoginEmailMutation = graphql`
  mutation LoginEmailMutation($input: LoginEmailInput!) {
    LoginEmail(input: $input) {
      token
    }
  }
`;

function loginEmailMutation(environment, email, password) {
  const variables = {
    input: {
      email,
      password,
    },
  };
  return new Promise((resolve, reject) => {
    commitMutation(environment, {
      mutation: LoginEmailMutation,
      variables,
      onCompleted: (response, errors) => {
        console.log(response.LoginEmail.token);
        resolve(response.LoginEmail.token);
      },
      onError: err => reject(err),
    });
  });
}

export default loginEmailMutation;
