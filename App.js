import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import RootNavigator from './Navigation/RootNavigator';


export default function App() {
  return (
    <View  style= {styles.container} >
       <RootNavigator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: "#F4F5F0"
   
  }
  

});
