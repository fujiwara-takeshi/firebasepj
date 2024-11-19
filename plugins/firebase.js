import firebase from "firebase";

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyCwojORHRQac3xL83bVc5Js-erC68hQDCY",
        authDomain: "fir-pj-947df.firebaseapp.com",
        projectId: "fir-pj-947df",
        storageBucket: "fir-pj-947df.firebasestorage.app",
        messagingSenderId: "349404036225",
        appId: "1:349404036225:web:4872159bb7f2a4d902a180",
        measurementId: "G-541SLXE4DS"
    });
}

export default firebase;