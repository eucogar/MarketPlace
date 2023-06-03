import {Alert, Image, Text, View} from 'react-native';
import {Box, Button, VStack} from '@react-native-material/core';
import React, {useContext, useEffect, useReducer} from 'react';
import {useForm} from '../hooks/useForm';
import {UserRegister} from '../models/UserRegister';
import {style} from '../themes/Register';
import {
  InitialState,
  RegisterReducer,
} from '../store/user/register/userRegisterReducer';
import Steps from '../components/formSteps/Steps';
import {concatData} from '../store/user/register/actionsRegister';
import {Departament} from '../database/Departmanet';
import * as Yup from 'yup';
import {AuthContext} from '../context/AuthContext';
export default function Register() {
  const {form, onChange} = useForm<UserRegister>({} as UserRegister);
  const {name, lastName, phone, city, email, password} = form;
  const [state, dispach] = useReducer(RegisterReducer, InitialState);
  const {step} = state;
  const {signUp} = useContext(AuthContext);
  const handleSubmit = async () => {
    try {
      await schema.validate(form, {abortEarly: false});
      signUp(form);
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
    name: Yup.string()
      .required('El Nombre es requerido')
      .matches(/^[a-zA-Z\s]+$/, 'El Nombre solo puede contener letras')
      .min(3, 'El Nombre debe tener al menos 3 caracteres')
      .max(50, 'el Nombre debe tener maximo 50 caracteres'),
    lastName: Yup.string()
      .required('El Apellido es requerida')
      .matches(/^[a-zA-Z\s]+$/, 'El Apellido solo puede contener letras')
      .min(3, 'El Apellido debe tener al menos 3 caracteres')
      .max(50, 'el Apellido debe tener maximo 50 caracteres'),
    phone: Yup.number()
      .typeError('El número telefónico debe ser un número')
      .required('El número telefónico es requerido')
      .test(
        'longitud',
        'El teléfono debe tener exactamente 10 dígitos y comenzar con 3',
        value => {
          if (value) {
            const phoneNumber = String(value);
            return phoneNumber.length === 10 && phoneNumber.startsWith('3');
          }
          return false;
        },
      ),
    password: Yup.string()
      .required('La contraseña es requerida')
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .max(20, 'La contraseña debe tener maximo 20 caracteres')
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'La contraseña debe contener al menos una letra, un número y un carácter especial',
      ),
    city: Yup.string().required('La Ciudad es requerida'),
    email: Yup.string()
      .email('Ingrese un correo electrónico válido')
      .required('El correo electrónico es requerido')
      .min(6, 'el email debe tener minimo 6 caracteres')
      .max(50, 'el email debe tener maximo 50 caracteres')
      .test('dominio', 'El correo electrónico debe ser de Gmail', value => {
        if (value) {
          return value.endsWith('@gmail.com');
        }
        return false;
      }),
  });

  const Next = () => {
    dispach({
      type: concatData,
      payload: {
        user: form,
        step: step + 1,
        valid: false,
      },
    });
  };

  const Back = () => {
    dispach({
      type: concatData,
      payload: {
        user: form,
        step: step - 1,
        valid: false,
      },
    });
  };

  useEffect(() => {
    updateStep();
  }, [step]);

  const updateStep = () => {
    switch (step) {
      case 0: {
        return (
          <View>
            <View style={style.carga1}>
              <Text style={style.color2}>1</Text>
              <Box style={style.spacer2} />
              <Text style={style.color2}>2</Text>
              <Box style={style.spacer2} />
              <Text style={style.color2}>3</Text>
            </View>
            <Steps
              onChange={onChange}
              text1={'Nombre'}
              text2={'Apellido'}
              key1={'name'}
              key2={'lastName'}
              value1={name}
              value2={lastName}
            />
          </View>
        );
      }
      case 1: {
        return (
          <View>
            <View style={style.carga1}>
              <Text style={style.color}>1</Text>
              <Box style={style.spacer1} />
              <Text style={style.color2}>2</Text>
              <Box style={style.spacer2} />
              <Text style={style.color2}>3</Text>
            </View>
            <Steps
              onChange={onChange}
              text1={'Celular'}
              text2={'Ciudad'}
              select
              data={Departament}
              key1={'phone'}
              key2={'city'}
              value1={phone}
              value2={city}
            />
          </View>
        );
      }
      case 2: {
        return (
          <View>
            <View style={style.carga1}>
              <Text style={style.color}>1</Text>
              <Box style={style.spacer1} />
              <Text style={style.color}>2</Text>
              <Box style={style.spacer1} />
              <Text style={style.color2}>3</Text>
            </View>
            <Steps
              onChange={onChange}
              text1={'Email'}
              text2={'Password'}
              key1={'email'}
              key2={'password'}
              value1={email}
              value2={password}
            />
          </View>
        );
      }
    }
  };

  return (
    <>
      <VStack m={50} spacing={7}>
        <Text style={style.title}>Genial que estes aqui!</Text>
        <Text style={style.Text}>Por favor llena todos los campos </Text>
        <View style={style.container}>
          <Image style={style.img} source={require('../assets/Logo.jpg')} />
        </View>
        {updateStep()}
        <View style={style.Button}>
          {step !== 0 && (
            <Button
              variant="outlined"
              title="Atras"
              color="#537FE7"
              onPress={Back}
            />
          )}
          {step !== 2 ? (
            <Button
              title="Siguiente"
              tintColor="white"
              color="#537FE7"
              onPress={Next}
            />
          ) : (
            <Button
              title="Enviar"
              tintColor="white"
              color="#537FE7"
              onPress={handleSubmit}
            />
          )}
        </View>
      </VStack>
    </>
  );
}
