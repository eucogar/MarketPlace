import {Image, Pressable, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect, useState} from 'react';
import {styles} from '../themes/ViewProductc';
import {Eliminar} from '../services/APIS';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';
import {Button} from '@react-native-material/core';
interface Props extends StackScreenProps<any, any> {}

export const ViewProduct = ({route: {params}, navigation}: Props) => {
  const {
    item: {image1, image2, image3, image4, fk_email, description, price, id},
  } = params;
  const {
    user: {email},
  } = useContext(AuthContext);
  useEffect(() => {
  }, [email]);
  const handleDeleteAndNavigate = () => {
    Eliminar(id);
    navigation.navigate('MarketPlace');
  };

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

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
        <Text style={styles.describe}>Precio: $ </Text>
        <Text style={{fontSize: 20}}>{price}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.describe}>Descripcion: </Text>
        <Text style={{fontSize: 20}}>{description}</Text>
      </View>
      {fk_email === email ? (
        <View style={styles.Button}>
          <Button
            color="#537FE7"
            onPress={() => handleDeleteAndNavigate()}
            title={'eliminar'}
            variant="text"
          />
          <Button style={styles.button2} title={'Modificar'} />
        </View>
      ) : (
        <View style={styles.Button}>
          <Pressable onPress={handleFavorite}>
            {isFavorite ? (
              <Icon name={'heart-outline'} size={50} color={'#537FE7'} />
            ) : (
              <Icon
                name={'heart-dislike-outline'}
                size={50}
                color={'#537FE7'}
              />
            )}
          </Pressable>
          <Pressable>
            <Icon name={'logo-whatsapp'} size={50} color={'#25D366'} />
          </Pressable>
        </View>
      )}
    </>
  );
};
