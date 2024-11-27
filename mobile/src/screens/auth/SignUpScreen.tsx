import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Text, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from "react-native-restart";

const URL = "http://192.168.29.14:3000/api/auth/signup"

const SignUpScreen = ():React.JSX.Element => {

    const [email,setEmail] = useState<string>();
    const [password,setPassword] = useState<string>();
    const [username,setUsername] = useState<string>();

    const navigation = useNavigation();


    
    const signUp = async () => {
        let payload = {
            username:username,
            email: email,
            password: password
          }
          resetInput();
        axios.post(URL,payload).then(async (response) => {
            console.log("🚀 ~ file: SignUpScreen.tsx:26 ~ axios.post ~ response:", response.data)
            if(response.data?.token){
                await AsyncStorage.setItem("userToken",response.data.token)
                RNRestart.restart();
            }
        }).catch(err => {
            console.log("🚀 ~ file: SignUpScreen.tsx:29 ~ axios.post ~ err:", err)
        })
    }

    const resetInput = () => {
        setEmail("");
        setPassword("");
        setUsername("");
    }



  return (
    <View style={{backgroundColor:'black',flex:1,justifyContent:'center',padding:16}}>
    <View style={{gap:16}}>
    <Text variant="displayMedium">
        SignUp
    </Text>
    <TextInput
        onChangeText={setUsername}
        value={username}
        mode="outlined"
        label="username"
        placeholder="username"
        />
    <TextInput
        onChangeText={setEmail}
        value={email}
        mode="outlined"
        label="email"
        placeholder="email"
        />
    <TextInput
        onChangeText={setPassword}
        value={password}
        mode="outlined"
        label="password"
        placeholder="password"
        />
    <Button disabled={!email || !password || !username} mode="contained" onPress={signUp}>
        SignUp
    </Button>
    <Text onPress={() => { navigation.navigate("SignIn" as never) }} variant="labelSmall" style={{textAlign:'center',padding:8,color:'#acefac'}}>
        Login
    </Text>
    </View>
</View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({})