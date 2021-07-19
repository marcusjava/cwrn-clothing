import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//const firebaseConfig = process.env.REACT_APP_FIREBASE_CONFIG;
const firebaseConfig = {
  apiKey: "AIzaSyAxupBHtg3KiZKDxsxBqsm9RXqR6EEg8yk",
  authDomain: "cwrn-react.firebaseapp.com",
  projectId: "cwrn-react",
  storageBucket: "cwrn-react.appspot.com",
  messagingSenderId: "670093563570",
  appId: "1:670093563570:web:76a577cadac6b104429bab",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const createUserProfileDocument = async (user, data) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...data,
      });
    } catch (error) {
      console.error("error while creating the user", error.message);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
