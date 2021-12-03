import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, ActivityIndicator, Modal, } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth } from '../../Firebase'
import { BlurView } from 'expo-blur';


const SignIn = ({navigation}) => {

    const [Email, setEmail,] = useState("")
    const [PassWord, setPassword] = useState("")
    const [isLoading, setisLoading] = useState(false)

    const handleSignIn = ()=> {
        setisLoading(true)
        auth
        .signInWithEmailAndPassword(Email, PassWord)
        .then(userCrendentials => {
        setisLoading(false)
        navigation.navigate("Home")  
        
           
        })

        .catch(error=>{
            alert(error.message)
            setisLoading(false)
        }
         
            
        
        )
         
    }
    

    return (
        <>
        
        <View style = {[styles.container, StyleSheet.absoluteFill]}>

                <View style = {styles.ImageView}>
                    <Image source= {require("../../assets/profile.gif")} style = {styles.Image}/>
            </View>

            <KeyboardAvoidingView style = {styles.TextInputView} behavior = "padding">    
         
                <View style = {styles.inputsDisplayView}>
                    <Text style = {styles.inputLabel}>Email</Text>
                     <TextInput 
                     style = {styles.Inputs} 
                     autoCapitalize='none' 
                     placeholder = "Enter Your Email"
                     value = {Email}
                     onChangeText = {(text)=>(setEmail(text))}
                     autoComplete = "off"
                     
                     />
                </View>
                
                <View style = {styles.inputsDisplayView}>
                    <Text style = {styles.inputLabel} >Password</Text>
                    <TextInput 
                    style = {styles.Inputs} 
                    autoCapitalize='none' 
                     secureTextEntry 
                     placeholder = "Enter Your Password"
                     value = {PassWord}
                     onChangeText = {(text)=>(setPassword(text))}
                     
                     />

                </View>

              

                <TouchableOpacity style = {styles.SignInButtonOpacity} onPress = {handleSignIn}>
                    <Text style = {styles.SingInBtnText}>SIGN IN</Text>
                </TouchableOpacity>

                <Text style = {styles.resetPassWordText}>
                    Forgot? Reset Password
                </Text>
                <Image  source = {require("../../assets/red2.png")}   style = {styles.redLine}/>
     
            </KeyboardAvoidingView>
        

        </View>

        {/* if isloading is equal to true render the blur view and activity indicator  */}
        {isLoading && <BlurView intensity={80} tint="dark" style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <ActivityIndicator color = "white"/>
            <Text style = {{color: "white", fontSize: 20, fontWeight: "bold" }}>LOGGIN IN ...</Text>
            </BlurView>}
        </>

    )

// absolute fill will allow whatever is under to be rendered on top of it.
// The blurview and isloading component will appear if isLoading = true.
// Then absolute fill will allow it to be displayed on top of the view.

    
}

export default SignIn

const styles = StyleSheet.create({

container: {
flex: 1,
    paddingHorizontal: 20
},

ImageView: {
    flex: 2,

},


TextInputView: {
    flex: 3,
    marginVertical: 30
},


Image: {
    width: "100%",
    height: "100%",
},

inputsDisplayView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15

},

inputLabel: {
    fontSize: 18
},

Inputs: {
fontSize: 18,

},


SignInButtonOpacity: {
    backgroundColor: "#FE2B4C",
    padding: 15,
    borderRadius: 5
},

SingInBtnText: {
    alignSelf: "center",
    color:"white",
    fontWeight: "bold"
},

resetPassWordText: {
marginVertical: 40
},

    redLine: {
        width: 120,
        height: 70,
        position: "absolute",
        top: 165,
        left: 50
      
       
    },

    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'

    }
})
