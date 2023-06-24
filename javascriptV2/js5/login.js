const firebaseConfig = {
    apiKey: "AIzaSyD355J7ZQlttwU2QFP5oHACMq3yRryDh2Q",
    authDomain: "newproject-da7c7.firebaseapp.com",
    projectId: "newproject-da7c7",
    storageBucket: "newproject-da7c7.appspot.com",
    messagingSenderId: "261880518754",
    appId: "1:261880518754:web:2762727ee8c36fd63c593b"};
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

let sait_users = [];
db.collection('user_test').get().then(function(res){
    res.forEach(function(doc){
        let user = doc.data();
        user.id = doc.id;
        sait_users.push(user)
    });
})
console.log(sait_users)
function check_sign(){
    let email = document.getElementById(`email`).value;
    let password = document.getElementById(`password`).value;
    for(i=0; i<sait_users.length; i++){
        if(sait_users[i].email == email){
            if(sait_users[i].password == password){
                localStorage.setItem('sign_in', JSON.stringify(sait_users[i]))
            }
        }
    }
}