import React from "react";
import { KeyboardType, Text, TextInput, TouchableOpacity, TouchableOpacityComponent, View } from "react-native";
import { stylesDark, stylesLigth } from "../../themes/components/common/Input.themes";
import { darkBlack, lightWhite, secondaryWhite } from "../../themes/_varibles";

type InputProps = {
  label: string
  name: string
  onChange: Function
  value: any
  keyboardType: KeyboardType
  secureTextEntry? : boolean
  placeholder?: string
  rules?: any
  placeholderTextColor?: string
  dark?:boolean,
  editable? : boolean
  onPress?: ()=> void
}

export default function Input(props: InputProps){

  const { secureTextEntry, name, label, editable,onPress,
    rules, placeholder, keyboardType, placeholderTextColor, onChange, value, dark } = props

  const styles = dark? stylesDark : stylesLigth;

  return(
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
     <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
       <TextInput
         onChangeText={value => onChange(value, name)} value={value? value.toString(): ""} style={styles.inputField}
         placeholder={placeholder} placeholderTextColor={placeholderTextColor}
         keyboardType = {keyboardType} underlineColorAndroid={dark? secondaryWhite :lightWhite}
         secureTextEntry={secureTextEntry} selectionColor={dark? secondaryWhite :lightWhite}
         editable={editable}
       />
     </TouchableOpacity>
    </View>
  )
}
