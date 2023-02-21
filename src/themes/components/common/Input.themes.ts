import { StyleSheet } from "react-native";
import { darkBlack, lightWhite } from "../../_varibles";

export const stylesLigth = StyleSheet.create({
  input: {
    marginBottom: 15,
  },
  label:{
    color: lightWhite,
    fontWeight: "bold",
  },
  inputContainer:{
    marginBottom: 25,
  },
  inputField:{
    color: lightWhite,
    fontSize: 15,
  }
});

export const stylesDark = StyleSheet.create({
  input: {
    marginBottom: 15,
  },
  label:{
    color: darkBlack,
  },
  inputContainer:{
    marginBottom: 25,
  },
  inputField:{
    color: darkBlack,
    fontSize: 15,
  }
});
