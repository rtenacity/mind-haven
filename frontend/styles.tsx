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
    },
    titleText:{ 
        fontFamily: "KaiseiOpti_700Bold",
        color: "#331B4B",
        fontSize: 0.12 * width,
        marginHorizontal: 0.06 * width,
        marginVertical: 0.04 * width,
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
        margin: 0.05 * width,
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
        alignItems: 'baseline',
        justifyContent: 'space-between',
        alignContent: 'space-between',
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
        height: 0.75 * height,
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleTextbox: {
        width: 0.6 * width,
        height: 0.07 * height,
        backgroundColor: '#9DBDF3',
        margin: 0.05 * width,
        borderRadius: 0.04 * width,
        shadowColor: '#000',
        padding: 0.03 * width,  
        fontFamily: "KaiseiOpti_700Bold",
        fontSize: 0.07 * width,
        color: "black",
    } 
  });
  
export default styles;