import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBCfxhPCyaAp7oHVDX9vX_nCGAWcQnbV-Q",
    authDomain: "online-note-277b0.firebaseapp.com",
    databaseURL: "https://online-note-277b0.firebaseio.com",
    projectId: "online-note-277b0",
    storageBucket: "online-note-277b0.appspot.com",
    messagingSenderId: "264497772165",
    appId: "1:264497772165:web:3188922fff9211667c5bec",
    measurementId: "G-Z78CVH494V"
};

firebase.initializeApp(firebaseConfig);


export default firebase