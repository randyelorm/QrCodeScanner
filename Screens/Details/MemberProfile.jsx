import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, ActivityIndicator, ImageBackground } from 'react-native'


import TwitterIcon from "react-native-vector-icons/AntDesign"
import LinkedInIcon from "react-native-vector-icons/Entypo"

import PhoneIcon from "react-native-vector-icons/Feather"
import MessageIcon from "react-native-vector-icons/FontAwesome"
import LocationIcon from "react-native-vector-icons/Ionicons"
import firebase from 'firebase'

import { BlurView } from 'expo-blur';


const MemberProfile = ({route}) => {

   const {data} = route.params

  const datafromQRCode = JSON.parse(data)
  console.log(datafromQRCode.name)




    const [image, setImage] = useState("https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dprofile&psig=AOvVaw25i-d72szxuZ1PKp5AVCg8&ust=1638575947652000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjQ652pxvQCFQAAAAAdAAAAABAM")
    const [imageLoading, setImageLoading] = useState(true)

    useEffect(() => {
               
                

                //  read image from firebase
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
                  
  
          
  
  
              
         
  
           
             
          }, [])



    return (
        <View style = {styles.container}>
             <View style = {styles.MemberProfileImageInfoView}>
                 <View style = {styles.ImageNdIconsView}>
                        <View>
                        <ImageBackground style = {styles.MemberProfileImage} source = {{uri:image}}>
                     
                     {imageLoading && <BlurView intensity={80} tint="dark" style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                     <ActivityIndicator color = "white"/>
                     </BlurView>}
                        </ImageBackground>
                        </View>
                            
                        <View style = {styles.IconView}>
                            <TwitterIcon size = {20} name = "twitter" style= {styles.icons}/>
                            <LinkedInIcon  size = {20} name = "linkedin"  style= {styles.icons}/>
                        </View>
                </View>
                  
                    <View style = {styles.MemberProfileInfo} >
                        <Text style = {styles.MemberProfileName}>{datafromQRCode.name}</Text>
                        <Text style = {styles.MemberProfileTitle}>{datafromQRCode.role}</Text>
                    </View>
              
             </View>

          

            <View style = {styles.memberOtherInfoView}>
                <Text style = {styles.memberotherInfo}> <PhoneIcon  size = {20} name = "phone"  style= {styles.Infoicons}/> {datafromQRCode.number}</Text>
                <Text style = {styles.memberotherInfo}> <MessageIcon  size = {20} name = "envelope-o"  style= {styles.Infoicons}/> {datafromQRCode.email} </Text>
                <Text style = {styles.memberotherInfo}> <LocationIcon  size = {25} name = "md-location-outline"  style= {styles.Infoicons}/>{datafromQRCode.location}</Text>
                    
            </View>
        </View>
    )
}

export default MemberProfile

const styles = StyleSheet.create({
container: {
    flex: 1
},

MemberProfileImageInfoView: {

    flexDirection: "row",
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
   

},


memberOtherInfoView: {
  
    flex: 3,
    paddingHorizontal: 20

},

memberotherInfo: {
    paddingVertical: 10
},

MemberProfileImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 10,
    overflow: "hidden"
},

ImageNdIconsView: {
    
},
MemberProfileInfo: {
    paddingVertical: 15
},
MemberProfileName: {},
MemberProfileTitle: {
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
