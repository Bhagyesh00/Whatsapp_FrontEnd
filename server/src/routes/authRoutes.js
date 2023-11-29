import { initializeApp, credential as _credential } from 'firebase-admin';
import serviceAccount from '../serviceAccountKey.json';
// authRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

initializeApp({
  credential: _credential.cert(serviceAccount),
  databaseURL: 'https://wifychat-77058.firebaseio.com', // Replace with your Firebase project URL
});

// Sign-up route
router.post('/signup', async (req, res) => {
  try {
    // Your sign-up logic here
    res.status(200).json({ success: true, message: 'Signup successful' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Sign-in route
router.post('/signin', async (req, res) => {
  try {
    // Your sign-in logic here
    res.status(200).json({ success: true, message: 'Signin successful' });
  } catch (error) {
    console.error('Error signing in user:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
