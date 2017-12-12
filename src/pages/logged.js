import React from 'react';
import { View, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-elements';

import { onSignOut } from '../services/auth';
import AllPersonsQuery from '../Queries/AllPersonsQuery';

export default ({ navigation }) => (
  <ScrollView>
    <View style={{ paddingVertical: 20 }}>
      <Card title="Social Condominium">
        <AllPersonsQuery />
        <Button
          backgroundColor="#03A9F4"
          title="Exit"
          onPress={() => onSignOut().then(() => navigation.navigate('SignedOut'))}
        />
      </Card>
    </View>
  </ScrollView>
);
