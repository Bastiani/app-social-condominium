import React from 'react';
import { View } from 'react-native';
import { Card, Button } from 'react-native-elements';

import { onSignOut } from '../services/auth';
import PersonsQuery from '../Queries/PersonsQuery';

export default ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card title="John Doe">
      <PersonsQuery />
      <Button
        backgroundColor="#03A9F4"
        title="Sair"
        onPress={() => onSignOut().then(() => navigation.navigate('SignedOut'))}
      />
    </Card>
  </View>
);
