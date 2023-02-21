import React, { ReactElement } from "react";
import { View } from "react-native";

type FormProps = {
  children: ReactElement,
  methods: any
}

export const FormContext = React.createContext(null);

export default function Form<T extends Object>(props:FormProps){
  const { children, methods } = props
  const {onChange} = methods
  return (
    <View style={{width: '100%'}}>
        <FormContext.Provider value={onChange} >
          {children}
        </FormContext.Provider>
    </View>
  )
}
