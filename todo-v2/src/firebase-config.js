import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCxQaQfM-xzxH5xlnaLi58KlawvOkjwtEk",
    authDomain: "todo-v2-36279.firebaseapp.com",
    projectId: "todo-v2-36279",
    storageBucket: "todo-v2-36279.appspot.com",
    messagingSenderId: "619887610887",
    appId: "1:619887610887:web:726eadccda140cfaa1eea2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
