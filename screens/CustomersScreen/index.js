import React from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import CustomListItem from "../../components/CustomListitem";
import CustomerList from "../../components/CustomersList";
import CasesSteeps from "../../components/CasesSteeps";
import CreateCaseForm from "../../components/CreateCaseForm";
import styles from "./styles";

const CustomersScreen = ({ navigation }) => {
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
