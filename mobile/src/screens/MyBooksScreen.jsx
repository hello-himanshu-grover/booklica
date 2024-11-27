import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CommonContainer from '../components/CommonContainer'
import { FlatList } from 'react-native-gesture-handler'
import { GetMyBooks } from '../../services/books'
import { Text } from 'react-native-paper'

const MyBooksScreen = () => {

    const [myBooks,setMyBooks] = useState([]);

    const getMyBooks = async () => {
        try {
            const response = await GetMyBooks();
            if(response){
            console.log("🚀 ~ getMyBooks ~ response:", response)
                setMyBooks(response);
            }
        } catch (error) {
            console.log("🚀 ~ getMyBooks ~ error:", error)
        }
    }

    useEffect(() => {
        getMyBooks();
    },[])


  return (
    <CommonContainer headerShown={true} headerText={"My Books"}>
        <View style={{flex:1}}>
            <FlatList
                data={myBooks}
                renderItem={({item}) => <Text>{item.name}</Text>}
                keyExtractor={item => item._id}
                style={{flex:1}}
            />
        </View>
    </CommonContainer>
  )
}

export default MyBooksScreen

const styles = StyleSheet.create({})