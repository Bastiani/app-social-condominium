import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import { FlatList, TouchableHighlight, Text, View } from 'react-native';

const renderPersons = ({ item }) => (
  <TouchableHighlight underlayColor="whitesmoke">
    <View>
      <Text>{item.name}</Text>
    </View>
  </TouchableHighlight>
);

const PersonInfo = props => (
  <View>
    <FlatList data={props.persons} renderItem={renderPersons} keyExtractor={item => item.id} />
  </View>
);

export default createFragmentContainer(
  PersonInfo,
  graphql`
    fragment PersonInfo_persons on Person @relay(plural: true) {
      id
      _id
      name
      email
      telephone
      address
    }
  `,
);
