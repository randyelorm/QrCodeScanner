import React from 'react'
import { StyleSheet, Text, View, Modal } from 'react-native'
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer, DefaultTheme } from "@react-navigation/native"
import GetStarted from '../Screens/Welcome/GetStarted'
import Welcome from '../Screens/Welcome/Welcome'
import Register from '../Screens/Register/Register'
import SignIn from '../Screens/SignIn/SignIn'
import Home from '../Screens/Home/Home'
import AddProfileIcon from "react-native-vector-icons/AntDesign"
import MemberProfile from '../Screens/Details/MemberProfile'
import MyProfile from '../Screens/Details/MyProfile'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import QrScannerScreen from '../Screens/Home/QrScannerScreen'


const Stack = createStackNavigator()



const RootNavigator = () => {





    const MyTheme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'white'
        },
      };

    return (
        <NavigationContainer styles = {styles.container} theme = {MyTheme}>
            <Stack.Navigator>

         

                   <Stack.Screen name = "Get Started" component = {GetStarted} options ={{headerShown: false}} />
                   <Stack.Screen name = "Welcome" component = {Welcome} options ={{headerShown: false}}   />

                   <Stack.Screen 
                   name = "Register" 
                   component = {Register}
                   options = {{
                      headerBackTitle:" ",
                      headerStyle: { backgroundColor: "#FE2B4C"},
                      headerTintColor: 'white',
                   }}
                   />

                   <Stack.Screen 
                   name = "Sign In" 
                   component = {SignIn}
                   options = {{
                    headerBackTitle:" ",
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: "#FE2B4C"},
                   
                 }}
                   
                   />


            <Stack.Screen name = "Home" component = {Home} 
               

                                options={({ navigation }) => ({
                                    title: "Randy's QR Scanner",
                                    headerBackTitle:" ",
                                    headerStyle: {
                                      backgroundColor: '#FE2B4C',
                                    },
                                    headerTintColor: '#EBF2FA',
                                    headerRight: () => (
                                      <AddProfileIcon
                                        onPress={() => navigation.navigate("My Profile")}
                                        name="user"
                                        style = {styles.profileIcon} 
                                        size = {25} 
                                      />
                                    ),
                                  })}
                        />


                
            <Stack.Screen name = "Scan Screen" component = {QrScannerScreen} options ={{headerShown: false}} />


                    <Stack.Screen 
                   name = "Member Profile" 
                   component = {MemberProfile}
                   options = {{
                      headerBackTitle:" ",
                      headerStyle: { backgroundColor: "#FE2B4C"},
                      headerTintColor: 'white',
                   }}
                   />

                    <Stack.Screen 
                   name = "My Profile" 
                   component = {MyProfile}
                   options = {{
                      headerBackTitle:" ",
                      headerStyle: { backgroundColor: "#FE2B4C"},
                      headerTintColor: 'white',
                   }}
                   />       

                   
            </Stack.Navigator>
       </NavigationContainer>
    )
}

export default RootNavigator

const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        backgroundColor: "#F4F5F0"
    },

    profileIcon: {
        color: "white",
        marginRight: 10
    }
})
