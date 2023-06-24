const firebaseConfig = {
    apiKey: "AIzaSyCEc4PZrHQ-2j-w2k00D4JCj6Gejw_R7Ls",
    authDomain: "studylink-920fd.firebaseapp.com",
    projectId: "studylink-920fd",
    storageBucket: "studylink-920fd.appspot.com",
    messagingSenderId: "507495128808",
    appId: "1:507495128808:web:ec3e65462a463a30faf35d"
  };
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

function saveUser(){
    let us = {
        name: document.getElementById(`nam`).value,
        lastname: document.getElementById(`lnam`).value,
        email: document.getElementById(`email`).value,
        phone: document.getElementById(`phone`).value
    }
    db.collection("users").add(us)
    console.log(us)
    
}