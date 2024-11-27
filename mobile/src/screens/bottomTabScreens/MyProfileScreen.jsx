import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Text, withTheme } from 'react-native-paper';
import UiButton from '../../components/UiButton';
import { useNavigation } from '@react-navigation/native';

const MyProfileScreen = ({theme}) => {

  const navigation = useNavigation()

  const showMyBooks = () => {
    navigation.navigate('MyBooksScreen')
  }




  return (
    <View style={styles.container}>
      <Text variant='headlineLarge'>My Profile Screen</Text>
      <UiButton title='my books' onPress={showMyBooks}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  bookItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default withTheme(MyProfileScreen);
