import * as React from "react";
import { View, Text, ActivityIndicator, Image, TextInput, Dimensions, TouchableOpacity } from "react-native";
import { Button, SocialIcon } from "@rneui/themed";
import styles from "../styles";
import {
  useFonts,
  KaiseiOpti_700Bold,
  KaiseiOpti_400Regular,
} from "@expo-google-fonts/kaisei-opti";
import { Icon } from "@rneui/base";

const {height, width} = Dimensions.get('window');

export default function NavigationBar(props) {
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
                    <Icon name="book-lock-outline" type="material-community" size={50}></Icon>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="sentiment-satisfied" size={50}></Icon>
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
                        <Icon name="stats-chart-outline" type="ionicon" size={60} />
                    </TouchableOpacity>
                </View>
        </View>
    );
}