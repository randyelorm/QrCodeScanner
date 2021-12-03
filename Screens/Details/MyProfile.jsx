import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native'

import TwitterIcon from "react-native-vector-icons/AntDesign"
import LinkedInIcon from "react-native-vector-icons/Entypo"

import PhoneIcon from "react-native-vector-icons/Feather"
import MessageIcon from "react-native-vector-icons/FontAwesome"
import LocationIcon from "react-native-vector-icons/Ionicons"
import firebase from 'firebase'
import { BlurView } from 'expo-blur';



const MyProfile = () => {

    const [info, setInfo] = useState("")
    const [image, setImage] = useState("https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dprofile&psig=AOvVaw25i-d72szxuZ1PKp5AVCg8&ust=1638575947652000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjQ652pxvQCFQAAAAAdAAAAABAM")
    const [imageLoading, setImageLoading] = useState(true)

  
  useEffect(() => {

             
            firebase.firestore()
            .collection('Profiles')
            .get()
            .then(querySnapshot => {
          
          querySnapshot.forEach(documentSnapshot => {
           const fromfirebase =  documentSnapshot.data()
            
               setInfo(fromfirebase)

               let imageRef = firebase.storage().ref('uploads/photo.jpg');
           
               imageRef.getDownloadURL()
               .then((url) => {
               setImage(url)
               setTimeout(() => {
                setImageLoading(false)   
            }, 14000);
           
               })
               .catch((error) => {
             
               switch (error.code) {
                   case 'storage/object-not-found':
                
                   case 'storage/unauthorized':
             
                   break;
                   case 'storage/canceled':
                  
                   break;
   
                   case 'storage/unknown':
                  
                   break;
               }
               });
                

              });




            
            });

            

         
           
        }, [])




     


    return (
        <View style = {styles.container}>
             <View style = {styles.profileProfileImageInfoView}>
                 <View style = {styles.ImageNdIconsView}>
                        <View>
                        <ImageBackground style = {styles.ProfileImage} source = {{uri:image}}>
                     
                     {imageLoading && <BlurView intensity={80} tint="dark" style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                     <ActivityIndicator color = "white"/>
                     </BlurView>}
                        </ImageBackground>
                        </View>
                            
                        <View style = {styles.IconView}>
                            <TouchableOpacity>
                                    <TwitterIcon size = {20} name = "twitter" style= {styles.icons}/>
                            </TouchableOpacity>
                           
                           <TouchableOpacity>
                                <LinkedInIcon  size = {20} name = "linkedin"  style= {styles.icons}/>
                           </TouchableOpacity>
                           
                        </View>
                </View>
                  
                    <View style = {styles.profileProfileInfo} >
                        <Text style = {styles.profileProfileName}>{info.name}</Text>
                        <Text style = {styles.profileProfileTitle}>{info.role}</Text>
                    </View>
              
             </View>

          

            <View style = {styles.profileOtherInfoView}>
                <Text style = {styles.profileotherInfo}> <PhoneIcon  size = {20} name = "phone"  style= {styles.Infoicons}/>   {info.number}</Text>
                <Text style = {styles.profileotherInfo}> <MessageIcon  size = {20} name = "envelope-o"  style= {styles.Infoicons}/>    {info.email}</Text>
                <Text style = {styles.profileotherInfo}> <LocationIcon  size = {25} name = "md-location-outline"  style= {styles.Infoicons}/>   {info.location}</Text>
                    
            </View>
        </View>
    )
}

export default MyProfile

const styles = StyleSheet.create({
container: {
    flex: 1
},

profileProfileImageInfoView: {

    flexDirection: "row",
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
   

},


profileOtherInfoView: {
  
    flex: 3,
    paddingHorizontal: 20

},

profileotherInfo: {
    paddingVertical: 10
},

ProfileImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 10,
    overflow: "hidden"
},

ImageNdIconsView: {
    
},
profileProfileInfo: {
    paddingVertical: 15
},
profileProfileName: {},
profileProfileTitle: {
    marginTop:5
},

IconView: {
    flexDirection: "row",
    marginTop: 25
},
icons: {
    marginLeft: 10,
    backgroundColor: "grey",
    padding: 10,
    color: "white",
    borderWidth: 1,
    borderRadius: 100 / 5,
    overflow: "hidden",
    borderColor: "grey"
    
}

})
