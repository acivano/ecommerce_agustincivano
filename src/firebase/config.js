import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyD2MR4TOfPTiEvYDvQje8we8h-Dzaw1dQc",
    authDomain: "ecommerce-agustin.firebaseapp.com",
    projectId: "ecommerce-agustin",
    storageBucket: "ecommerce-agustin.appspot.com",
    messagingSenderId: "1095660340400",
    appId: "1:1095660340400:web:1bb3f0b1d813259bf8a775"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () =>{
    return app;
}