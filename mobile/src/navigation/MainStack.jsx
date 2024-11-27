import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProtectedStack from './ProtectedStack';
import AuthStack from './AuthStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { validateUser } from '../../services/auth';


const MainStack = () => {
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [loading,setLoading] = useState(false);

    const checkAuth = async () => {
        setLoading(true);
        try {
            const token = await AsyncStorage.getItem("userToken");
            console.log("🚀 ~ file: MainStack.tsx:13 ~ checkAuth ~ token:", token)
            if(token){
                const response = await validateUser(token);
                if(response){
                    console.log("🚀 ~ file: MainStack.tsx:19 ~ checkAuth ~ user:", response.data)
                    setIsAuthenticated(true);
                }
            }
        } catch (error) {
            if(error){
                console.log("🚀 ~ file: MainStack.tsx:26 ~ checkAuth ~ error:", error.response.data.message)
            }
        }
        setLoading(false);
    }

    useEffect(() => {
        checkAuth();
    },[]);

    if(loading){
        return <>
        <Text>Loading...</Text>
        </>
    }

    return (
        isAuthenticated ?
            <ProtectedStack/>
            :
            <AuthStack/>
      );
}

export default MainStack

const styles = StyleSheet.create({})