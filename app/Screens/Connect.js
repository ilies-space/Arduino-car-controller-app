import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {mainColor} from '../../Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Connect() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View
        style={{alignItems: 'center', height: 200, justifyContent: 'center'}}>
        <Icon name="car-connected" size={65} color={'white'} />
      </View>
      <View
        style={{
          alignItems: 'center',
          flex: 1,
          marginHorizontal: 20,
          borderWidth: 1,
          borderColor: mainColor,
          borderRadius: 10,
          padding: 20,
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
          List of availble cars will apears here...
        </Text>
      </View>
      <View
        style={{alignItems: 'center', height: 150, justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.push('Controller');
            console.log('Controller');
          }}>
          <Text
            style={{
              color: mainColor,
              fontWeight: 'bold',
              fontSize: 22,
              borderWidth: 1,
              borderColor: mainColor,
              padding: 10,
              borderRadius: 20,
              width: 150,
              textAlign: 'center',
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
