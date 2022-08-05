import {StyleSheet} from "react-native";

const loginStyle=StyleSheet.create({
    content: {
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "rgb(0,205,156)"
    },

    view:{
      width: "95%",
    },

    CardTitle:{
      color:"rgb(101,37,131)"
    },
    cardButton:{
      color: "rgb(51,122,183)",
      margin:2,
      marginLeft:0,
      marginRight: 0
    }
})

export default loginStyle;