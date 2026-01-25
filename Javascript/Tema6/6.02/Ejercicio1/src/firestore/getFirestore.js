"use strict";

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { writeBatch, doc, getDocs } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMBEaNzALdGwNruFXE0uksHaxTzqEhbvw",
  authDomain: "ejercicio-6-2.firebaseapp.com",
  projectId: "ejercicio-6-2",
  storageBucket: "ejercicio-6-2.firebasestorage.app",
  messagingSenderId: "632645574448",
  appId: "1:632645574448:web:6492c1dd11f2d29814b2f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, addDoc, collection, writeBatch, doc, getDocs };