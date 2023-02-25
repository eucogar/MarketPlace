import {StyleSheet} from 'react-native';
import {green} from 'react-native-reanimated/lib/types';
import {
  dangerRed,
  darkBlack,
  graywhite,
  lightGray,
  lightWhite,
  primaryBlue,
  secondaryWhite,
  sucessGren,
} from '../_varibles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: lightGray,
    borderRadius: 16,
    borderColor: darkBlack,
    height: 75,
    width: '45%',
  },
  text: {
    fontSize: 15,
    color: darkBlack,
    fontWeight: 'bold',
    position: 'absolute',
    top: 5,
    left: 40,
  },
  textvalue: {
    color: primaryBlue,
    position: 'absolute',
    top: 5,
    right: 10,
  },
  textpercentage: {
    position: 'absolute',
    bottom: 5,
    left: 40,
  },
  barLeft: {
    justifyContent: 'center',
    width: '20%',
    height: '100%',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  barLeftgren: {
    backgroundColor: sucessGren,
    color: sucessGren,
  },
  barLeftRed: {
    backgroundColor: dangerRed,
    color: dangerRed,
  },
  textLeftgren: {
    color: sucessGren,
  },
  textLeftRed: {
    color: dangerRed,
  },
});
