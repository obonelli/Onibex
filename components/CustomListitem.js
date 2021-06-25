import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { ListItem, Avatar } from "react-native-elements";
import { List } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const CustomListitem = ({ id, chatName, enterChat, navigation  }) => {
    const [expanded, setExpanded] = React.useState(false);
    const [expandedReports, setExpandedReports] = React.useState(false);

    const handlePress = () => setExpanded(!expanded);
    const handlePressReports = () => setExpandedReports(!expandedReports);

    const signOutUser = () => {
        /*auth.signOut().then(() => {
            navigation.replace("Login");
        });*/
        navigation.replace('Login');
        //navigation.replace("Login");
    };

    return (
        <ListItem>            
            <List.Section style={styles.ContainerList}>            
                <List.Item
                title="Customers"
                description=""
                left={props => <List.Icon {...props} icon="account-multiple-outline" />}
                />
                <List.Accordion style={{ backgroundColor: "white" }}
                    title="Cases"
                    left={props => <List.Icon {...props} icon="cart" />}
                    expanded={expanded}
                    onPress={handlePress}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
                <List.Item
                    title="Saved cases"
                    description=""
                    left={props => <List.Icon {...props} icon="content-save-outline" />}
                />
                <List.Accordion style={{ backgroundColor: "white" }}
                    title="Reports"
                    left={props => <List.Icon {...props} icon="file-chart" />}
                    expanded={expandedReports}
                    onPress={handlePressReports}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
                <List.Item
                    title="Syncronize"
                    description=""
                    left={props => <List.Icon {...props} icon="sync" />}
                />
            </List.Section>

        </ListItem>
    )
}

export default CustomListitem

const styles = StyleSheet.create({
    ContainerList:{
        flex: 1,  
        width: '100%',
        height: '100%'
    }
})