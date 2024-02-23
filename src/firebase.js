import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDT9KGgd7p4ETnO45rq_H6stdYZICLz_WM",
  authDomain: "first-ecommerce-2cdcc.firebaseapp.com",
  projectId: "first-ecommerce-2cdcc",
  storageBucket: "first-ecommerce-2cdcc.appspot.com",
  messagingSenderId: "1086010360053",
  appId: "1:1086010360053:web:f896960dcfb1dc246045bc"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };