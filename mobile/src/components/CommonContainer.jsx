import { StyleSheet, View } from 'react-native'
import { IconButton, Text, withTheme } from 'react-native-paper'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CommonContainer = ({children,theme,headerShown = false,headerText = "headerText"}) => {

    const navigation = useNavigation();

  return (
    <View style={{flex:1,backgroundColor:theme.colors.background}}>
      {headerShown && <View style={{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:theme.colors.primaryContainer,
        }}>
        <IconButton icon="arrow-left" color={theme.colors.onPrimaryContainer} style={{margin:0}} onPress={() => {navigation.goBack()}} />
        <Text variant='titleMedium' style={{color:theme.colors.onPrimaryContainer}}>{headerText}</Text>
      </View>}
      {children}
    </View>
  )
}

export default withTheme(CommonContainer)

const styles = StyleSheet.create({})