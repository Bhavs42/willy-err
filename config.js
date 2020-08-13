import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyCaCvbZBCDFS2VyQpDphwkC4Lnmub4gpzA",
    authDomain: "library-4b826.firebaseapp.com",
    databaseURL: "https://library-4b826.firebaseio.com",
    projectId: "library-4b826",
    storageBucket: "library-4b826.appspot.com",
    messagingSenderId: "119660782902",
    appId: "1:119660782902:web:3e5a3af4933f90cef4ff97"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()