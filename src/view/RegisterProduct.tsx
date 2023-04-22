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
import React, {useContext, useEffect} from 'react';
import {AuthContext} from '../context/AuthContext';
import {RegisterPoduct} from '../services/APIS';
import * as Yup from 'yup';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export const registerProduct = () => {
  const {form, onChange} = useForm<RegisterProduct>({} as RegisterProduct);
  const {image, title, price, category, description, user} = form;
  const removeImage = (index: number) => {
    const newImages = [...image];
    newImages.splice(index, 1);
    onChange(newImages, 'image');
  };

  const {
    user: {email},
  } = useContext(AuthContext);

  useEffect(() => {
    onChange(email, 'user');
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

  const handleSubmit = async () => {
    try {
      await schema.validate(form, {abortEarly: false});
      RegisterPoduct(form);
    } catch (error) {
      const errorMessage =
        error.inner.length > 0
          ? error.inner[0].message
          : 'Por favor, completa el formulario';
      Alert.alert('Error', errorMessage);
    }
  };

  const schema = Yup.object().shape({
    title: Yup.string()
      .min(4, 'El titulo debe tener al menos 4 caracteres')
      .required('El title es requerido'),
    price: Yup.string()
      .min(4, 'El precio debe tener al menos 4 caracteres')
      .required('El precio es requerida'),
    category: Yup.string().required('La categoria es requerida'),
    description: Yup.string()
      .min(4, 'La descripcion debe tener al menos 4 caracteres')
      .required('La descripcion es requerida'),
    image: Yup.array()
      .test('image-count', 'Debe cargar exactamente 4 imágenes', image => {
        return image.length === 4;
      })
      .required('Las imágenes son requeridas'),
  });

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
          field={'price'}
        />

        <Select
          value={category}
          field={'category'}
          onChangeText={onChange}
          placeholder={'Categoria'}
          data={Categories}
        />
        <InputLabel
          placeholder={'Descripcion'}
          field={'description'}
          value={description}
          onChangeText={onChange}
        />
        <Spacer />
        <Spacer />
        <View style={style.row}>
          <Button
            style={style.button2}
            variant="outlined"
            title="Publicar"
            color="white"
            onPress={handleSubmit}
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
