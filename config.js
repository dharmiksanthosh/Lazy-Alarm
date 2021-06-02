import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCuSP_bu8zCKZba-HC__vsZOSHZcMGyiEs",
  authDomain: "lazy-alarm-3999.firebaseapp.com",
  projectId: "lazy-alarm-3999",
  storageBucket: "lazy-alarm-3999.appspot.com",
  messagingSenderId: "502104335051",
  appId: "1:502104335051:web:a50d313916ef01a80d714e"
};
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();