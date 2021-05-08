import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDhZ339kIdq0q0chF54ImzrVlTBK7R5N3k",
  authDomain: "login-c1419.firebaseapp.com",
  projectId: "login-c1419",
  storageBucket: "login-c1419.appspot.com",
  messagingSenderId: "556935883970",
  appId: "1:556935883970:web:ea09374b867bf50a1f9f5b"
};
if (!firebase.apps.length) {
  var fire = firebase.initializeApp(firebaseConfig);
} else {
  var fire = firebase.app(); // if already initialized, use that one
}
export default fire;
