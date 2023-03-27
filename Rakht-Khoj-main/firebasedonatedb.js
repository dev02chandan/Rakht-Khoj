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

  // write data

  // function submitForm(e){
submit.addEventListener('click',(e) => {
    console.log("submit reach");
    e.preventDefault();
    var fname = getElementVal("fname");
    var lname = getElementVal("lname");
    var emailid = getElementVal("emailid");
    var gender = getChoice("GenderChoice");
    var bloodgroup = getElementVal("BloodGroup");
    var country = getElementVal("country");
    var phonenumber = getElementVal("phonenumber");
    var age = getElementVal("age");
    var address = getElementVal("address");
    var city = getElementVal("city");
  
    // console.log(fname,lname,emailid,gender,country,phonenumber,ag  e,address,city);
  
    saveMessages(fname,lname,emailid,gender,bloodgroup,country,phonenumber,age,address,city);
  
  // }
});
  
  const saveMessages = (fname,lname,emailid,gender,bloodgroup,country,phonenumber,age,address,city) =>{
    // var newDonateForm = donate_form_db.push();
  
    const userId = push(child(ref(database), 'users')).key;
   
    set(ref(database, 'DonateForm/' + phonenumber),{
      fname : fname,
      lname : lname,
      emailid : emailid,
      gender:gender,
      bloodgroup:bloodgroup,
      country : country,
      phonenumber : phonenumber,
      age : age,
      address : address,
      city : city
    }).then(()=>{
      alert("Form Submitted");
    })
    .catch((error)=>{
      console.log(error);
      alert("Error in submission. Please send a request through CONTACT US section");
    });
    
  }
  

  
const getChoice = (choicename) =>{
    var data = document.getElementsByName(choicename);
    var i;
    for (i=0;i<=data.length; i++){
      if (data[i].checked){
        return data[i].value;
      }
    }
  }
  
  const getElementVal = (id) =>{
    return document.getElementById(id).value;
  };

//   // read data
// getData.addEventListener('click',(e) => {
// // function fetchData(){

//   console.log("fetch reach");

//   $('#dataTbl td').remove();
//   var rowNum = 0; 
//   const dbRef = ref(database, 'DonateForm/');

//   onValue(dbRef, (snapshot) => {
//     snapshot.forEach((childSnapshot) => {
//     const childKey = childSnapshot.key;
//     const childData = childSnapshot.val();
//     rowNum += 1; 
//     var row = "<tr><td>" + rowNum + "</td><td>" + childData.fname + "</td><td>" + childData.lname + "</td><td>" + childData.bloodgroup +  "</td><td>" +childData.emailid+"</td><td>" +childData.gender+  "</td></tr>"

//     $(row).appendTo('#dataTbl');
    
//     });
//   }, {
//       onlyOnce: true
// });

// // }
// });


export default database;
