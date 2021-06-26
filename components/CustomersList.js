import React from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, FlatList, StatusBar,SafeAreaView } from 'react-native'
import { makeStyles } from '@material-ui/core/styles';
import { Grid  } from '@material-ui/core';
import { MailIcon } from '@material-ui/icons/Mail';
import TextField  from '@material-ui/core/TextField';
import { Input, Divider, ListItem, Icon, Button  } from 'react-native-elements';
import { CenterFocusStrong } from '@material-ui/icons';

const DATA = [
    {
      icon: 'mail',
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Kindred Hospital San Antonio',
      subTitle: 'jhon.peter@kindred.com'
    },
    {
      icon: 'mail',
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'The children´s Hospital of San Antonio',
      subTitle: 'liam.arrieta@chsan.com'
    },
    {
      icon: 'mail',
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Texas children´s Pavilion for Women',
      subTitle: 'violet.guzman@chpw.com'
    },
  ];

  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      borderWidth: 1
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));
  
const Item = ({ item, onPress }) => (
<ScrollView>
  <View>
    <Grid container>
        <Grid item xs={8}>
            <TouchableOpacity style={styles.item} onPress={onPress}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subTitle}>
                    <MailIcon style={{ color: '#757575', marginRight: 8 }} fontSize="small"/>{item.subTitle}
                </Text> 
            </TouchableOpacity>
        </Grid>
        <Grid item xs={4} style={{ paddingTop: 20}}>
            <Button variant="outlined" style={{ color: '#5CACF2', borderColor: '#5CACF2', }}>
            <Text>Synchronize Products</Text>
            </Button>
            <Text>Last sysnc 05/20/2021</Text>
        </Grid>
    </Grid>
  </View>
</ScrollView>
);

const CustomersList = ({ navigation }) => {

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderItem = ({ item }) => {

    return (
      <Item
        item={item}
        onPress={handleOpen}
      />
    );
  };

    
  const body = (
    <View style={modalStyle} className={classes.paper}>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ textAlign: 'center'}}>
          <Text style={styles.title}>Kindred Hospital San Antonio</Text>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'center'}}>
          <Text>Shipping Address</Text>
          <TextField
            id="filled-select-currency-native"
            select
            value='Kindred Hospital San Antonio'
            SelectProps={{
              native: true,
            }}
            variant="filled"
          >
            <option key='1' value='{option.value}'>
              Kindred Hospital San Antonio
            </option>
          </TextField>
          <TextField
            id="filled-multiline-static"
            multiline
            rows={4}
            defaultValue="333 North Santa Rosa Street, San Antonio, Texas 78207"
            variant="filled"
          />
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'center'}}>
          <Text>Billing Address</Text>
          <TextField
            id="filled-select-currency-native"
            select
            value='Kindred Hospital San Antonio'
            SelectProps={{
              native: true,
            }}
            variant="filled"
          >
            <option key='1' value='{option.value}'>
              Kindred Hospital San Antonio
            </option>
          </TextField>
          <TextField
            id="filled-multiline-static"
            multiline
            rows={4}
            defaultValue="333 North Santa Rosa Street, San Antonio, Texas 78207"
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} style={{ textAlign: 'center'}}>
          <Button variant="contained" style={{ color: '#fff', backgroundColor: '#39BFA7', }}>
                Select
          </Button>
        </Grid>
      </Grid>
    </View>
  );

    return (
        <View>
            <Text style={styles.maintitle}>Customers</Text>
            <View style={styles.root}>  
            <Input style={styles.searchInput}
              placeholder='Search Customers by Name, Email and Address'
              leftIcon={
                <Icon style={styles.searchIcon}
                  name='search'
                  size={24}
                  color='gray'   
                />
              }
            />                
            </View> 
            <Divider style={styles.divider} orientation="vertical" />
            <View style={styles.FirstContainer}>
              {
              DATA.map((l, i) => (
                <ListItem key={i} bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title>{l.title}</ListItem.Title>
                    <ListItem.Subtitle style={styles.SubtitleContainer}>
                      <Icon name={l.icon} />{l.subTitle}</ListItem.Subtitle>
                    {Item}
                  </ListItem.Content>
                  <ListItem style={styles.SubListContainer}>
                   <ListItem.Content style={styles.SubListContainer_2}>
                    <ListItem.Title>
                      <Button
                      title="Synchronize Products"
                      type="outline"
                    />
                      </ListItem.Title>
                      <ListItem.Subtitle>
                       <Text>Last sysnc 05/20/2021</Text>
                      </ListItem.Subtitle>
                   </ListItem.Content>              
                  </ListItem>
                </ListItem>
              ))
            }
          </View>
        </View>
    )
}

export default CustomersList

const styles = StyleSheet.create({
  FirstContainer:{
    flex: 0.5,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  SubtitleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
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
    color: 'black',
    marginBottom: 20,
    marginTop: 5,
  },
  title: {
    fontSize: 22,
    color: '#5CACF2',
  },
  subTitle: {
      fontSize: 16,
      color: '#757575'
  },
  icon: {
    color: '#757575',
    marginRight: 15
  },
  root:{
    backgroundColor: 'white'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  searchInput:{
    flex: 5,
    borderColor: 'transparent',
    backgroundColor: 'white',
    width: '100%',
  },
  searchIcon:{
    backgroundColor: 'white'
  },
  divider: {
    height: 28,
    marginBottom: 20,
  },
  SubListContainer:{
    flex: 0.3,
  },
  SubListContainer_2:{
    textAlign: "right",
  }
})