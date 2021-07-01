import React, { useLayoutEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View , Text} from 'react-native';
import { Avatar, Button, ListItem } from 'react-native-elements';
import CustomListItem from "../../components/CustomListitem";
import CustomerList from "../../components/CustomersList";
import CasesSteeps from "../../components/CasesSteeps";
import CreateCaseForm from "../../components/CreateCaseForm";
import styles from "./styles";

const CustomersScreen = ({ navigation }) => {

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
  const signOutUser = () => {
    navigation.replace("Login");
  };

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView style={styles.SubContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.mainMenu}>
            <CustomListItem nav={navigation} />
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
            <CustomerList />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CustomersScreen;
