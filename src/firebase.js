import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDasU3XFsG2DAynG0TNQXR1XF8Zk9nDMS0",
    authDomain: "slack-clone-challenge-51e14.firebaseapp.com",
    projectId: "slack-clone-challenge-51e14",
    storageBucket: "slack-clone-challenge-51e14.appspot.com",
    messagingSenderId: "712097717095",
    appId: "1:712097717095:web:b816d3e8dabc43edbaadc2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;