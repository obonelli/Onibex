import { useLayoutEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useLayoutEffect(() => {
    /*const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (authUser) {
            navigation.replace("Home");
        }
    });

    return unsubscribe;*/
}, [])

const goToForgotPassword = () => {
        navigation.replace("Home");
}

const signIn = () => {
  /*auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));*/
      navigation.replace("Home");
}
  return (
    <View style={styles.container}>
      <View style={styles.wrapperForm}>
        <Image
          style={styles.logo}
          source={require('./../assets/login/logo_paragon.png')}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={styles.input}
          autoFocus type= "email"
          value=""
          /*onChangeTest={(text) => setEmail(text)}*/
        />
        <Text style={styles.label}>Password</Text>
        <TextInput 
          style={styles.input}
          secureTextEntry
          type="password"
          value=""
          /*onChangeText={(text) => setPassword(text)}*/ 
        />
      <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={signIn}
          underlayColor='#fff'>
          <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <View style={{alignItems: 'flex-end'}}>
      <Button
        style={styles.forgotPassword}
        title='I forgot my password'
        onPress={goToForgotPassword}
        titleStyle={{
          color: 'black',
          fontSize: 16,
          alignItems: 'center',
          justifyContent: 'center',
         }}
        type='clear'
      />
      </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 450,
    height:150
  },
  wrapperForm:{
    padding:25,
    backgroundColor: '#fff',
    width: 500,
    borderBottomColor: '#000',
  },
  label:{
    paddingLeft: 10,
    fontWeight: 'bold',
  },  
  forgotPassword:{
    display: 'flex',
    paddingTop: 20,
    paddingRight: 10,
    fontWeight: 'normal',
    textAlign: 'right',
    backgroundColor: 'white'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 6
  },
  loginScreenButton:{
    marginTop:10,
    marginLeft:5,
    marginRight:5,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#39BFA7',
    borderRadius:6,
    borderWidth: 1,
    borderColor: '#39BFA7'
  },
  loginText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10,
      fontSize: 18,
      fontWeight: 'bold'
  }
});





