import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

import { Text, View } from 'react-native';

class PersonInfo extends Component {
  render() {
    console.log(`PersonInfo====${this.props.person}`);
    const { person } = this.props;
    return (
      <View>
        <Text>{person.name}</Text>
      </View>
    );
  }
}

export default createFragmentContainer(
  PersonInfo,
  graphql`
    fragment PersonInfo_person on Person {
      _id
      name
      email
      telephone
      address
    }
  `,
);
