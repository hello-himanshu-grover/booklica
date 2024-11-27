import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios";
import RNRestart from "react-native-restart";
import { GLOBALS } from "./config";

export const logout = async () => {
    await AsyncStorage.removeItem("userToken");
    RNRestart.restart();
}

export const validateUser = async (token:string) => {
        return await axios.get(GLOBALS.BASE_URL+"/auth/validateuser",{headers:{"Authorization" : `Bearer ${token}`}});
}