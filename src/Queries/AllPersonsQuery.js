import React from 'react';
import { View, Text } from 'react-native';
import { QueryRenderer, graphql } from 'react-relay';

import environment from '../createRelayEnvironment';
import PersonInfo from '../Queries/PersonInfo';

const PersonsQuery = () => (
  <View style={{ paddingVertical: 20 }}>
    <QueryRenderer
      environment={environment}
      query={graphql`
        query AllPersonsQuery {
          allPersons {
            ...PersonInfo_persons
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <Text>{error.message}</Text>;
        } else if (props) {
          return <PersonInfo persons={props.allPersons} />;
        }
        return <Text>Loading</Text>;
      }}
    />
  </View>
);

export default PersonsQuery;
