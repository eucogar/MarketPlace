import {Image, StyleSheet, Text, View} from 'react-native';
import {Button, Spacer, TextInput, VStack} from '@react-native-material/core';
import React from 'react';

export default function Register() {
  return (
    <>
      <VStack m={50} spacing={7}>
        <Text style={style.title}>Genial que estes aqui!</Text>
        <Text style={style.Text}>Por favor llena todos los campos </Text>
        <View style={style.container}>
          <Image style={style.img} source={require('../assets/Logo.jpg')} />
        </View>
        <View>
          <TextInput label={'Nombre'} />
          <TextInput label={'Apellido'} />
          <TextInput label={'Telefono'} />
        </View>
        <View style={style.Button}>
          <Button title="Comfirmar" />
          <Button variant="outlined" title="Atras" />
        </View>
      </VStack>
    </>
  );
}
const style = StyleSheet.create({
  title: {
    color: '#6200ee',
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 20,
    textAlign: 'center',
  },
  Button: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Text: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
