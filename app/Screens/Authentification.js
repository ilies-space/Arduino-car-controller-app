import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Image, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {mainColor} from '../../Colors';

export default function Authentification() {
  var pinCode = '';
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{alignItems: 'center'}}>
        <Image
          style={{height: 200, width: '100%'}}
          source={require('../../assets/redCar.jpg')}
        />
        <Text style={{fontWeight: 'bold', fontSize: 25, color: 'white'}}>
          ENTER SECURITY PIN
        </Text>
      </View>

      <View>
        <TextInput
          onChangeText={(v) => {
            pinCode = v;
          }}
          keyboardType={'number-pad'}
          keyboardAppearance={'dark'}
          autoFocus={true}
          style={{
            borderWidth: 1,
            borderColor: mainColor,
            borderRadius: 20,
            padding: 20,
            margin: 20,
            color: 'white',
          }}
          placeholder={'Enter your code pin '}
          placeholderTextColor={'white'}
          onSubmitEditing={() => {
            console.log('check pin code , if true the move next');
            console.log({});
            navigation.navigate('Connect');

            // if (pinCode === '0000') {
            //   navigation.navigate('Connect');
            // } else {
            //   alert('wrong pinCode');
            // }
            // pinCode = '';
          }}
        />
      </View>
    </View>
  );
}
