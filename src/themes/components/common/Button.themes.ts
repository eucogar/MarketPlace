import { StyleSheet } from "react-native";
import { dangerRed, darkBlack, lightWhite, primaryBlue, sucessGren } from "../../_varibles";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: lightWhite,
    padding:15,
    shadowRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 1,
    borderRadius: 30,
    elevation:1
  },
  buttonOutlet: {
    borderWidth:1,
    borderColor: lightWhite,
    borderStyle:"solid",
    padding:15,
    shadowRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 1,
    borderRadius: 30,
  },
  text:{
    fontSize:20,
    fontWeight: "bold"
  },
  ligth:{
    color : lightWhite,
  },
  dark:{
    color : darkBlack,
  },
  danger:{
    color : dangerRed,
  },
  primary:{
    color : primaryBlue,
  },
  susses:{
    color : sucessGren,
  }
});
