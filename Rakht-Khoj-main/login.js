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
login_submit.addEventListener("click", (e) => {
  console.log("submit reach");
  e.preventDefault();
  var username = getElementVal("username_login");
  var password = getElementVal("password_login");
  matchingreq(username, password);
});

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

//   var el;
var flag = false;
const matchingreq = (username, password) => {
  const dbRef = ref(database, "RegisterForm/");
  onValue(
    dbRef,
    (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();

        // console.log(typeof childData.username);
        // console.log(childData.username);
        // console.log(childData.password);
        // console.log((childData.username == username));
        // console.log((childData.password == password));
        if (childData.username == username && childData.password == password) {
          console.log("match");
          //   flag = true;
          //   if(flag){return;}
          window.location.href = "index.html";
        } else {
          var el = document.getElementById("response");
          if (el) {
            el.innerHTML = "Wrong Credentials Entered!!! Re-enter Details";
          } else {
            console.log("element not found");
          }
        }
      });
    },
    {
      onlyOnce: true,
    }
  );

  if (flag == false) {
    console.log("non-match");
    console.log(flag);
  }
};

localStorage.setItem("myVariable", "hello");
