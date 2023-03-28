import {ref ,onValue} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import database from "./firebasecred.js";
  // read data

console.log("js reach");
getDataDonor.addEventListener('click',() => {
  // function fetchData(){
  
    console.log("fetch don reach");
  
    $('#dataTbl td').remove();
    var rowNum = 0; 
    const dbRef = ref(database, 'DonateForm/');
  
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      rowNum += 1; 
      var row = "<tr><td>" + rowNum + "</td><td>" + childData.fname + "</td><td>" + childData.lname + "</td><td>" + childData.bloodgroup +  "</td><td>" +childData.emailid+"</td><td>" +childData.gender+  "</td></tr>"
  
      $(row).appendTo('#dataTbl');
      
      });
    }, {
        onlyOnce: true
  });
  
  // }
  });
getDataRecipient.addEventListener('click',() => {
  // function fetchData(){
  
    console.log("fetch rec reach");
  
    $('#recdataTbl td').remove();
    var rowNum = 0; 
    const dbRef = ref(database, 'RecieveForm/');
  
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      rowNum += 1; 
      var row = "<tr><td>" + rowNum + "</td><td>" + childData.fname + "</td><td>" + childData.lname + "</td><td>" + childData.bloodgroup +  "</td><td>" +childData.emailid+"</td><td>" +childData.gender+  "</td></tr>"
  
      $(row).appendTo('#recdataTbl');
      
      });
    }, {
        onlyOnce: true
  });
  
  // }
  });
    