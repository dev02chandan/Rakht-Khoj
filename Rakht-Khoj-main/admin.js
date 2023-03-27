import database from './firebasedonatedb.js';
import {ref ,onValue} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
  // read data
getData.addEventListener('click',() => {
  // function fetchData(){
  
    console.log("fetch reach");
  
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
    