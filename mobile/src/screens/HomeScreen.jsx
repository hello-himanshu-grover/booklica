import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AddBookPopup from '../components/AddBookPopup';
import { FAB,Text, useTheme } from 'react-native-paper';

const HomeScreen = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const theme = useTheme()

  return (
    <View style={styles.container}>
      <Text variant='displayMedium'>Home Screen</Text>
      <FAB
        icon={"plus"}
        onPress={() => setIsPopupVisible(true)}
        color={theme.colors.primary}
        style={[{backgroundColor: theme.colors.primaryContainer},styles.addButton]}
      />
      <AddBookPopup
        visible={isPopupVisible}
        onClose={() => setIsPopupVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
      },
});

export default HomeScreen;
