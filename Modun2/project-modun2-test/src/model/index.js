import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { renderErrorMessage } from "../view/index";
import { initializeApp } from "firebase/app";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { firebase } from "../index";
import { db } from "../index";

const db = getFirestore(firebase);

export let createNewUser = (firtName, lastName, email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      renderErrorMessage("success", "Thành công");
      renderErrorMessage("server-error-message", "");
    })
    .catch((err) => {
      const errorCode = err.errorCode;
      const errorMessage = err.message;
      //   console.log(err);
      renderErrorMessage("server-error-message", errorMessage);
    });
};

export let authUser = {};

export let saveMessage = (message) => {
  const conversitionRef = doc(db, "conversitions", "9cc7q6MOPJ6P36Pnc4VT");
  updateDoc(conversitionRef, {
    message: arrayUnion("message"),
  })
    .then(() => {
      console.log("them");
    })
    .catch((err) => {
      console.log(err);
    });
};
