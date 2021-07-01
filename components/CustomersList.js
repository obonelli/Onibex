import React, { useState } from 'react';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { MailIcon } from "@material-ui/icons/Mail";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Pressable
} from "react-native";
import { Button, Divider, Icon, Input, ListItem } from "react-native-elements";
import { Searchbar } from 'react-native-paper';

const DATA = [
  {
    icon: "mail",
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Kindred Hospital San Antonio",
    subTitle: "jhon.peter@kindred.com",
  },
  {
    icon: "mail",
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "The children´s Hospital of San Antonio",
    subTitle: "liam.arrieta@chsan.com",
  },
  {
    icon: "mail",
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Texas children´s Pavilion for Women",
    subTitle: "violet.guzman@chpw.com",
  },
];

const CustomersList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [title, setTitle] = useState("Kindred Hospital San Antonio");
  const [subTitle, setSubTitle] = useState("jhon.peter@kindred.com");

  const onChangeSearch = query => setSearchQuery(query);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleModal = ({title}) => {
    setModalVisible(true);
    //setTitle(DATA);
  };
  
  function handleModal2() { 
    return <Modal
    animationType="fade"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      Alert.alert("Modal has been closed.");
      setModalVisible(!modalVisible);
    }}
  >
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>
          {title}</Text>
          <Text style={styles.modalText}>
          {subTitle}</Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
  }

  return (
    <View styles={styles.mainView}>
      {handleModal2()}
      <View style={styles.root}>
        <Searchbar
        style={styles.searchBar}
        placeholder="Search Customers by Name, Email and Address"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      </View>
      <Divider style={styles.divider} orientation="vertical" />
      <View style={styles.FirstContainer}>
        {DATA.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{l.title}</ListItem.Title>
              <ListItem.Subtitle style={styles.SubtitleContainer}>
                <Icon name={l.icon} />
                {l.subTitle}
              </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem style={styles.SubListContainer}>
              <ListItem.Content style={styles.SubListContainer_2}>
                <ListItem.Title>
                  <Button title="Synchronize Products" type="outline" onPress={handleModal}/>
                </ListItem.Title>
                <ListItem.Subtitle>
                  <Text>Last sysnc 05/20/2021</Text>
                </ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          </ListItem>
        ))}
      </View>
    </View>
  );
};

export default CustomersList;

const styles = StyleSheet.create({
  FirstContainer: {
    flex: 0.5,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  SubtitleContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  item: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    marginVertical: 4,
    marginHorizontal: 16,
  },
  maintitle: {
    fontSize: 24,
    color: "black",
    marginBottom: 20,
    marginTop: 5,
  },
  title: {
    fontSize: 22,
    color: "#5CACF2",
  },
  subTitle: {
    fontSize: 16,
    color: "#757575",
  },
  icon: {
    color: "#757575",
    marginRight: 15,
  },
  root: {
    backgroundColor: "white",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  searchInput: {
    flex: 5,
    borderColor: "transparent",
    backgroundColor: "white",
    width: "100%",
  },
  searchIcon: {
    backgroundColor: "white",
  },
  divider: {
    height: 28,
    marginBottom: 20,
  },
  SubListContainer: {
    flex: 0.3,
  },
  SubListContainer_2: {
    textAlign: "right",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
    marginBottom: "30%",
    marginLeft: "10%"
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  searchBar: {
    height: 48,
  },
  mainView: {
    marginTop: "50%"
  }
});
