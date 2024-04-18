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
        margin: 0.05 * width,
    },
    subtitleText:{ 
        fontFamily: "KaiseiOpti_400Regular",
        color: "#331B4B",
        fontSize: 0.06 * width,
        marginHorizontal: 0.05 * width,
    },
    normalText:{ 
        fontFamily: "KaiseiOpti_400Regular",
        color: "#331B4B",
        fontSize: 0.04 * width,  
        margin: 0.045 * width,
    },
    orText:{ 
        fontFamily: "KaiseiOpti_400Regular",
        color: "#331B4B",
        fontSize: 0.08 * width,
        textAlign: "center",
    },
    buttonContainer:{ 
        height: 0.075 * height, 
        width: 0.85 * width, 
        borderRadius: 0.09 * width, 
        margin: 0.02 * width,
    },
    buttonText:{ 
        fontFamily: "KaiseiOpti_400Regular",
        color: "black",
        fontSize: 0.045 * width,
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
        backgroundColor: "white",
        width: 0.85 * width,
        height: 0.08 * height,
        borderRadius: 0.03 * height,
        padding: 0.05 * width,
        fontSize: 0.05 * width,
    },
    inputText: { 
        height: 0.08 * height, 
        width: 0.83 * width, 
        borderRadius: 0.09 * width, 
        margin: 0.02 * width,
        backgroundColor:"white"
    },
    errorText:{ 
        fontFamily: "KaiseiOpti_400Regular",
        color: "#331B4B",
        fontSize: 15,
        margin: 10,
        
    },
    fieldText: {
      fontFamily: "KaiseiOpti_400Regular",
      color: "#331B4B",
      fontSize: 0.05 * width,
      margin: 0.02 * width,
    },
  });
  
export default styles;
