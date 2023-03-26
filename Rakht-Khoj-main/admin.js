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
    var database = firebase.database();
 
    const getDonorData=()=>{
    //   var name = getElementVal()
      var user_ref = database.ref("DonateForm/"+"")
      user_ref.on('value', gotData, errData);

      function gotData(data){
        console.log(data.val());
      }

      function errData(err){
        console.log('No Data');
        console.log(err);
      }
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

    getDonorData();