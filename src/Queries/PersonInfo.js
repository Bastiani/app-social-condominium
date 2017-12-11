import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import { Text, View } from 'react-native';

const PersonInfo = ({ persons }) => (
  <View>{persons.map(person => <Text>{person.name}</Text>)}</View>
);

/* const PersonInfo = ({ persons }) => (
  <View>
    <Text>{persons.name}</Text>
  </View>
); */

export default createFragmentContainer(
  PersonInfo,
  graphql`
    fragment PersonInfo_persons on Person @relay(plural: true) {
      _id
      name
      email
      telephone
      address
    }
  `,
);
