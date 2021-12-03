import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Image, ActivityIndicator, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { QRCode } from 'react-native-custom-qr-codes-expo';
import { TabRouter } from '@react-navigation/routers';
import firebase from 'firebase'
import { BlurView } from 'expo-blur';


const Home = ({navigation}) => {

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


            //    read image from firebase
           
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

     


  
        // useEffect(() => {


        //     let imageRef = firebase.storage().ref('uploads/photo.jpg');
           
        //         imageRef.getDownloadURL()
        //         .then((url) => {
        //         setImage(url)
        //         console.log(url)
        //         })
        //         .catch((error) => {
              
        //         switch (error.code) {
        //             case 'storage/object-not-found':
                 
        //             case 'storage/unauthorized':
              
        //             break;
        //             case 'storage/canceled':
                   
        //             break;

        //             case 'storage/unknown':
                   
        //             break;
        //         }
        //         });
                        
           
        // }, [])



        


    
   

    return (
        <View style = {styles.container}>
            <View style = {styles.instructionsView}>
                <Text style = {styles.instructionsText1}>Exchange Contact Information</Text>
                <Text style = {styles.instructionsText2}>Scan this QR below to see my contacts details</Text>
            </View>

            <View style = {styles.QrCodeView}>
            <QRCode 
            content= {JSON.stringify(
                
            )}
            
            color= "#FE2B4C"/>

            </View>

            <View style = {styles.ProfileInfoView}>          
                <ImageBackground style = {styles.ProfileImage} source = {{uri:image}}>
                     
            {imageLoading && <BlurView intensity={80} tint="dark" style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <ActivityIndicator color = "white"/>
            </BlurView>}
               </ImageBackground>

                <View style = {styles.ProfileInfoDescriptionView}>
                    <Text style = {styles.ProfileName}>{info.name}</Text>
                    <Text style = {styles.ProfileTitle}>{info.role}</Text>
                    
           
                </View>
            </View>

            <View style = {styles.footerView}>
                <Text style = {styles.footerText}>
                    Want to add a new conection?
                </Text>

                <TouchableOpacity style = {styles.ScanButtonOpacity} onPress ={()=>(navigation.navigate("Scan Screen"))}>
                    <Text style = {styles.ScanText}>Scan QR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({


container:{
    flex: 1,
},
instructionsView:{
    flex: 1,

    justifyContent: "center",
    paddingHorizontal: 25
},

QrCodeView:{
    flex: 2,
  alignSelf: "center"

},

ProfileInfoView:{
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor:"grey"

},
footerView:{
    flex: 0.6,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"

   
},


instructionsText1:{
    fontSize: 16,
    paddingHorizontal: 30
},
instructionsText2:{
    marginTop: 10,
    paddingHorizontal: 30
},

QrCode:{
    width: "100%",
    height: "100%",
    resizeMode: "contain"
},
ProfileInfoDescriptionView:{},

ProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginHorizontal: 10,
    overflow: "hidden"
},

ProfileName:{},

ProfileTitle:{
    marginTop: 5
},


ScanButtonOpacity: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 25,
   borderColor: "#FE2B4C"
},

ScanText: {
  color: "#FE2B4C"  
},
})
