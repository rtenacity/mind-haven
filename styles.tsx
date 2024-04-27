import { StyleSheet, Dimensions } from 'react-native';
import MeditationBar from './component/MeditationBar';
const { width, height } = Dimensions.get('window');


const styles = StyleSheet.create({


    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#AEC5EB",
    },
    dashboardContainer: {
        flex: 1,
        alignItems: "flex-start",
        backgroundColor: "#AEC5EB",
        position: 'relative',
    },
    circleText: {
        // change font size
        fontSize: 0.11 * width,
        width: 0.14 * width,
        height: 0.14 * width,
        borderRadius: 0.07 * width,  // Simplified calculation for half of width
        backgroundColor: '#D9D9D9',
        marginRight: 0.02 * width,
        color: '#331B4B',               // Changed text color to blue
        // Removed paddingVertical and paddingHorizontal as we'll center using flex
        overflow: 'hidden',
        maxWidth: '100%',
        justifyContent: 'center',    // Center content vertically (applies if Text is within a View)
        alignItems: 'center',        // Center content horizontally (applies if Text is within a View)
        textAlign: 'center',         // Ensure text is centered horizontally
    },
    titleText:{ 
        fontFamily: "KaiseiOpti_700Bold",
        color: "#331B4B",
        fontSize: 0.12 * width,
        marginHorizontal: 0.02 * width,
        marginVertical: 0.02 * width,
        textAlign: "center",
    },
    chatTitleText:{ 
        fontFamily: "KaiseiOpti_700Bold",
        color: "#331B4B",
        fontSize: 0.10 * width,
        marginHorizontal: 0.02 * width,
        marginVertical: 0.02 * width,
        textAlign: "center",
    },
    subtitleText:{ 
        fontFamily: "KaiseiOpti_400Regular",
        color: "#331B4B",
        fontSize: 0.06 * width,
        marginHorizontal: 0.06 * width,
        marginVertical: 0.02 * width,
    },
    inputTextAbove:{
        fontFamily: "KaiseiOpti_400Regular",
        color: "#331B4B",
        fontSize: 0.06 * width,
        width: 0.85 * width,
        height: 0.08 * height,
        borderRadius: 0.03 * height,
        padding: 0.05 * width,
        marginHorizontal: 0.02 * width,
    },
    normalText:{ 
        fontFamily: "KaiseiOpti_400Regular",
        color: "#331B4B",
        fontSize: 0.04 * width,  
        marginHorizontal: 0.06 * width,
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
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,  
    },
    buttonText:{ 
        fontFamily: "KaiseiOpti_400Regular",
        color: "black",
        fontSize: 0.06 * width,
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
        marginHorizontal: 0.02 * width,
        fontSize: 0.05 * width,
        marginVertical: 0.02 * width,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,  
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
    authText: {
        fontFamily: "KaiseiOpti_400Regular",
        color: "black",
        fontSize: 0.044 * width,
    },
    headerDashboard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        alignContent: 'center',
        margin: 0.05 * width,

        
    },
    headerIconImage: {
        width: 0.14* width,
        height: 0.14 * width,   
    },
    headerIconText: {
        fontFamily: "KaiseiOpti_700Bold",
        color: "#331B4B",
        fontSize: 0.05 * width,
    },
    leftSideDashboard: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 0.225 * width,
    },
    circle: {
        width: 0.14 * width,
        height: 0.14 * width, 
        borderRadius: 0.14 * width/2,
        backgroundColor: '#D9D9D9',
        marginRight: 0.02 * width,
    },
    dashboardTitle: {
        fontFamily: "KaiseiOpti_700Bold",
        color: "#331B4B",
        fontSize: 0.08 * width,
        alignItems: 'flex-start',
        marginHorizontal: 0.05 * width,
    },
    dashBox: {
        width: 0.9 * width,
        height: 0.42 * height,
        backgroundColor: '#9DBDF3',
        borderRadius: 0.04 * width,
        marginHorizontal: 0.05 * width,
        marginBottom: 0.05 * width,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,  
    },
    journalEntries: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 0.04 * width,
        marginTop: 0.04 * width,
        position: 'relative',
    },
    imageJournalEntry: {
        backgroundColor: '#AFCDFF',
        width: 0.15 * width,
        height: 0.15 * width,
        borderRadius: 0.04 * width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    journalTitle: {
        fontFamily: "KaiseiOpti_700Bold",
        color: "black",
        fontSize: 0.05 * width,
    },
    journalDate: {
        fontFamily: "KaiseiOpti_400Regular",
        color: "black",
        fontSize: 0.04 * width,
    },
    moreButton: {
        backgroundColor: '#AFCDFF',
        flexDirection: 'row',
        width: 0.9 * width,
        height: 0.125 * width,
        borderRadius: 0.04 * width,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0
    },
    graphContainer: {
        margin: 0.03 * width,
        height: 0.3 * height,
    },
    meditationText: {
        fontFamily: "KaiseiOpti_400Regular",
        color: "#331B4B",
        fontSize: 0.06 * width,
        marginHorizontal: 0.05 * width,
        marginVertical: 0.03 * width,
    },
    newJournal: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 0.05 * width,
    },
    journalBox: {
        width: 0.9 * width,
        backgroundColor: '#9DBDF3',
        borderRadius: 0.04 * width,
        marginHorizontal: 0.05 * width,
        marginBottom: 0.05 * width,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,  
    },
    headerJournal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 0.02 * width,
        paddingHorizontal: 0.05 * width,
    },
    titleTextbox: {
        width: 0.5 * width,
        height: 0.07 * height,
        backgroundColor: '#9DBDF3',
        borderRadius: 0.04 * width,
        padding: 0.02 * width,  
        fontFamily: "KaiseiOpti_700Bold",
        fontSize: 0.07 * width,
        color: "black",
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
    },
    titleJournal: {
        width: 0.6 * width,
        height: 0.07 * height,
        borderRadius: 0.04 * width,
        padding: 0.02 * width,  
        fontFamily: "KaiseiOpti_700Bold",
        fontSize: 0.07 * width,
        color: "black",
    },
    navbarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 0.02 * width,
        paddingHorizontal: 0.05 * width,
    },
    titleMeditation: {
        fontFamily: "KaiseiOpti_700Bold",
        color: "#331B4B",
        fontSize: 0.08 * width,
    },
    meditationButtonSetup: {
        width: 125,
        height: 55,
        borderRadius: 20,
        marginHorizontal: 10
    },
    meditationButtonViewSetup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        marginVertical: 10
    },
    meditationButtonText: {
        color: '#331B4B',
        fontSize: 25,
        fontFamily: "KaiseiOpti_400Regular",
    },
    realMeditationScreenContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    meditationScreenImage: {
        margin: 20,
        height: 275,
        width: 275,
        borderRadius: 60,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 10, 
    },
    timerText: {
        fontFamily: "KaiseiOpti_700Bold",
        color: "#331B4B",
        fontSize: 0.04 * width,
    },
    settingsBox: {
        height: 50,
        width: 0.7 * width,
        borderRadius: 15,
        justifyContent: 'center',
        paddingHorizontal: 20,
        margin: 2.5
    },
    chatContainer: {
        height: '73%',
        // Add shadow to the container's border
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      chatHistoryScroll: {
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#331B4B",
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      message: {
        backgroundColor: '#AFCDFF',
        flexDirection: 'row',
        maxWidth: '80%',
        borderRadius: 10,
        marginVertical: 0.01 * width,
        padding: 5,
        marginHorizontal: 0.01 * width,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      userMessage: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignSelf: 'flex-end',
        backgroundColor: '#8A7DDC',
        borderRadius: 10,
      },  
      systemMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#ECECEC',
        borderRadius: 10,
      },
      messageContainer: {
        flexDirection: 'row',
        paddingHorizontal: 0.02 * width,
        paddingVertical: 0.02 * width,
        width: '100%',  // Ensure the container takes full width
      },
      
      inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      },
      chatInputContainer: {
        width: '80%',
        height: 50,
        borderRadius: 10,
        padding: 10,
        fontSize: 18,
        backgroundColor: '#fff',
        marginRight: 10,
        fontFamily: "KaiseiOpti_400Regular",
        // Add shadow to the input field
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
      },
      sendButton: {
        width: 70,
        height: 50,
        backgroundColor: "#8A7DDC",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        // Add shadow to the send button
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
      },
      chatButtonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: "KaiseiOpti_400Regular",
      },
      chatbotContainer: {
          flex: 1,
          backgroundColor: "#AEC5EB",
          position: 'relative',
      }
});
  
export default styles;