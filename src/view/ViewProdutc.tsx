import {Image, Pressable, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {styles} from '../themes/ViewProductc';
import {User} from '../services/APIS';
import Icon from 'react-native-vector-icons/Ionicons';
interface Props extends StackScreenProps<any, any> {}

export const ViewProduct = ({route: {params}, navigation}: Props) => {
  const [user, setuser] = useState([]);
  const {
    item: {title, image1, image2, image3, image4, fk_email, description, price},
  } = params;
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const getuser = async () => {
    const data = await User(fk_email);
    setuser(data);
  };
  useEffect(() => {
    getuser();
  }, [fk_email]);
  return (
    <>
      <Text style={styles.title}>MARKETPLACE</Text>
      <View>
        <View style={styles.position}>
          <Image source={{uri: image1}} style={styles.image} />
          <Image source={{uri: image2}} style={styles.image} />
        </View>
        <View style={styles.position}>
          <Image source={{uri: image3}} style={styles.image} />
          <Image source={{uri: image4}} style={styles.image} />
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.describe}>Vendedor: </Text>
        <Text style={{fontSize: 20}}>{user.name}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.describe}>Precio: $ </Text>
        <Text style={{fontSize: 20}}>{price}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.describe}>Descripcion: </Text>
        <Text style={{fontSize: 20}}>{description}</Text>
      </View>
      <View style={styles.Button}>
        <Pressable>
          <Icon name={'bookmark-outline'} size={50} color={'gray'} />
        </Pressable>
        <Pressable>
          <Icon name={'logo-whatsapp'} size={50} color={'#25D366'} />
        </Pressable>
      </View>
    </>
  );
};
