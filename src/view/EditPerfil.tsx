import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect, useState} from 'react';
import {ModificarUser, User} from '../services/APIS';
import {AuthContext} from '../context/AuthContext';
import {useForm} from '../hooks/useForm';
import {UserRegister} from '../models/UserRegister';
import {Button, VStack} from '@react-native-material/core';
import {styles} from '../themes/EditPerfil';
import Icon from 'react-native-vector-icons/Ionicons';
import {Pressable, Text, View} from 'react-native';
import {style} from '../themes/MatketPlace';
import {InputText} from '../components/TextInput';
import {Select} from '../components/Select';
import {Departament} from '../database/Departmanet';

interface Props extends StackScreenProps<any, any> {}

export const EditPerfil = ({navigation}: Props) => {
  const {form, onChange} = useForm<UserRegister>({} as UserRegister);
  const {name, lastName, phone, city, password} = form;
  const [user, setuser] = useState([]);
  const {
    user: {email},
  } = useContext(AuthContext);
  const getuser = async () => {
    const data = await User(email);
    setuser(data);
  };
  useEffect(() => {
    getuser();
    onChange(email, 'email');
  }, [email]);
  return (
    <>
      <View style={style.container}>
        <Text style={style.title}>Editar Perfil</Text>
      </View>
      <VStack m={50} spacing={7}>
        <InputText
          value={name}
          defaultValue={user.name}
          onChangeText={onChange}
          field={'name'}
        />
        <InputText
          value={lastName}
          defaultValue={user.lastName}
          onChangeText={onChange}
          field={'lastName'}
        />
        <Select
          value={city}
          defaultValue={user.city}
          field={'category'}
          onChangeText={onChange}
          placeholder={'city'}
          data={Departament}
        />
        <InputText
          value={phone}
          defaultValue={user.phone}
          onChangeText={onChange}
          field={'phone'}
        />
        <InputText
          value={password}
          secureTextEntry={true}
          defaultValue={user.password}
          onChangeText={onChange}
          field={'password'}
        />
        <View style={styles.btm}>
          <Button
            color="#537FE7"
            tintColor="white"
            onPress={() => ModificarUser(form)}
            title={'Modificar'}
          />
        </View>
      </VStack>
    </>
  );
};
