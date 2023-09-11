const firebaseConfig = {
    apiKey: "AIzaSyD355J7ZQlttwU2QFP5oHACMq3yRryDh2Q",
    authDomain: "newproject-da7c7.firebaseapp.com",
    projectId: "newproject-da7c7",
    storageBucket: "newproject-da7c7.appspot.com",
    messagingSenderId: "261880518754",
    appId: "1:261880518754:web:2762727ee8c36fd63c593b"
  };

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();


let all_tovars = [];

function getTovars(){ 
 db.collection(tovar_type.value).get().then(res => {
    res.forEach(doc => {
        let obj = doc.data();
        obj.id = doc.id;
        all_tovars.push(obj)
    });
    console.log(all_tovars)
 })
}

function filter(){
    let new_phones = all_tovars.slice();
 if(minprice.value.length > 0){
    new_phones = new_phones.filter(function (phone){
        return phone.price >= minprice.value
    })
}
if(maxprice.value.length > 0){
    new_phones = new_phones.filter(function (phone){
        return phone.price <= maxprice.value
    })
}
console.log(new_phones)
}
