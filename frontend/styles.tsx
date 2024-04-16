import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#AEC5EB",
      },
    titleText:{ 
        fontFamily: "KaiseiOpti_700Bold",
        color: "#331B4B",
        fontSize: 50,
        margin: 10,
    },
    subtitleText:{ 
        fontFamily: "KaiseiOpti_400Regular",
        color: "#331B4B",
        fontSize: 25,
        margin: 10,
    },
    normalText:{ 
        fontFamily: "KaiseiOpti_400Regular",
        color: "#331B4B",
        fontSize: 18,
        margin: 10,
    },
    orText:{ 
        fontFamily: "KaiseiOpti_400Regular",
        color: "#331B4B",
        fontSize: 35,
        textAlign: "center",
    },
    buttonContainer:{ 
        height: 70, 
        width: 360, 
        borderRadius: 37, 
        margin: 10
    },
    buttonText:{ 
        fontFamily: "KaiseiOpti_400Regular",
        color: "black",
        fontSize: 31,
    },
    normalLogo:{
        height: 141,
        width: 155,
        alignSelf: "center",
        
    },
    bigLogo:{
        height: 334,
        width: 368,
    },
    inputContainer:{ 
        height: 70, 
        width: 360, 
        borderRadius: 37, 
        margin: 10,
        backgroundColor:"white",
        paddingHorizontal: 25
    },
    inputText:{ 
        height: 70, 
        width: 360, 
        borderRadius: 37, 
        margin: 10,
        backgroundColor:"white"
    },


  });
  
export default styles;