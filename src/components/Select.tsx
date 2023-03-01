import SelectDropdown from 'react-native-select-dropdown';
import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type SelectProps = {
  placeholder: string;
  value: any;
  onChangeText: Function;
  field: string;
};

export const Select = (props: SelectProps) => {
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  const {placeholder, value, onChangeText, field} = props;
  return (
    <SelectDropdown
      data={countries}
      onSelect={value}
      onChangeSearchInputText={value => onChangeText(value, field)}
      defaultButtonText={placeholder}
      buttonTextStyle={{
        left: 110,
        fontSize: 13,
        color: 'gray',
      }}
      renderDropdownIcon={() => (
        <Icon name="caret-down-outline" size={20} color="#000" />
      )}
      buttonStyle={{
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        backgroundColor: 'white',
        width: 310,
        marginTop: 10,
      }}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }}
    />
  );
};
