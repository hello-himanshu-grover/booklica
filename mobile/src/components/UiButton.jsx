import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, useTheme } from 'react-native-paper'

const UiButton = ({ title="button", onPress = () => {},style={},icon=null }) => {
    const theme = useTheme();
    return (
        <Button 
            icon={icon}
            style={[{borderRadius: 6,borderColor: theme.colors.primaryContainer ,borderWidth: 1,alignSelf:'center'},style]} 
            onPress={onPress} 
            mode='outlined'
            labelStyle={{fontFamily:'Poppins-Medium',color:theme.colors.onPrimaryContainer}}
        >
            {title}
        </Button>
    )
}

export default UiButton

const styles = StyleSheet.create({})