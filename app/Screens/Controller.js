import React from 'react';
import {Button, Text, View} from 'react-native';
import {mainColor} from '../../Colors';

export default function Controller() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: mainColor, fontWeight: 'bold', fontSize: 26}}>
        car controller goes here
      </Text>
      <Text style={{color: mainColor, fontWeight: 'bold', fontSize: 18}}>
        (under construction)
      </Text>
    </View>
  );
}
