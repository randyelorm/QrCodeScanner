import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const GetStarted = ({navigation}) => {
    return (
        <View style = {styles.container}>
             <View style = {styles.ImageView} >
                 <Image  source = {require("../../assets/intro2.gif")}   style = {styles.WelcomeImage}/>
             </View>

             <View style = {styles.AppTitleView}>
                 <Text style = {styles.AppTitle}>Randy's Contacts Scanner</Text>
             </View>


      
                    <TouchableOpacity style = {styles.GetStartedView} onPress = {()=>(navigation.navigate("Welcome"))} >
                        <Text style = {styles.GetStartedText}>Get Started</Text>
                        <Image  source = {require("../../assets/red2.png")}   style = {styles.redLine}/>

                    </TouchableOpacity>
          
        </View>
    )
}

export default GetStarted 

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: "#F4F5F0"
    },

    ImageView: {

        flex: 2,
        justifyContent: "center"
    },


    AppTitleView: {
     
        flex: 2,
        justifyContent: "center",
    
    },


    GetStartedView: {
          
            justifyContent: "center",
            flex: 2,
            alignItems: "center",
            
          
    },



    WelcomeImage: {
            width: 400,
            height: 400,
            alignSelf: "center"
    },




    AppTitle: {
        alignSelf: "center",
        fontSize: 25,
        backgroundColor: "#FE2B4C",
        padding:10,
        color:"white",
        fontWeight: "bold"
    },

    GetStartedText: {
        alignSelf: "center",
        fontSize: 20,
        paddingBottom: 10
       
   
      
    },

    redLine: {
        width: 120,
        height: 70,
        position: "absolute",
      
       
    }


    })
