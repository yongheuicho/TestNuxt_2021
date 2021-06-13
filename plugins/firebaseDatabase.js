import firebase from 'firebase/app';
import 'firebase/database';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL9vEE_yzUVPVCDIXAvRGPboNaatFCNjU",
  authDomain: "mytest-1e735.firebaseapp.com",
  databaseURL: "https://mytest-1e735-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mytest-1e735",
  storageBucket: "mytest-1e735.appspot.com",
  messagingSenderId: "555523400248",
  appId: "1:555523400248:web:4e5424ed877d1123423ccd"
};
if (firebase.apps.length == 0) firebase.initializeApp(firebaseConfig);
let fbAppCount = firebase.app.name;
let fbDb = firebase.database();
export {fbAppCount, fbDb};
