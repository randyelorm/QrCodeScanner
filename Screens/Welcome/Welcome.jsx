import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Welcome = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.ImageView} >
                <Image source = {require("../../assets/mobile.png")} style = {styles.HeroImage}/>
            </View>

            <View style = {styles.HeroTextView}>
               <Text style = {styles.HeroText}>
                    YOUR FORMAL PROFILE IS JUST A SCAN AWAY
               </Text>
               <Text style = {styles.HeroText2}>
                   Sign in or register with your email.
               </Text>
            </View>


            <View style = {styles.BtnsView}>
                <TouchableOpacity  onPress = {()=>(navigation.navigate("Register"))}>
                    <Text style = {styles.RegisterBtnText}>
                        REGISTER
                    </Text>
                    <Image  source = {require("../../assets/red2.png")}   style = {styles.redLine}/>
                </TouchableOpacity>

                <TouchableOpacity onPress = {()=>(navigation.navigate("Sign In"))}>
                    <Text style = {styles.SignInButtonsText}>
                        SIGN IN
                    </Text>
                    <Image  source = {require("../../assets/red2.png")}   style = {styles.redLine2}/>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({

container: {
flex: 1
},

ImageView: {

flex: 3
},

HeroTextView: {
    paddingHorizontal: 16,
    flex: 2,
   
},

BtnsView: {

    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 16,
    
},





HeroImage: {
width: "100%",
height: "100%",
resizeMode: "contain"

},



HeroText: {
fontSize: 17,
marginVertical: 10

},

HeroText2: {
    marginVertical: 20
},


RegisterBtnText: {

},

SignInButtonsText: {

},

redLine: {
    width: 66,
    height: 70,
    position: "absolute",
    top: -25
  
   
},

redLine2: {
    width: 52,
    height: 70,
    position: "absolute",
    top: -25
  
   
},



})
