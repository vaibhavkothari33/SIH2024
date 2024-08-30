
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyCncVIlCFOtW6liexk8L-o1s5t4YQnh4_4",
    authDomain: "sanjeevan-33.firebaseapp.com",
    projectId: "sanjeevan-33",
    storageBucket: "sanjeevan-33.appspot.com",
    messagingSenderId: "1028806842733",
    appId: "1:1028806842733:web:6a53bc3809cf5bc163a264",
    measurementId: "G-FB56MZXXS1"
  };
  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en"
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-sign");
googleLogin.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "../dist/what_we_do.html";
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
})

