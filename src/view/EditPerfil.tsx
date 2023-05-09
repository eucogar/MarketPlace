import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {useForm} from '../hooks/useForm';
import {UserRegister} from '../models/UserRegister';
import {Button, VStack} from '@react-native-material/core';
import {styles} from '../themes/EditPerfil';
import {Alert, ScrollView, Text, View} from 'react-native';
import {style} from '../themes/MatketPlace';
import {InputText} from '../components/TextInput';
import {Select} from '../components/Select';
import {Departament} from '../database/Departmanet';
import * as Yup from 'yup';
import {AuthContext} from '../context/AuthContext';

interface Props extends StackScreenProps<any, any> {}

export const EditPerfil = ({route: {params}, navigation}: Props) => {
  const {form, onChange} = useForm<UserRegister>(params as UserRegister);
  const {name, lastName, phone, city, password} = form;

  useEffect(() => {
    console.log(params);
  }, [form]);
  const {SignUpdate} = useContext(AuthContext);
  const handleSubmit = async () => {
    try {
      await schema.validate(form, {abortEarly: false});
      SignUpdate(form);
    } catch (error) {
      const errorMessage =
        error.inner.length > 0
          ? error.inner[0].message
          : 'Por favor, completa el formulario';
      Alert.alert('Error', errorMessage);
    }
  };

  const schema = Yup.object().shape({
    name: Yup.string()
      .min(4, 'El Nombre debe tener al menos 4 caracteres')
      .required('El Nombre es requerido'),
    lastName: Yup.string()
      .min(4, 'El Apellido debe tener al menos 4 caracteres')
      .required('El Apellido es requerida'),
    phone: Yup.number()
      .required('El telefono es requerida')
      .min(10, 'El telefono debe tener mini 4 caracteres'),
    city: Yup.string()
      .min(4, 'La descripcion debe tener al menos 4 caracteres')
      .required('La descripcion es requerida'),
    password: Yup.string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .required('La contraseña es requerida'),
  });
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          <Text style={style.title}>Editar Perfil</Text>
        </View>
        <VStack m={50} spacing={7}>
          <InputText value={name} onChangeText={onChange} field={'name'} />
          <InputText
            value={lastName}
            onChangeText={onChange}
            field={'lastName'}
          />
          <Select
            defaultValue={params.city}
            value={city}
            field={'category'}
            onChangeText={onChange}
            placeholder={'city'}
            data={Departament}
          />
          <InputText value={phone} onChangeText={onChange} field={'phone'} />
          <InputText
            value={password}
            secureTextEntry={true}
            onChangeText={onChange}
            field={'password'}
          />
          <View style={styles.btm}>
            <Button
              color="#537FE7"
              tintColor="white"
              onPress={handleSubmit}
              title={'Modificar'}
            />
          </View>
        </VStack>
      </ScrollView>
    </>
  );
};
