import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDTgE3pdDB-T5AoIzL2rFtudrAWnW9uM1E",
  authDomain: "crudfirebase-16455.firebaseapp.com",
  databaseURL: "https://crudfirebase-16455-default-rtdb.firebaseio.com",
  projectId: "crudfirebase-16455",
  storageBucket: "crudfirebase-16455.appspot.com",
  messagingSenderId: "573922167882",
  appId: "1:573922167882:web:e689ff1a329a5c8286aab3"
  };
  // Initialize Firebase
  var fireDB=firebase.initializeApp(firebaseConfig);

  export default fireDB.database().ref();