import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';

export default function RecordScreen() {
  return (
  <View style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Icon ios='ios-play-circle' android="md-play-circle" style={{fontSize: 70, color: 'white'}}/>
  </View>
  )
}

RecordScreen.navigationOptions = {
  title: 'Record',
};
