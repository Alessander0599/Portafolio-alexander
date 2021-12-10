import firebase from "firebase"
import 'firebase/firestore'


var firebaseConfig = {
  apiKey: "AIzaSyAXmRleeH7xDhnqblGPSGEkDV6MKHfNsOs",
  authDomain: "portafolio-9a2cc.firebaseapp.com",
  projectId: "portafolio-9a2cc",
  storageBucket: "portafolio-9a2cc.appspot.com",
  messagingSenderId: "115703474504",
  appId: "1:115703474504:web:a85043692ea333ec3beb7d",
  measurementId: "G-H5MLHYCC30"
};

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
