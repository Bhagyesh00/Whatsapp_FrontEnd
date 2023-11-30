import { initializeApp } from "firebase/app";
import { v4 } from "uuid"
import {
    getFirestore,
    collection,
    where,
    query as firestoreQuery,
    getDocs,
    getDoc,
    addDoc,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCQRkeY8yz6RL6r_5x7Gpr1JnQRvGgm8TY",
    authDomain: "wifychat-77058.firebaseapp.com",
    projectId: "wifychat-77058",
    storageBucket: "wifychat-77058.appspot.com",
    messagingSenderId: "504903873435",
    appId: "1:504903873435:web:9ff0011b9e821234a3673e",
    measurementId: "G-STSFY118NQ"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Signin

export const getUser = async (email, password) => {
    const usersCollection = collection(db, 'Users');
    const emailQuery = firestoreQuery(
        usersCollection,
        where('email', '==', email)
    );

    try {
        const snapshot = await getDocs(emailQuery);
        const userData = snapshot.docs[0]?.data();

        if (userData && userData.password === password) {
            const token = v4()
            localStorage.setItem('token', token)
            localStorage.setItem('full_name', userData.full_name)
            
            return {
                data: { status: 'success', token, user: userData },
            };
        } else if (snapshot.empty) {
            return {
                status: 'failed',
                data: null,
                message: 'No user found with the provided email',
            };
        } else {
            return {
                status: 'failed',
                data: null,
                message: 'Invalid Email or Password',
            };
        }
    } catch (error) {
        console.error(error);
        return {
            status: 'failed',
            data: null,
            message: 'Internal Server Error',
        };
    }
};

// Signup

export const setUser = async (full_name, email, password) => {
    try {
        const usersCollection = collection(db, 'Users');

        // Add user data to Firestore
        const newUserRef = await addDoc(usersCollection, {
            email: email,
            password: password,
            full_name:full_name,
        });
        
        const newUserDoc = await getDoc(newUserRef);

        console.log('User signed up successfully!');

        return {
            status: 'success',
            data: { user: newUserDoc.data() },
            message: 'User added successfully',
        };

    }catch (error) {
        console.error('Error signing up:',error);
        return {
            status: 'failed',
            data: null,
            message: 'Failed to add user. Please try again.',
        };
    }
        
};

// Logout

export const logoutAction = () => async (dispatch) => {
    localStorage.removeItem('token')
}