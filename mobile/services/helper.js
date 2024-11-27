import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logout } from './auth';

export const postWithAuth = async (url, data = {}, config = {}) => {
  try {
    const token = await AsyncStorage.getItem('userToken');

    if (!token) {
      throw new Error('No token found. Please log in.');
    }

    const headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.post(url, data, { ...config, headers });
    return response.data;

  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.log('401 Unauthorized: Logging out...');
      await logout();
    }

    throw error;
  }
};

export const getWithAuth = async (url,config = {}) => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    if (!token) {
      throw new Error('No token found. Please log in.');
    }
    const headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get(url, { ...config, headers });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.log('401 Unauthorized: Logging out...');
      await logout();
    }
    throw error;
  }
}