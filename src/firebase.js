import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCesY8F8W5hgAC_X_GGjOXJ8XCHOP5Zd-Q",
  authDomain: "dc-react-slackchat-clone-a4a49.firebaseapp.com",
  databaseURL: "https://dc-react-slackchat-clone-a4a49.firebaseio.com",
  projectId: "dc-react-slackchat-clone-a4a49",
  storageBucket: "dc-react-slackchat-clone-a4a49.appspot.com",
  messagingSenderId: "576730873105",
  appId: "1:576730873105:web:f79a184df3dafbd53b60b0",
  measurementId: "G-SXCK895YFP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
