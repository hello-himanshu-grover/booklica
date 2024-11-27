import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Text, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from "react-native-restart";

const URL = "http://192.168.127.209:3000/api/auth/login"

const SignInScreen = ():React.JSX.Element => {
    const [email,setEmail] = useState<string>();
    const [password,setPassword] = useState<string>();

    const navigation = useNavigation();

    const login = async () => {
        let payload = {
            email: email,
            password: password
          }
          resetInput()
        axios.post(URL,payload).then(async (response) => {
            console.log("🚀 ~ file: SignInScreen.tsx:21 ~ axios.post ~ response:", response.data)
            if(response.data?.token){
                await AsyncStorage.setItem("userToken",response.data.token)
                RNRestart.restart();
            }
        }).catch(err => {
            console.log("🚀 ~ file: SignInScreen.tsx:23 ~ axios.post ~ err:", err)
        })
    }

    const resetInput = () => {
        setEmail("");
        setPassword("");
    }


  return (
    <View style={{backgroundColor:'black',flex:1,justifyContent:'center',padding:16}}>
        <View style={{gap:16}}>
        <Text variant="displayMedium">
            Login
        </Text>
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
        <Button disabled={!email || !password} mode="contained" onPress={login}>
            Login
        </Button>
        <Text onPress={() => { navigation.navigate("SignUp" as never) }} variant="labelSmall" style={{textAlign:'center',padding:8,color:'#acefac'}}>
            Sign Up
        </Text>
        </View>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({})