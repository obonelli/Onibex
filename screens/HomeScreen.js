import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button } from 'react-native'
import CustomListItem from "../components/CustomListitem";
import { Avatar } from "react-native-elements";
import CustomersList from "../components/CustomersList";
import CasesSteeps from '../components/CasesSteeps';
//import { auth, db } from "../firebase";
const width_proportion = '18%';
const width_proportion_second = '80%';
const width_proportion_main = '100%';
const height_proportion = '100%';
const HomeScreen = ({ navigation }) => {
    

    const signOutUser = () => {
        /*auth.signOut().then(() => {
            navigation.replace("Login");
        });*/
        navigation.replace("Login");
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            flex: 0.5,
            title: "Luis Garcia",
            headerStyle: { backgroundColor: "white"},
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            headerLeft: () => <View style={{ marginLeft: 20 }}>
                <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                <Avatar
                rounded
                source={{
                    uri:
                        "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
                }}
                ></Avatar>
                </TouchableOpacity>
            </View>,
        });

    }, []);

    return (
        <SafeAreaView style={styles.Container}>
            <ScrollView style={styles.SubContainer}> 
                <View style={styles.mainContainer}>                    
                    <View style={styles.mainMenu}>
                        <CustomListItem />
                        <Button
                            style={styles.logoutScreenButton}
                            title="Logout"
                            type="outline"
                            onPress={signOutUser}
                        />
                    </View>
                    <View style={styles.secondMenu}>
                        <CustomersList />
                        {/* <CasesSteeps /> */}
                    </View>                    
                </View>       
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    logoutScreenButton:{
        
    },
    Container:{
        flex: 1, 
        minHeight: height_proportion,
        height: height_proportion
    },
    SubContainer:{
        minHeight: height_proportion,
        height: height_proportion
    },
    mainMenu:{
        backgroundColor: 'white',
        flex: 0.2,
        width: width_proportion,
        minHeight: height_proportion,
        height: height_proportion
    },
    secondMenu:{
        flex: 0.5,
        width: width_proportion_second,
        minHeight: height_proportion,
        marginLeft: 30
    },
    mainContainer:{
        flex: 1,  
        flexDirection: 'row',  
        width: width_proportion_main,
        height: height_proportion
    }
})