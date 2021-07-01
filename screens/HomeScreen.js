import React, { useLayoutEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View , Text} from 'react-native';
import { Avatar, Button, ListItem } from 'react-native-elements';
import CustomersList from "../components/CustomersList";
import CustomListItem from "../components/CustomListitem";
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
            flex: 1,
            title: "Customers",
            headerStyle: { backgroundColor: "#f5f5f5"},
            headerTitleAlign: "left",
            headerTitleStyle: { color: "black" , paddingLeft: "17.5%",fontSize: 24},
            headerTintColor: "black",
            headerLeft: () => <View style={{ marginLeft: 0 , width: "140%",height: "140%",backgroundColor: "white"}}>
                <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}> 
                <ListItem style={styles.avatarList}>
                <Avatar
                rounded
                source={{
                    uri:
                        "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
                }}
                ></Avatar>
                  <ListItem.Content>
                    <ListItem.Title>Liz Gilbert</ListItem.Title>
                </ListItem.Content>
                </ListItem>  
                </TouchableOpacity>
            </View>,
        });

    }, []);

    return (
        <SafeAreaView style={styles.Container}>
            <ScrollView style={styles.SubContainer}> 
                <View style={styles.mainContainer}>                    
                    <View style={styles.mainMenu}>
                        <CustomListItem nav={navigation}/>
                        <View style={styles.SubMenu}>
                        <Button
                            style={styles.logoutScreenButton}
                            title="Logout"
                            type="outline"
                            onPress={signOutUser}
                        />
                        </View>
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
        width: '100%',
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
        flexDirection: "column",
        width: width_proportion,
        minHeight: height_proportion,
        height: height_proportion,
    },
    SubMenu:{
        backgroundColor: 'white',
        flex: 1,
        width: 100,
        height: height_proportion,
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondMenu:{
        flex: 0.75,
        width: width_proportion_second,
        minHeight: height_proportion,
        marginLeft: 30
    },
    mainContainer:{
        flex: 1,  
        flexDirection: 'row',  
        width: width_proportion_main,
        height: height_proportion
    },
    avatarList: {
        backgroundColor: "white",
        width: "100%",
        marginLeft: 20,
    }
})