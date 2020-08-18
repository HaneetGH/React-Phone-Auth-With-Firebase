import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyByBw0W5qoRKcaqSEkoenpqlrnuR54UGjQ",
    authDomain: "react-phone-auth.firebaseapp.com",
    databaseURL: "https://react-phone-auth.firebaseio.com",
    projectId: "react-phone-auth",
    storageBucket: "react-phone-auth.appspot.com",
    messagingSenderId: "33555811588",
    appId: "1:33555811588:web:5b18b19bb3b9b781c95451"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;

