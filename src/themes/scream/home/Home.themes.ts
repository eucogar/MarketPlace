import { StyleSheet } from "react-native";
import { graywhite, lightWhite, primaryBlue } from "../../_varibles";

export const styles = StyleSheet.create({
  container : {
    paddingHorizontal: 10,
    height: "100%",
    backgroundColor: lightWhite
  },
  card:{
    height: "35%",
    backgroundColor: primaryBlue,
    borderRadius: 15,
  },
  textValue:{
    flex:1,
    position: "relative",
    fontSize: 30,
    color: lightWhite,
    alignSelf: "flex-end",
    margin:20
  },
  textSaldo:{
    position: "relative",
    fontWeight: "bold",
    fontSize: 20,
    color: lightWhite,
     alignItems: "center",
    alignSelf: "center",
    justifyContent: "center"
  },
  textUser:{
    position: "relative",
    fontWeight: "bold",
    fontSize: 20,
    color: lightWhite,
    alignSelf: "flex-start",
    margin:20
  },
  containercard:{
    justifyContent: 'space-around',
    marginTop: 15,
    flexDirection: 'row',
    alignContent: 'space-between',
    minHeight: 80,
  },
  subtitle:{
    fontSize: 25,
    marginVertical: 7,
    fontWeight: "bold",
  },
  scrollView:{
    flex:1,
    backgroundColor: primaryBlue,
    height: 500
  }
  
});
