import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const user = {
  email: process.env.FIREBASE_USER_EMAIL ?? "",
  password: process.env.FIREBASE_USER_PASSWORD ?? "",
};
signInWithEmailAndPassword(auth, user.email, user.password)
  .then((userCredential) => {
    userCredential.user.getIdToken().then((token) => {
      console.log(token);
    });
  })
  .catch((error) => {
    console.error("Error logging in: ", error);
  });
