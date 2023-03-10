import {Alert, Image, KeyboardAvoidingView, Text, View} from 'react-native';
import {Button, Spacer, VStack} from '@react-native-material/core';
import {style} from '../themes/Product';
import {Select} from '../components/Select';
import {InputLabel} from '../components/InputLabel';
import {useForm} from '../hooks/useForm';
import {RegisterProduct} from '../models/RegisterProduct';
import '../database/Departmanet';
import {Categories} from '../database/Categories';
import {Camera, Galery} from '../services/Images';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {RegisterPoduct} from '../services/APIS';

export const registerProduct = () => {
  const {form, onChange} = useForm<RegisterProduct>({} as RegisterProduct);
  const {image, title, price, category, description} = form;
  const PhotographyAlert = () => {
    image && image.length > 3
      ? Alert.alert('Limite', 'Solo puedes cargar 4 imagenes', [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
        ])
      : Alert.alert('FOTO', 'Quieres usar la camara o la galeria?', [
          {
            text: 'Galeria',
            onPress: () => Galery(image, onChange),
          },
          {text: 'Camara', onPress: () => Camera(image, onChange)},
        ]);
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <View style={style.container}>
        <Text style={style.title}>Nueva Publicación</Text>
      </View>
      <VStack m={50} spacing={7}>
        <View style={style.image}>
          <View style={{flexDirection: 'row'}}>
            {image &&
              image.map((item, index) => (
                <Image
                  key={index}
                  source={{uri: item}}
                  style={{width: 50, height: 50}}
                />
              ))}
          </View>
          <View>
            <Button
              variant="text"
              title={<Icon name="images-outline" size={30} color="#000" />}
              onPress={PhotographyAlert}
            />
            <Text>Agregar Foto</Text>
          </View>
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
          value={price}
          onChangeText={onChange}
          field={'precio'}
        />

        <Select
          value={category}
          field={'categoria'}
          onChangeText={onChange}
          placeholder={'Categoria'}
          data={Categories}
        />
        <InputLabel
          placeholder={'Descripcion'}
          field={'descripcion'}
          value={description}
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
            onPress={() => RegisterPoduct(form)}
          />
          <Button
            style={style.Button}
            variant="text"
            title="Cancelar"
            color="#537FE7"
          />
        </View>
      </VStack>
    </KeyboardAvoidingView>
  );
};
