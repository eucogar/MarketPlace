import React from 'react';
import {Image, Text, View} from 'react-native';
import {Button, Spacer, TextInput, VStack} from '@react-native-material/core';
import {StackScreenProps} from '@react-navigation/stack';
import {style} from '../themes/Product';
import {Select} from '../components/Select';
interface Props extends StackScreenProps<any, any> {}

export const registerProduct = ({navigation}: Props) => {
  return (
    <>
      <View style={style.row}>
        <Button style={style.Button} variant="text" title="Cancelar" color="#537FE7" />
        <View style={style.center}>
          <Text style={style.title}>Publica tu producto</Text>
        </View>
        <Button style={style.Button} variant="text" title="Publicar" color="#537FE7" />
      </View>
      <VStack m={50} spacing={7}>
        <View style={style.container}>
          <Image style={style.img} source={require('../assets/Logo.jpg')} />
        </View>
        <TextInput label="Título" variant="outlined" color={'#537FE7'} />
        <TextInput label="Precio" variant="outlined" color={'#537FE7'} />
        <Select />
        <Spacer />
        <Spacer />
        <TextInput label={'Descripción'} variant="outlined" color={'#537FE7'} />
        <Text>Opcional</Text>
      </VStack>
    </>
  );
};
