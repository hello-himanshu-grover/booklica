import { Linking, StyleSheet, View } from 'react-native'
import React from 'react'
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner } from 'react-native-vision-camera';
import { Text } from 'react-native-paper';
import UiButton from './UiButton';
import { getBookDetailsByISBN } from '../../services/books';

const ScannerComponent = ({ setScan,setBookName }) => {

  const { hasPermission, requestPermission } = useCameraPermission();
  const device = useCameraDevice('back')

  const codeScanner = useCodeScanner({
    codeTypes: ['ean-13'],
    onCodeScanned: (codes) => {
      console.log(`Scanned ${codes[0].value} codes!`)
      setScan(false)
      getBookDetails(codes[0].value)
    }
  })

  const getBookDetails = async (isbn) => {
    getBookDetailsByISBN(isbn)
      .then(bookDetails => {
        console.log("Book Details:", bookDetails);
        setBookName(bookDetails.title);
      })
      .catch(error => {
        console.log("Error:", error.message);
      });
  }




  const requestCameraPermission = async () => {
    const permission = await requestPermission();
    console.log("🚀 ~ requestCameraPermission ~ permission:", permission)
    if (!permission) {
      Linking.openSettings();
    }

  }

  if (!hasPermission) {
    return (
      <View style={{ gap: 10 }}>
        <Text style={{ textAlign: 'center' }} variant='bodyLarge'>No access to camera</Text>
        <UiButton title="Request permission" onPress={requestCameraPermission} />
      </View>
    )
  }

  if (device == null) {
    return (
      <View>
        <Text style={{ textAlign: 'center' }} variant='bodyLarge'>No camera detected</Text>
      </View>
    )
  }

  return (
    <View style={{ borderRadius: 4, overflow: 'hidden', flex: 1 }}>
      <Camera
        codeScanner={codeScanner}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
    </View>
  )
}

export default ScannerComponent