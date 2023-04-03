// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLd4WyIMw6m-oN_MiKleYHRO36MagP3lg",
  authDomain: "get-help-form.firebaseapp.com",
  databaseURL: "https://get-help-form-default-rtdb.firebaseio.com",
  projectId: "get-help-form",
  storageBucket: "get-help-form.appspot.com",
  messagingSenderId: "273951338669",
  appId: "1:273951338669:web:cd9b77999039cc5369d624",
};
// initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var get_help_formDB = firebase.database().ref("GetHelp");

document.getElementById("gethelpform").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var name = getElementVal("name");
  var email = getElementVal("email");
  var phone = getElementVal("phone");
  var message = getElementVal("msg");

  saveMessages(name, email, phone, message);
}

const saveMessages = (name, email, phone, message) => {
  var newGetHelpForm = get_help_formDB.push();
  newGetHelpForm.set({
    name: name,
    email: email,
    phone: phone,
    message: message,
  });

  var form = document.getElementById("gethelpform");
  form.reset(); // reset the form after submission

  alert("Your form is submitted! We will get back to you soon.");
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
