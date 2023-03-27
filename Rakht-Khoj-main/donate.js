// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBGqHHBO7sl4nNeodqHu-NhtIEW-tvk5h8",
//   authDomain: "rakhtkhoj.firebaseapp.com",
//   databaseURL: "https://rakhtkhoj-default-rtdb.firebaseio.com",
//   projectId: "rakhtkhoj",
//   storageBucket: "rakhtkhoj.appspot.com",
//   messagingSenderId: "171689745069",
//   appId: "1:171689745069:web:54cc2c7598ac7531e18424",
//   measurementId: "G-F8B27WHKWH"
// };
//   // initialize firebase
// firebase.initializeApp(firebaseConfig);

// //reference your database
// var donate_form_db = firebase.database();

// // document.getElementById("donateform").addEventListener('submit',submitForm);

// // function returnDBObj(){return donate_form_db;}

// function submitForm(e){
//   e.preventDefault();
//   var fname = getElementVal("fname");
//   var lname = getElementVal("lname");
//   var emailid = getElementVal("emailid");
//   var gender = getChoice("GenderChoice");
//   var bloodgroup = getElementVal("BloodGroup");
//   var country = getElementVal("country");
//   var phonenumber = getElementVal("phonenumber");
//   var age = getElementVal("age");
//   var address = getElementVal("address");
//   var city = getElementVal("city");

//   // console.log(fname,lname,emailid,gender,country,phonenumber,age,address,city);

//   saveMessages(fname,lname,emailid,gender,bloodgroup,country,phonenumber,age,address,city);

// }

// const saveMessages = (fname,lname,emailid,gender,bloodgroup,country,phonenumber,age,address,city) =>{
//   // var newDonateForm = donate_form_db.push();

//   donate_form_db.ref("DonateForm/"+phonenumber).set({
//     fname : fname,
//     lname : lname,
//     emailid : emailid,
//     gender:gender,
//     bloodgroup:bloodgroup,
//     country : country,
//     phonenumber : phonenumber,
//     age : age,
//     address : address,
//     city : city
//   }).then(()=>{
//     alert("Form Submitted");
//   })
//   .catch((error)=>{
//     console.log(error);
//     alert("Error in submission. Please send a request through CONTACT US section");
//   });
  
// }

// const getData=()=>{
  
// }

// const getChoice = (choicename) =>{
//   var data = document.getElementsByName(choicename);
//   var i;
//   for (i=0;i<=data.length; i++){
//     if (data[i].checked){
//       return data[i].value;
//     }
//   }
// }

// const getElementVal = (id) =>{
//   return document.getElementById(id).value;
// };


// // getData.addEventListener('click',(e) => {

// //   $('#dataTbl td').remove();
// //   var rowNum = 0; 
// //   const dbRef = ref(database, 'users/');

// //   onValue(dbRef, (snapshot) => {
// //     snapshot.forEach((childSnapshot) => {
// //     const childKey = childSnapshot.key;
// //     const childData = childSnapshot.val();
// //     // ...
// //     rowNum += 1; 
// //     var row = "<tr><td>" + rowNum + "</td><td>" + childData.firstName + "</td><td>" + childData.lastName + "</td><td>" + childData.email + "</td></tr>"

// //     $(row).appendTo('#dataTbl');
    
// //     });
// //   }, {
// //      onlyOnce: true
// //   });


// // });



// // Retrive Data admin
  
// // var stdNo = 0;
// // var tbody = document.getElementById("tablebody")
// // function AddItemToTable(fname,lname,bloodgroup,emailid,gender){
// //   let trow = document.createElement("tr");
// //   let td1 = document.createElement("td");
// //   let td2 = document.createElement("td");
// //   let td3 = document.createElement("td");
// //   let td4 = document.createElement("td");
// //   let td5 = document.createElement("td");
// //   let td6 = document.createElement("td");

// //   td1.innerHTML = ++stdNo;
// //   td2.innerHTML = fname;
// //   td3.innerHTML = lname;
// //   td4.innerHTML = bloodgroup;
// //   td5.innerHTML = emailid;
// //   td6.innerHTML = gender;

// //   trow.appendChild(td1);
// //   trow.appendChild(td2);
// //   trow.appendChild(td3);
// //   trow.appendChild(td4);
// //   trow.appendChild(td5);
// //   trow.appendChild(td6);

// //   tbody.appendChild(trow);
// // }


// // function AddAllItemsToTable(TheUser){
// //   stdNo = 0;
// //   tbody.innerHTML = "";
// //   TheUser.forEach(element => {
// //     AddItemToTable(element.fname,element.lname,element.bloodgroup,element.emailid,element.gender);
    
// //   });

// // }

// // import {getDatabase, ref, child, onValue,get}
// // from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";
// // const db = getDatabase();
// // const db = donate_form_db;
// // function getAllDataOnce(){
// //   const dbref = ref(db);
// //   get(child(dbref, "DonorForm")).then((snapshot)=>{
// //     var users = [];
// //     snapshot.forEach(element => {
// //       users.push(element.val())
// //     });

// //     AddAllItemsToTable(users);
// //   })

// // }
// // window.onload = getAllDataOnce;