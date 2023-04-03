const passwordInput = document.querySelector("#password_reg");
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  push,
  child,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
import database from "./firebasecred.js";

console.log("js reach");

passwordInput.addEventListener("keyup", () => {
  let password = passwordInput.value;

  var strongRegex = new RegExp(
    "^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$",
    "g"
  );
  var mediumRegex = new RegExp(
    "^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$",
    "g"
  );

  if (password.length === 0) {
    document.querySelector(".safety").innerHTML =
      "Enter Password to Check Strength";
  } else {
    document.querySelector(".safety").innerHTML =
      '<span>Password Strength</span><span class="line" id="line1"></span><span class="line" id="line2"></span><span class="line" id="line3"></span>';
  }

  if (strongRegex.test(password)) {
    document.querySelector("#line1").style.background = "green";
    document.querySelector("#line2").style.background = "green";
    document.querySelector("#line3").style.background = "green";
  } else if (mediumRegex.test(password)) {
    document.querySelector("#line1").style.background = "yellow";
    document.querySelector("#line2").style.background = "yellow";
  } else {
    document.querySelector("#line1").style.background = "red";
  }
});

var username;

submit.addEventListener("click", (e) => {
  console.log("submit reach");
  e.preventDefault();
  username = getElementVal("username_reg");
  var number = getElementVal("number_reg");
  var email = getElementVal("email_reg");
  var password = getElementVal("password_reg");

  // console.log(fname,lname,emailid,gender,country,phonenumber,ag  e,address,city);

  saveMessages(username, number, email, password);

  // matchingreq(bloodgroup,city);

  // }
});

const saveMessages = (username, number, email, password) => {
  // var newDonateForm = donate_form_db.push();

  const userId = push(child(ref(database), "users")).key;

  set(ref(database, "RegisterForm/" + number), {
    username: username,
    number: number,
    email: email,
    password: password,
  })
    .then(() => {
      alert("Register Form Submitted");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.log(error);
      alert(
        "Error in submission. Please send a request through CONTACT US section"
      );
    });
};

// const getChoice = (choicename) =>{
//     var data = document.getElementsByName(choicename);
//     var i;
//     for (i=0;i<=data.length; i++){
//       if (data[i].checked){
//         return data[i].value;
//       }
//     }
//   }

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

localStorage.setItem("myVariable", "hello");
