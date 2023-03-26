// Your web app's Firebase configuration
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
  // initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference your database
  var donate_form_db = firebase.database();

  document.getElementById("donateform").addEventListener('submit',submitForm);

  function submitForm(e){
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

    // console.log(fname,lname,emailid,gender,country,phonenumber,age,address,city);

    saveMessages(fname,lname,emailid,gender,bloodgroup,country,phonenumber,age,address,city);

  }

  const saveMessages = (fname,lname,emailid,gender,bloodgroup,country,phonenumber,age,address,city) =>{
    // var newDonateForm = donate_form_db.push();

    donate_form_db.ref("DonateForm/"+phonenumber).set({
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
    });
    alert("Form Submitted")
  }

  const getData=()=>{
    
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