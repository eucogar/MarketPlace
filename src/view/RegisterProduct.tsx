import React from 'react';
import {Image, Text, View} from 'react-native';
import {Button, Spacer, VStack} from '@react-native-material/core';
import {StackScreenProps} from '@react-navigation/stack';
import {style} from '../themes/Product';
import {Select} from '../components/Select';
import {InputLabel} from '../components/InputLabel';
import {useForm} from '../hooks/useForm';
import {RegisterProduct} from '../models/RegisterProduct';
interface Props extends StackScreenProps<any, any> {}

export const registerProduct = ({navigation}: Props) => {
  const {form, onChange} = useForm<RegisterProduct>({} as RegisterProduct);
  const {title, descripcion, precio, categoria} = form;
  return (
    <>
      <VStack m={50} spacing={7}>
        <View style={style.container}>
          <Text style={style.title}>Publica tu producto</Text>
        </View>
        <View style={style.container}>
          <Image style={style.img} source={require('../assets/Logo.jpg')} />
        </View>
        <InputLabel
          placeholder={'Titulo'}
          value={title}
          field={'title'}
          onChangeText={onChange}
        />
        <Text>Puedes incluir detalles como la marca, el tamaño o el color</Text>
        <InputLabel
          placeholder={'Precio'}
          keyboardType={'numeric'}
          value={precio}
          onChangeText={onChange}
          field={'precio'}
        />
        <Select
          value={categoria}
          field={'categoria'}
          onChangeText={onChange}
          placeholder={'Categoria'}
        />
        <InputLabel
          placeholder={'Descripcion'}
          field={'descripcion'}
          value={descripcion}
          onChangeText={onChange}
        />
        <Spacer />
        <Spacer />
        <Text>Opcional</Text>
        <View style={style.row}>
          <Button
            style={style.button2}
            variant="outlined"
            title="Piblicar"
            color="white"
          />
          <Button
            style={style.Button}
            variant="text"
            title="Cancelar"
            color="#537FE7"
          />
        </View>
      </VStack>
    </>
  );
};
