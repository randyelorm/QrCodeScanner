import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAEbzo2su7kR1TS74relpRq4Gej5uyAUE8",
    authDomain: "react-native-projects-c08fd.firebaseapp.com",
    projectId: "react-native-projects-c08fd",
    storageBucket: "react-native-projects-c08fd.appspot.com",
    messagingSenderId: "348551634878",
    appId: "1:348551634878:web:a5af2a444a1f95ffe0e3ef"
  };

let app;
if (firebase.apps.length===0)  { // if app has not been initilized  
    app = firebase.initializeApp(firebaseConfig)

} else { // if app has already been initialized meaning apps length is greater than o
    app = firebase.app()
}

const auth = firebase.auth()
 
export {auth}
export {app}

export default firebase;