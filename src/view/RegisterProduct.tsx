import {Button, Spacer, VStack} from '@react-native-material/core';
import {style} from '../themes/Product';
import {Select} from '../components/Select';
import {InputLabel} from '../components/InputLabel';
import {useForm} from '../hooks/useForm';
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
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RegisterProduct} from '../models/RegisterProduct';

export const registerProduct = () => {
  const {form, onChange, clearFields} = useForm<RegisterProduct>(
    {} as RegisterProduct,
  );
  const {image, title, price, category, description, user} = form;
  const removeImage = (index: number) => {
    const newImages = [...image];
    newImages.splice(index, 1);
    onChange(newImages, 'image');
  };
  const Clear = () => {
    clearFields();
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
            text: 'Cancelar',
            style: 'cancel',
          },
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
      RegisterPoduct(form).then(message => {
        Alert.alert(message);
        clearFields();
      });
    } catch (error) {
      const errorMessage =
        // @ts-ignore
        error.inner.length > 0
          ? // @ts-ignore
            error.inner[0].message
          : 'Por favor, completa el formulario';
      Alert.alert('Error', errorMessage);
    }
  };

  const schema = Yup.object().shape({
    title: Yup.string()
      .min(4, 'El titulo debe tener al menos 4 caracteres')
      .max(50, 'El titulo debe tener menos de 50 caracteres')
      .required('El title es requerido'),
    price: Yup.string()
      .min(1, 'El precio debe tener al menos 1 caracteres')
      .required('El precio es requerida'),
    category: Yup.string().required('La categoria es requerida'),
    description: Yup.string()
      .min(1, 'La descripcion debe tener al menos 4 caracteres')
      .max(200, 'la descripcion debe tener menos de 200 caracteres')
      .required('La descripcion es requerida'),
    image: Yup.array()
      .test('imageCount', 'Debes cargar 4 imágenes', value => {
        return value && value.length === 4;
      })
      .of(Yup.string().required('La imagen es requerida')),
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
                    <Image
                      source={{uri: item}}
                      style={{width: 50, height: 50}}
                    />
                    <View style={{position: 'absolute', top: 0, right: 0}}>
                      <Icon
                        name="close-circle-outline"
                        size={20}
                        color="white"
                      />
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
          <Text>
            Puedes incluir detalles como la marca, el tamaño o el color
          </Text>

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
              onPress={Clear}
              variant="text"
              title="Cancelar"
              color="#537FE7"
            />
          </View>
        </VStack>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
