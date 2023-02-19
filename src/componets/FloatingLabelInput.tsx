import React from 'react';
import {FloatingLabelInput} from 'react-native-floating-label-input';

export default function LabelInput(props: any) {
  return (
    <FloatingLabelInput
      label={props.label}
      value={props.value}
      hintTextColor={props.color}
      mask={props.type}
    />
  );
}
