import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, set, ref ,push, child, onValue} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import database from "./firebasecred.js";



login_submit.addEventListener('click',(e) => {
    console.log("submit reach");
    e.preventDefault();
    var fname = getElementVal("fname");
    var lname = getElementVal("lname");
    var emailid = getElementVal("emailid");
    var gender = getChoice("GenderChoice");
    var bloodgroup = getElementVal("BloodGroup");
    var cause = getElementVal("cause");
    var country = getElementVal("country");
    var phonenumber = getElementVal("phonenumber");
    var age = getElementVal("age");
    var address = getElementVal("address");
    var city = getElementVal("city");
  
    // console.log(fname,lname,emailid,gender,country,phonenumber,ag  e,address,city);
  
    saveMessages(fname,lname,emailid,gender,bloodgroup,cause,country,phonenumber,age,address,city);

    matchingreq(bloodgroup,city,address);
    
  
  // }
});
  
  const saveMessages = (fname,lname,emailid,gender,bloodgroup,cause,country,phonenumber,age,address,city) =>{
    // var newDonateForm = donate_form_db.push();
  
    const userId = push(child(ref(database), 'users')).key;
   
    set(ref(database, 'RecieveForm/' + phonenumber),{
      fname : fname,
      lname : lname,
      emailid : emailid,
      gender:gender,
      bloodgroup:bloodgroup,
      cause:cause,
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
var el;
const matchingreq = (bloodgroup,city,address)=>{
  const dbRef = ref(database, 'DonateForm/');
    var flag=false;
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
       
      // var row = "<tr><td>" + rowNum + "</td><td>" + childData.fname + "</td><td>" + childData.lname + "</td><td>" + childData.bloodgroup +  "</td><td>" +childData.emailid+"</td><td>" +childData.gender+  "</td></tr>"
      console.log(typeof childData.bloodgroup);
      console.log(childData.bloodgroup);
      console.log(bloodgroup)
      console.log(childData.city);
      console.log(city)
      console.log((childData.bloodgroup == bloodgroup));
      console.log((childData.city == city));
      if ((childData.bloodgroup == bloodgroup) && (childData.city==city)){
        el = document.getElementById("response");
        flag = true;
        if (el) {
          el.innerHTML = "Found Your Match." + " Our Team will reach out to your address: "+ address + ", "+city;
        } else {
          console.log('element not found');
        }
        // document.getElementById(response).innerHTML = "Found Your Match";
        if(flag){return;}
        
      }
      });
    }, {
        onlyOnce: true
  });

  el = document.getElementById("response");
  if (el) {
    if(flag==false){
      el.innerHTML = "No Match Available. Your Request is noted.";
    }
  } else {
    console.log('element not found');
  }
  // if(flag==false){
  //   // document.getElementById(response).innerHTML = "No Match Available. Your Request is noted.";
  // }
}


