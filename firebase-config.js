// GANTI nilai di bawah ini dengan config dari project Firebase kamu sendiri.
// Cara ambil: console.firebase.google.com -> buat project -> Project settings -> scroll ke "Your apps" -> tambah Web App -> copy config di sini.
// Lalu di Firestore Database, buat database (mode "test" dulu biar gampang, aman untuk tugas sekolah skala kecil).

const firebaseConfig = {
  apiKey: "AIzaSyDJwueUrxXDdBFoGF97wiGCL5q6OyVj1Bo",
  authDomain: "kopikami-2026.firebaseapp.com",
  projectId: "kopikami-2026",
  storageBucket: "kopikami-2026.firebasestorage.app",
  messagingSenderId: "555094423669",
  appId: "1:555094423669:web:eb9b2af3e98ee8fb93203c"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();