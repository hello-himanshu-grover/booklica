import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, Modal, Text, TextInput, useTheme } from 'react-native-paper'
import UiButton from './UiButton';
import Scanner from './ScannerComponent';
import { addNewBookByName } from '../../services/books';
import Toast from 'react-native-root-toast';


const AddBookPopup = ({ visible, onClose }) => {

  const [bookName, setBookName] = useState('');
  const [scan,setScan] = useState(false);
  const theme = useTheme();

  const handleAddBook = async () => {
    try {
      const response = await addNewBookByName(bookName);
      if(response){
        console.log("🚀 ~ handleAddBook ~ response:", response)
        Toast.show('Your book is added');
        handleModalClose();
      }
    } catch (error) {
      console.log("🚀 ~ handleAddBook ~ error:", error)
    }
  }

  const handleModalClose = () => {
    onClose();
    setBookName('');
    setScan(false);
  };


  return (
    <Modal
      onDismiss={handleModalClose}
      visible={visible}
      contentContainerStyle={{ 
        backgroundColor: theme.colors.surface,
        width:"80%",
        minHeight: 200,
        alignSelf: 'center',
        borderRadius: 8,
        padding: 16,
        borderWidth: 1,
        borderColor: theme.colors.primaryContainer,

       }}
    >
      <IconButton 
          icon={"close"} 
          size={12}
          iconColor={theme.colors.primary}
          onPress={handleModalClose} 
          style={[styles.closePopupButton,{
              backgroundColor:theme.colors.primaryContainer
          }]} />
      {scan ? <Scanner setBookName={setBookName} setScan={setScan} /> :
        <View>
        <Text style={{textAlign:'center',marginBottom:16,color:theme.colors.onPrimaryContainer}} variant='titleMedium'>Add Book</Text>
        <TextInput
          style={[styles.input,{backgroundColor:theme.colors.primaryContainer}]}
          outlineStyle={{borderWidth:0}}
          value={bookName}
          mode='outlined'
          onChangeText={setBookName}
          placeholder="Enter book name"
        />
        <View style={styles.buttonContainer}>
          <UiButton icon={"qrcode-scan"} title="Scan" onPress={() => {setScan(true)}}/>
          <UiButton title="Add" onPress={handleAddBook} />
        </View>
      </View>}
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  closePopupButton:{
    position:'absolute',
    right:-8,
    padding:0,
    margin:0,
    top:-8,
    zIndex:1,
    }
});

export default AddBookPopup;
