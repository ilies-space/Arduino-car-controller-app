import React, {useState} from 'react';
import {
  StyleSheet,
  Modal,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {mainColor} from '../../Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AxisPad from 'react-native-axis-pad/src/AxisPad';

export default function Controller() {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const [DisplayListOfCommande, setDisplayListOfCommande] = useState(false);
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View
        style={{
          backgroundColor: 'black',
          padding: 5,
          // flexDirection: 'row',
        }}>
        <Text style={{color: 'green'}}>State : CONNECTED</Text>
        <View>
          <Text style={{color: 'green'}}>X : {X}</Text>
          <Text style={{color: 'green'}}>Y : {Y}</Text>
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            height: '80%',
            width: 300,
            // backgroundColor: 'pink',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AxisPad
            size={200}
            resetOnRelease={true}
            autoCenter={true}
            onValue={({x, y}) => {
              // values are between -1 and 1
              setX(x.toFixed(2));
              setY(y.toFixed(2));
            }}
          />
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: '#636e72',
          borderRadius: 50,
          margin: 10,
          padding: 10,
        }}>
        <View
          style={{
            backgroundColor: mainColor,
            height: 50,
            width: 50,
            borderRadius: 50 / 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="text-to-speech" size={35} color={'white'} />
        </View>

        <TouchableOpacity
          onPress={() => {
            setDisplayListOfCommande(true);
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 17,
              }}>
              List of commande
            </Text>
            <Icon name="menu-down" size={28} color={'white'} />
          </View>
        </TouchableOpacity>
      </View>

      {/* List of Commandes */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={DisplayListOfCommande}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>List of commande!</Text>

            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setDisplayListOfCommande(!DisplayListOfCommande);
              }}>
              <Text style={styles.textStyle}>commande EXMPLE 1</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setDisplayListOfCommande(!DisplayListOfCommande);
              }}>
              <Text style={styles.textStyle}>commande EXMPLE 2</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginVertical: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
