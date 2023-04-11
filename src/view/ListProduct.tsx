import {View} from 'react-native';
import {Button, Spacer, VStack} from '@react-native-material/core';
import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect, useState} from 'react';
import {useForm} from '../hooks/useForm';
import {User} from '../models/User';
import {AuthContext} from '../context/AuthContext';
import {MyProducts} from '../services/APIS';
import {FlatLists} from '../components/FlatList';

interface Props extends StackScreenProps<any, any> {}
export const ListProduct = ({navigation}: Props) => {
  const {form, onChange} = useForm<User>({} as User);
  const {user} = form;
  const {
    user: {email},
  } = useContext(AuthContext);

  useEffect(() => {
    onChange(email, 'user');
  }, []);

  const [Product, setProduct] = useState([]);
  const getProduct = async () => {
    const data = await MyProducts(form);
    setProduct(data);
  };
  useEffect(() => {
    getProduct();
  }, [form]);

  return (
    <VStack>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button title="Mis Productos" color="#537FE7" tintColor="white" />
        <Spacer />
        <Button variant="outlined" title="Mis Favoritos" color="#537FE7" />
      </View>
      <View>
        <FlatLists data={Product} />
      </View>
    </VStack>
  );
};
