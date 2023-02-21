import { StyleSheet } from "react-native";
import { dangerRed, lightGray,sucessGren } from "../_varibles";

export const styles = StyleSheet.create({
  container:{
    flexDirection: "row",
    width: "100%"
  },
  circleIcon:{
    borderRadius: 100,
    backgroundColor: lightGray,
    width: 50,
    height:50,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  containerText:{
    position: "relative",
    alignSelf: "center",
    width: "100%",
    borderStyle: "solid",
    borderBottomColor:lightGray,
    borderBottomWidth: 1,
    marginBottom: 5
  },
  title:{
    fontSize: 15,
    fontWeight: "bold",
  },
  subTitle:{
    marginVertical: 5
  },
  value:{
    position:"absolute",
    right: "35%",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  valuegren:{
    color: sucessGren
  },
  valueRed:{
    color: dangerRed
  },
  textpercentage: {
    position:'absolute',
    bottom: 5,
    left: 40,
  },
  barLeft:{
    width:'20%',
    height: '100%',
    alignItems: 'flex-start',
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    borderLeftColor: 10,
  },
  barLeftgren:{
    backgroundColor: sucessGren,
    color: sucessGren
  },
  barLeftRed:{
    backgroundColor: dangerRed,
    color: dangerRed
  },
  textLeftgren:{
    color: sucessGren
  },
  textLeftRed:{
    color: dangerRed
  }
})
