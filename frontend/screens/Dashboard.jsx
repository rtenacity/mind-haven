
import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function DashboardScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Dashboard Screen</Text>
        <Button
        title="Go to Landing"
        onPress={() => navigation.navigate('Landing')}
        />
      </View>
    );
  }