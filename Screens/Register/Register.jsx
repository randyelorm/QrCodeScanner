import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, ActivityIndicator,} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
import firebase from 'firebase'
import ImagePickerExample from './ImagePicker'
import { auth } from '../../Firebase'
import { BlurView } from 'expo-blur';

const Register = ({navigation}) => {

    const [Image, setImage] = useState("")
   
    const [FullName, setFullName] = useState("Randy")
    const [Email, setEmail,] = useState("davohran@gmail.com")
    const [PassWord, setPassword] = useState("123456")
    const [PhoneNumber, setPhoneNumber] = useState("+23310")
    const [Role, setRole] = useState("Software Dev")
    const [Location, setLocation] = useState("Accra, Ghana")
    const [TwitterHandle, setTwitterHandle] = useState("@randydavoh")
    const [LinkedInHandle, setLinkedInHandle] = useState("Randy Davoh")

    const [isRegistering, setIsRegistering] = useState(false)



    const handleRegister = ()=> {

        if (!FullName.trim()) {
            alert('Please Enter Name');
            return;
          }

          if (!PhoneNumber.trim()) {
            alert('Please Enter Your Phone Number');
            return;
          }

          if (!Role.trim()) {
            alert('Please Your Role');
            return;
          }


          if (!Location.trim()) {
            alert('Please Your Role');
            return;
          }


          if (!TwitterHandle.trim()) {
            alert('Please Enter Your Twitter Handle');
            return;
          }

          if (!LinkedInHandle.trim()) {
            alert('Please Enter Your LinkedIn Handle');
            return;
          }

       

        firebase.firestore().collection("Profiles").doc("Profile").set({
          
            name: FullName,
            email: Email,
            number: PhoneNumber,
            role: Role,
            location: Location,
            twitterHandle: TwitterHandle,
            linkedInHandle: LinkedInHandle
        })
       
        .then(() => {
        setIsRegistering(true)
        auth
        .createUserWithEmailAndPassword(Email, PassWord)
        .then(userCrendentials => {
            


            const user = userCrendentials.user
            navigation.navigate("Home")
            setIsRegistering(false)
        })

        .catch(error=>{
            alert(error.message)
            setIsRegistering(false)
        }
         
            
        
        )
            
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        })

      
       
  

        

    }


    return (
        <>
        <View style = {[styles.container, StyleSheet.absoluteFill]}>

            <View style = {styles.AddImageView}>

                
                  
                   <ImagePickerExample SetImage = {setImage}/>
              
            </View>

            <KeyboardAwareScrollView style = {styles.TextInputView}   showsVerticalScrollIndicator={false} >   

               <View style = {styles.inputsDisplayView}>
                    <Text style = {styles.inputLabel}>Full Name</Text>
                     <TextInput 
                     style = {styles.Inputs}  
                     autoCapitalize='none' 
                     placeholder = "Enter Full Name" 
                     value = {FullName}
                     onChangeText = {(text)=>(setFullName(text))}
                     autoComplete = "off"

                    
                     
                     />
                </View> 
         
                <View style = {styles.inputsDisplayView}>
                    <Text style = {styles.inputLabel}>Email</Text>
                     <TextInput 
                     style = {styles.Inputs} 
                     autoCapitalize='none' 
                     placeholder = "Enter Email"
                     value = {Email}
                     onChangeText = {(text)=>(setEmail(text))}
                     autoComplete = "off"
                     
                     />
                </View>

                <View style = {styles.inputsDisplayView}>
                    <Text style = {styles.inputLabel}>Password</Text>
                     <TextInput 
                     style = {styles.Inputs}
                      autoCapitalize='none' 
                      secureTextEntry
                      placeholder = "Enter Password"
                      value = {PassWord}
                      onChangeText = {(text)=>(setPassword(text))}
                      autoComplete = "off"
                    />
                </View>

                <View style = {styles.inputsDisplayView}>
                    <Text style = {styles.inputLabel}>Phone Number</Text>
                     <TextInput 
                     style = {styles.Inputs} 
                     keyboardType = "numeric" 
                     placeholder = "Enter Phone Number"
                     value = {PhoneNumber}
                     onChangeText = {(text)=>(setPhoneNumber(text))}
                     autoComplete = "off"
                    />
                </View>

                <View style = {styles.inputsDisplayView}>
                    <Text style = {styles.inputLabel}>Role</Text>
                     <TextInput 
                     style = {styles.Inputs} 
                     autoCapitalize='none' 
                     placeholder = "Enter Role"
                     value = {Role}
                     onChangeText = {(text)=>(setRole(text))}
                     autoComplete = "off"
                     />
                </View>


                <View style = {styles.inputsDisplayView}>
                    <Text style = {styles.inputLabel}>Location</Text>
                     <TextInput 
                     style = {styles.Inputs} 
                     autoCapitalize='none' 
                     placeholder = "Enter Location"
                     value = {Location}
                     onChangeText = {(text)=>(setLocation(text))}
                     autoComplete = "off"
                     />
                </View>

                <View style = {styles.inputsDisplayView}>
                    <Text style = {styles.inputLabel}>Twitter</Text>
                     <TextInput 
                     style = {styles.Inputs} 
                     autoCapitalize='none' 
                     placeholder = "Enter Twitter Handle"
                     value = {TwitterHandle}
                     onChangeText = {(text)=>(setTwitterHandle(text))}
                     autoComplete = "off"
                     />
                </View>

                <View style = {styles.inputsDisplayView}>
                    <Text style = {styles.inputLabel}>LinkedIn</Text>
                     <TextInput 
                     style = {styles.Inputs} 
                     autoCapitalize='none' 
                     placeholder = "Enter LinkedIn Handle"
                     value = {LinkedInHandle}
                     onChangeText = {(text)=>(setLinkedInHandle(text))}
                     autoComplete = "off"
                     
                     />
                </View>
                
              

              

                <TouchableOpacity style = {styles.RegisterButtonOpacity} onPress = {handleRegister}>
                    <Text style = {styles.RegisterBtnText}>REGISTER</Text>
                </TouchableOpacity>

     
            </KeyboardAwareScrollView>
        </View>

        {
            isRegistering && <BlurView intensity = {80} tint = "dark"  style={{flex: 1, alignItems: "center", justifyContent: "center"}}> 
                <ActivityIndicator color = "white"/>
                <Text style = {{color: "white", fontSize: 20, fontWeight: "bold" }}>REGISTERING</Text>
            </BlurView>
        }

</>
    )
}

export default Register

const styles = StyleSheet.create({

container: {
    flex: 1,
   
},

AddImageView: {
    flex: 0.4,
//    alignItems: "center",
//    justifyContent: "center"


},

  
    
  


TextInputView: {
    flex: 3,
    paddingHorizontal: 20

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


RegisterButtonOpacity: {
    backgroundColor: "#FE2B4C",
    padding: 15,
    borderRadius: 5
},

RegisterBtnText: {
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
        top: 370,
        left: 50
      
       
    },
})
