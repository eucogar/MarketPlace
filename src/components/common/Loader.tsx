import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {styles} from '../../themes/components/common/Loader.themes';
import {primaryBlue} from '../../themes/_varibles';

export default function Loader() {
  return (
    <View style={[styles.container]}>
      <ActivityIndicator size="large" color={primaryBlue} />
    </View>
  );
}
