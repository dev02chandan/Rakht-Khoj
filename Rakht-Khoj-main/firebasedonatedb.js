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
      var el = document.getElementById("response");
        if (el) {
          el.innerHTML = "Our Team will reach out to your address: "+ address + ", "+city;
        } else {
          console.log('element not found');
        }
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


