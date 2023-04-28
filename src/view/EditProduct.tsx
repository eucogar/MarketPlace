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
import React, {useEffect} from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {Eliminar, ModificarProduct} from '../services/APIS';

interface Props extends StackScreenProps<any, any> {}

export const EditProduct = ({route: {params}, navigation}: Props) => {
  // @ts-ignore
  const {item} = params;
  const {form, onChange} = useForm<RegisterProduct>({} as RegisterProduct);
  const {image, title, price, category, description, user, id} = form;
  const removeImage = (index: number) => {
    const newImages = [...image];
    newImages.splice(index, 1);
    onChange(newImages, 'image');
  };

  useEffect(() => {
    onChange(item.id, 'id');
    onChange([item.image1, item.image2, item.image3, item.image4], 'image');
  }, []);
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
        <Text style={style.title}>Modifica Tu Publicacion</Text>
      </View>
      <VStack m={50} spacing={7}>
        <View style={style.image}>
          <View style={{flexDirection: 'row'}}>
            {image &&
              image.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => removeImage(index)}>
                  <Image source={{uri: item}} style={{width: 50, height: 50}} />
                  <View style={{position: 'absolute', top: 0, right: 0}}>
                    <Icon name="close-circle-outline" size={20} color="white" />
                  </View>
                </TouchableOpacity>
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
        <Text>Elige primero tu imagen principal</Text>
        <InputLabel
          defaultValue={item.title}
          placeholder={'Titulo'}
          value={title}
          field={'title'}
          onChangeText={onChange}
        />
        <Text>Puedes incluir detalles como la marca, el tamaño o el color</Text>

        <InputLabel
          value={price}
          defaultValue={item.price.toString()}
          placeholder={'Precio'}
          keyboardType={'numeric'}
          onChangeText={onChange}
          field={'price'}
        />

        <Select
          defaultValue={item.category}
          value={category}
          field={'category'}
          onChangeText={onChange}
          placeholder={'Categoria'}
          data={Categories}
        />
        <InputLabel
          defaultValue={item.description}
          placeholder={'Descripcion'}
          field={'description'}
          value={description}
          onChangeText={onChange}
        />
        <Spacer />
        <Spacer />
        <View style={style.row}>
          <Button
            onPress={() => ModificarProduct(form)}
            style={style.button2}
            variant="outlined"
            title="Modificar"
            color="white"
          />
          <Button
            onPress={() => Eliminar(id)}
            style={style.Button}
            variant="text"
            title="Eliminar"
            color="#537FE7"
          />
        </View>
      </VStack>
    </KeyboardAvoidingView>
  );
};
