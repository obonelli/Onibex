import { StyleSheet } from "react-native";

const width_proportion = '18%';
const width_proportion_second = '80%';
const width_proportion_main = '100%';
const height_proportion = '100%';

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

export default styles;