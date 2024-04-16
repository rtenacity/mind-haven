import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

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
        fontSize: 0.12 * width,
        marginVertical: 0.03 * width,
        marginHorizontal: 0.06 * width,
    },
    subtitleText:{ 
        fontFamily: "KaiseiOpti_400Regular",
        color: "#331B4B",
        fontSize: 0.06 * width,
        margin: 0.03 * width,
    },
    normalText:{ 
        fontFamily: "KaiseiOpti_400Regular",
        color: "#331B4B",
        fontSize: 0.04 * width,
        marginVertical: 0.03 * width,
        marginHorizontal: 0.06 * width,
    },
    orText:{ 
        fontFamily: "KaiseiOpti_400Regular",
        color: "#331B4B",
        fontSize: 0.08 * width,
        textAlign: "center",
    },
    buttonContainer:{ 
        height: 0.08 * height, 
        width: 0.85 * width, 
        borderRadius: 0.1 * width, 
        margin: 0.02 * width
    },
    buttonText:{ 
        fontFamily: "KaiseiOpti_400Regular",
        color: "black",
        fontSize: 0.07 * width,
    },
    normalLogo:{
        height: height * 0.15,
        width: width * 0.35,
        alignSelf: "center",
        
    },
    bigLogo:{
        height: 0.38 * height,
        width: 0.85 * width,
    },
    inputContainer:{ 
        height: 0.08 * height, 
        width: 0.83 * width, 
        borderRadius: 0.09 * width, 
        margin: 0.02 * width,
        backgroundColor:"white",
        paddingHorizontal: 0.06 * width
    },
  inputText: { 
        height: 0.08 * height, 
        width: 0.83 * width, 
        borderRadius: 0.09 * width, 
        margin: 0.02 * width,
        backgroundColor:"white"
    },


  });
  
export default styles;
