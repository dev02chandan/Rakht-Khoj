import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, set, ref ,push, child, onValue} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBGqHHBO7sl4nNeodqHu-NhtIEW-tvk5h8",
    authDomain: "rakhtkhoj.firebaseapp.com",
    databaseURL: "https://rakhtkhoj-default-rtdb.firebaseio.com",
    projectId: "rakhtkhoj",
    storageBucket: "rakhtkhoj.appspot.com",
    messagingSenderId: "171689745069",
    appId: "1:171689745069:web:54cc2c7598ac7531e18424",
    measurementId: "G-F8B27WHKWH"
  };
  //     // initialize firebase
  //   firebase.initializeApp(firebaseConfig);
    
  //   //reference your database
  //   var donate_form_db = firebase.database();
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

export default database;