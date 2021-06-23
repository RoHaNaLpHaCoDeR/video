import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDkrcpsmy1ecIuoXk5lOWzAF_BCqLvVIsI",
  authDomain: "project-video-streamer.firebaseapp.com",
  projectId: "project-video-streamer",
  storageBucket: "project-video-streamer.appspot.com",
  messagingSenderId: "950454084074",
  appId: "1:950454084074:web:1588f17fba950694835293"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export {auth};
