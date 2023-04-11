import {Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useEffect} from "react";
interface Props extends StackScreenProps<any, any> {}

export const ViewProduct = ({route: {params}, navigation}: Props) => {
  const {
    item: {title},
  } = params;
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return <Text>{title}</Text>;
};
