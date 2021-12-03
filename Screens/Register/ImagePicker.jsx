import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AddProfileIcon from "react-native-vector-icons/AntDesign"
import { NativeScreenNavigationContainer } from 'react-native-screens';
import firebase from 'firebase'

export default function ImagePickerExample({SetImage}) {
  const [image, setImage] = useState(null);


  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []); 

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //     base64: true
  //   });


  //   if (!result.cancelled) {
  //     setImage(result.uri);
  //     SetImage(result.base64)
  //     // console.log(result.base64);
  //   }
  // }


  const uriToBlob = (uri) => {

    return new Promise((resolve, reject) => {

      const xhr = new XMLHttpRequest();

      xhr.onload = function() {
        // return the blob
        resolve(xhr.response);
      };
      
      xhr.onerror = function() {
        // something went wrong
        reject(new Error('uriToBlob failed'));
      };

      // this helps us get a blob
      xhr.responseType = 'blob';

      xhr.open('GET', uri, true);
      xhr.send(null);

    });

  }

  uploadToFirebase = (blob) => {

    return new Promise((resolve, reject)=>{

      var storageRef = firebase.storage().ref();

      storageRef.child('uploads/photo.jpg').put(blob, {
        contentType: 'image/jpeg'
      }).then((snapshot)=>{

        blob.close();

        resolve(snapshot);

      }).catch((error)=>{

        reject(error);

      });

    });


  }      

const pickImage = () => { 

    ImagePicker.launchImageLibraryAsync({ 
      mediaTypes: "Images"
    }).then((result)=>{ 

      if (!result.cancelled) {
        // User picked an image
        setImage(result.uri)
        const {height, width, type, uri} = result;
        return uriToBlob(uri);

      }

    }).then((blob)=>{

      return uploadToFirebase(blob);

    }).then((snapshot)=>{

      console.log("File uploaded");
   
    }).catch((error)=>{

      throw error;

    }); 

  }


  
    


  return (
    <TouchableOpacity onPress = {pickImage} style={{ flex: 1 }}>

      {image ? 
      <View style ={{flex:1, alignItems: "center", justifyContent: "center"}}> 
                <Image source={{ uri: image }} style={[{ width: "100%" , height: "100%" , resizeMode :"cover" }, StyleSheet.absoluteFill]} /> 
                <View >
                    <Text style = {styles.EditImageText}>Edit Profie Photo</Text>
                </View>
      </View>

      :

      <View style = {styles.opacity}>
       <AddProfileIcon name = "user" style = {styles.profileIcon} size = {60} /> 
       <Text style = {styles.addProfileText}>ADD PROFILE PHOTO</Text>
       </View>
       
       }
      
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    profileIcon: {
        color: "#FE2B4C",
    },

    addProfileText: {
    
        color: "#FE2B4C",
    },

    opacity: {
        flex: 1,
       justifyContent: "center" ,
       alignItems: "center",
    },

 

    EditImageOpacity: {
        justifyContent: "center",
        alignItems: "center",
  
    },

    EditImageText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        borderWidth: 2,
        borderColor: "white"
    },
});