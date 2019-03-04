import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyAyDu97NWRsywm-AqKJ9QfcjhRbfNPyFz8",
    authDomain: "react-login-6a4f2.firebaseapp.com",
    databaseURL: "https://react-login-6a4f2.firebaseio.com",
    projectId: "react-login-6a4f2",
    storageBucket: "react-login-6a4f2.appspot.com",
    messagingSenderId: "90093863620"
};
const fire = firebase.initializeApp(config);
export default fire;