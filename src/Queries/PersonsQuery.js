import React from 'react';
import { View, Text } from 'react-native';
import { QueryRenderer, graphql } from 'react-relay';

import environment from '../createRelayEnvironment';
import PersonInfo from '../Queries/PersonInfo';

export default class PersonsQuery extends React.Component {
  render() {
    return (
      <View style={{ paddingVertical: 20 }}>
        <QueryRenderer
          environment={environment}
          query={graphql`
            query PersonsQuery($name: String!) {
              persons(name: $name) {
                ...PersonInfo_person
              }
            }
          `}
          variables={{
            name: 'R',
          }}
          render={({ error, props }) => {
            if (error) {
              return <Text>{error.message}</Text>;
            } else if (props) {
              console.log(`Query====${props.persons}`);
              return <PersonInfo person={props.persons} />;
            }
            return <Text>Loading</Text>;
          }}
        />
      </View>
    );
  }
}
