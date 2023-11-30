import { initializeApp } from "firebase/app";
import { v4 } from "uuid";
import {
  getFirestore,
  collection,
  where,
  query as firestoreQuery,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCQRkeY8yz6RL6r_5x7Gpr1JnQRvGgm8TY",
  authDomain: "wifychat-77058.firebaseapp.com",
  projectId: "wifychat-77058",
  storageBucket: "wifychat-77058.appspot.com",
  messagingSenderId: "504903873435",
  appId: "1:504903873435:web:9ff0011b9e821234a3673e",
  measurementId: "G-STSFY118NQ",
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Signin

export const getUser = async (email, password) => {
  const usersCollection = collection(db, "Users");
//   console.log("userc", usersCollection);
  const emailQuery = firestoreQuery(
    usersCollection,
    where("email", "==", email)
  );

  try {
    const snapshot = await getDocs(emailQuery);
    // console.log("snapshot", snapshot);
    const userData = snapshot.docs[0]?.data();
    // console.log("userd", userData);

    if (userData && userData.password === password) {
      const token = v4();
      localStorage.setItem("token", token);
      localStorage.setItem("full_name", userData.full_name);

      return {
        data: { status: "success", token, user: userData },
      };
    } else if (snapshot.empty) {
      return {
        status: "failed",
        data: null,
        message: "No user found with the provided email",
      };
    } else {
      return {
        status: "failed",
        data: null,
        message: "Invalid Email or Password",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      status: "failed",
      data: null,
      message: "Internal Server Error",
    };
  }
};

// Signup

export const setUser = async (full_name, email, password) => {
  try {
    const usersCollection = doc(db, "Users",'new');

    // Add user data to Firestore
    const newUserRef = await setDoc(usersCollection, {
      email: email,
      password: password,
      full_name: full_name,
    });

    // const newUserDoc = await getDoc(newUserRef);

    console.log("User signed up successfully! ",newUserRef);
  } catch (error) {
    console.error("Error signing up:", error);
  }
};

// Logout

export const logoutAction = () => async (dispatch) => {
  localStorage.removeItem("token");
};

// chat search

export const search_Chats = async () => {
  const usersCollection = collection(db, "chat");
  // console.log('userc',usersCollection);
  const emailQuery = firestoreQuery(usersCollection);

  try {
    const snapshot = await getDocs(emailQuery);
    const docArr =[]
    snapshot.forEach((doc) => {
      docArr.push(doc.data());
    });
    // console.log(docArr);
    return docArr;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const get_Chats = async () => {
    const usersCollection = collection(db, "chat");
    // console.log('userc',usersCollection);
    const emailQuery = firestoreQuery(usersCollection);
  
    try {
      const snapshot = await getDocs(emailQuery);
      const docArr =[]
      snapshot.forEach((doc) => {
        docArr.push(doc.data());
      });
      // console.log(docArr);
      return docArr;
    } catch (error) {
      console.error(error);
      return [];
    }
  };