import {Alert, Image, Linking, Pressable, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect, useState} from 'react';
import {styles} from '../themes/ViewProductc';
import {DeleteProduct, Eliminar, User} from '../services/APIS';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';
import {Button} from '@react-native-material/core';
import ImageViewer from 'react-native-image-zoom-viewer';

interface Props extends StackScreenProps<any, any> {}

export const EditProduct = ({route: {params}, navigation}: Props) => {
  const {
    item: {image1, image2, image3, image4, fk_email, description, price, id},
  } = params;
  const {
    user: {email},
  } = useContext(AuthContext);
  useEffect(() => {}, [email]);
  const handleDeleteAndNavigate = () => {
    Eliminar(id).then(message => {
      Alert.alert(message);
      navigation.navigate('MarketPlace');
    });
  };

  const [isFavorite, setIsFavorite] = useState(false);
  const [isImageViewerVisible, setIsImageViewerVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [phone, setPhone] = useState('');

  const images = [{url: image1}, {url: image2}, {url: image3}, {url: image4}];

  const handleFavorite = () => {
    DeleteProduct(id)
      .then(message => {
        Alert.alert(message);
        navigation.navigate('MarketPlace');
      })
      .catch(error => {
        Alert.alert('Error al eliminar el producto', error.message);
      });
  };
  const numero = async () => {
    const data = await User(fk_email);
    setPhone(data);
  };
  useEffect(() => {
    numero();
  }, []);
  const handleWhatsApp = async () => {
    const phoneNumber = Object.values(phone)[0];
    await Linking.openURL(
      `https://wa.me/57${phoneNumber}?text=${description}, Sigue disponible?`,
    );
  };

  return (
    <>
      {isImageViewerVisible ? (
        <ImageViewer
          imageUrls={images}
          index={currentImageIndex}
          enableSwipeDown
          onCancel={() => setIsImageViewerVisible(false)}
        />
      ) : (
        <>
          <Text style={styles.title}>MARKETPLACE</Text>
          <View>
            <View style={styles.position}>
              <Pressable
                onPress={() => {
                  setCurrentImageIndex(0);
                  setIsImageViewerVisible(true);
                }}>
                <Image source={{uri: image1}} style={styles.image} />
              </Pressable>
              <Pressable
                onPress={() => {
                  setCurrentImageIndex(1);
                  setIsImageViewerVisible(true);
                }}>
                <Image source={{uri: image2}} style={styles.image} />
              </Pressable>
            </View>
            <View style={styles.position}>
              <Pressable
                onPress={() => {
                  setCurrentImageIndex(2);
                  setIsImageViewerVisible(true);
                }}>
                <Image source={{uri: image3}} style={styles.image} />
              </Pressable>
              <Pressable
                onPress={() => {
                  setCurrentImageIndex(3);
                  setIsImageViewerVisible(true);
                }}>
                <Image source={{uri: image4}} style={styles.image} />
              </Pressable>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginLeft: 15}}>
            <Text style={styles.describe}>Precio: $ </Text>
            <Text style={{fontSize: 20}}>{price}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 15,
              height: 'auto',
              width: '100%',
              alignItems: 'center',
            }}>
            <Text style={styles.describe}>Descripcion: </Text>
            <Text style={{fontSize: 20, flexShrink: 1}}>{description}</Text>
          </View>
          {fk_email === email ? (
            <View style={styles.Button}>
              <Button
                color="#537FE7"
                onPress={() => handleDeleteAndNavigate()}
                title={'eliminar'}
                variant="text"
              />
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
              <Pressable onPress={handleWhatsApp}>
                <Icon name={'logo-whatsapp'} size={50} color={'#25D366'} />
              </Pressable>
            </View>
          )}
        </>
      )}
    </>
  );
};
