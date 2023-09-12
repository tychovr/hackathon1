import { initializeApp } from "firebase/app";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYiAYUOFut3-WIqltsIBerRXSYaXru9k0",
  authDomain: "hackathon1-29988.firebaseapp.com",
  projectId: "hackathon1-29988",
  storageBucket: "hackathon1-29988.appspot.com",
  messagingSenderId: "218849774724",
  appId: "1:218849774724:web:57a6a8a0e0b73ea83e46d1"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore();

const auth = getAuth(firebaseApp)

const addSubscription = async (DateEnd: Date, DateStart: Date, Price: number, Type: string) => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No user is logged in.");
  }

  try {
    const docRef = await addDoc(collection(db, "Subscription"), {
      userId: `/Guest/${user.uid}`,
      DateEnd,
      DateStart,
      Price,
      Type
    });

    console.log("Subscription added with ID: ", docRef.id);
    return true;
  } catch (error) {
    console.error("Error adding subscription: ", error);
    throw error;
  }
};


export default { db, addSubscription };