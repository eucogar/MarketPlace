import { StyleSheet } from "react-native";
import { lightWhite, primaryBlue } from "../../_varibles";

export const styles = StyleSheet.create({
  container : {
    flex:1,
    justifyContent: 'space-evenly',
    flexDirection:"row",
    alignItems:"center"
  },
  buttonStyles:{
    backgroundColor: primaryBlue,
    borderRadius: 15,
    width: "40%"
  },
  textStyles:{
    textAlign:"center",
    fontSize: 20,
    color: lightWhite,
    margin:15
  },
});
