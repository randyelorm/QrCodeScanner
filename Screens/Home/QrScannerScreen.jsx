import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image,  } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {BarCodeScanner} from "expo-barcode-scanner"


const QrScannerScreen = ({navigation}) => {

const [haspermission, sethaspermissions] = useState(null)

useEffect(() => {
    (async ()=> {
        const {status}= await BarCodeScanner.requestPermissionsAsync()
        .then(sethaspermissions(status === "granted"))
      
    })()
    
}, [])

  

    return (
        <View style = {styles.container}>
           
         <View style = {styles.camerascanner}>
           <BarCodeScanner
             style = {StyleSheet.absoluteFillObject}
             onBarCodeScanned = {  // an event that asks you want to do after it is scanned
                   ({data})=> navigation.navigate("Member Profile", {
                       data
                   })
             } 
            />

        </View>  


            <View style = {styles.footerView}>
           
          
                <Text style = {styles.footerText}>
                    Want to share your contact?
                </Text>

                <TouchableOpacity style = {styles.ScanButtonOpacity}  onPress ={()=>(navigation.goBack())}>
                    <Text style = {styles.ScanText}>Send QR</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default QrScannerScreen

const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    camerascanner: {
        flex: 9
    },


    footerView: {
       flex: 1 ,
       flexDirection: "row",
       justifyContent: "space-evenly",
       alignItems: "center"
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
