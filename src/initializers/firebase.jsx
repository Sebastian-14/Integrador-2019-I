import firebase from 'firebase'

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBSFwJlzIiATPx0qf4L0vP-bKB0tOo77E0",
    authDomain: "react-taller.firebaseapp.com",
    databaseURL: "https://react-taller.firebaseio.com",
    projectId: "react-taller",
    storageBucket: "react-taller.appspot.com",
    messagingSenderId: "924337957682"
  };

  firebase.initializeApp(config);

  export default firebase