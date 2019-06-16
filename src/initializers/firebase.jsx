import firebase from 'firebase'

  // Initialize Firebase
  // const config = {
  //   apiKey: "AIzaSyBSFwJlzIiATPx0qf4L0vP-bKB0tOo77E0",
  //   authDomain: "react-taller.firebaseapp.com",
  //   databaseURL: "https://react-taller.firebaseio.com",
  //   projectId: "react-taller",
  //   storageBucket: "react-taller.appspot.com",
  //   messagingSenderId: "924337957682"
  // };

  const config ={
    apiKey: "AIzaSyBpobnv0VcAYE2dUwx603eKn1suxQXJIJc",
    authDomain: "integradorapp-36e15.firebaseapp.com",
    databaseURL: "https://integradorapp-36e15.firebaseio.com",
    projectId: "integradorapp-36e15",
    storageBucket: "integradorapp-36e15.appspot.com",
    messagingSenderId: "932603292415",
    // appId: "1:932603292415:web:b6c557d26a86d6bc"
  };

  firebase.initializeApp(config);


  export const ref = firebase.database().ref()
  export const firebaseAuth = firebase.auth
  export default firebase