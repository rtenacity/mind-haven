import * as React from "react";
import { View, Dimensions, TouchableOpacity } from "react-native";
import { useNavigationState } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import styles from "../styles";
import {
  useFonts,
  KaiseiOpti_700Bold,
  KaiseiOpti_400Regular,
} from "@expo-google-fonts/kaisei-opti";

const {height, width} = Dimensions.get('window');


export default function NavigationBar(props) {
    const routeName = useNavigationState(state => state.routes[state.index].name);
    return(
        <View style = {[styles.navbarContainer, {height: 0.2 * height, width: width, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent',
        backgroundColor: 'transparent',
        borderTopWidth: 0,
        position: 'absolute',
        bottom:0
        }]}>
            <View style = {[styles.navbarContainer, {height: 0.1 * height, width: width, position: 'absolute', bottom: 0, backgroundColor: '#8EABDA'}]}>
                <TouchableOpacity>
                    <Icon name="self-improvement" size={50}></Icon>
                </TouchableOpacity>
                

                <TouchableOpacity onPress = {() => props.nav.navigate("ChatBot")}>
                    <Icon name="forum" size={50}></Icon>
                </TouchableOpacity>
                


                <View style={{height: 50, width:50}}/>


                <TouchableOpacity onPress = {() => props.nav.navigate("Journal")}>
                    <Icon name="book" type="antdesign" size={50} color = {routeName == 'Journal' ? "#613289" : "#000000"}></Icon>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="emoji-happy" type="entypo" size={50}></Icon>
                </TouchableOpacity>
            </View>
            
                <View 
                style={{
                    width: 0.225 * width,
                    height: 0.225 * width, 
                    borderRadius: 0.225 * width/2,
                    backgroundColor: "#AFCDFF",
                    justifyContent: 'center',
                    alignItems: 'center',
                    shadowColor: '#000',
                    shadowOffset: { width: 1, height: 1 },
                    shadowOpacity: 0.4,
                    shadowRadius: 3,  

                }}
                >
                    <TouchableOpacity  onPress={()=> props.nav.navigate("Dashboard")}>
                        <Icon name="stats-chart" type="ionicon" size={60} color = {routeName == 'Dashboard' ? "#613289" : "#000000"}/>
                    </TouchableOpacity>
                </View>
        </View>
    );
}