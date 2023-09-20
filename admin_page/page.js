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


function showModal(id){
    document.getElementById(id).classList.add('show')
    }
    function hideModal(id){
    document.getElementById(id).classList.remove('show')
    }
    let vsi_masive = []
    let nomer = 0;
    function addUser(){
        let user = {
            name: document.getElementById('name').value,
            developer: document.getElementById('developer').value,
            img: document.getElementById('img').value,
            reviews: document.getElementById('reviews').value,
            type: document.getElementById('type').value,
            price:document.getElementById('price').value
        }
        
        console.log(user)
        db.collection("allproducts").add(user).then(function(){
            console.log('Додано')
            hideModal('newTaskModal')
            location.reload()
        })
    }
    
    
    function drawUsers(){
        let tbody = document.getElementById('tbody')
        tbody.innerHTML = '';
        let idx = 1;
        db.collection("allproducts").get().then(res => {
            res.forEach(function(doc){
                let tovar = doc.data();
                tovar.id = doc.id;
                vsi_masive.push(tovar)
                
                tbody.innerHTML += `
                <tr>
                <th scope="row">${idx}</th>
				<td>${tovar.name}</td>
				<td>${tovar.developer}</td>
				<td>${tovar.img}</td>
                <td>${tovar.reviews}</td>
                <td>${tovar.type}</td>
                <td>${tovar.price}</td>
                <td class="text-center"><button class="btn btn-warning btn-sm" onclick="edit(${nomer})">Редагувати</button></td>
                <td class="text-center"><button class="btn btn-danger btn-sm" onclick="delUser('${tovar.id}')">x</button></td>
              </tr>
                `
                nomer++;
                idx++
            })
        })
    }
    
    
    drawUsers()
    
    
    function SaveEditUser(id){
        let user = {
            name: document.getElementById('edit_name').value,
            developer: document.getElementById('edit_developer').value,
            img: document.getElementById('edit_img').value,
            type: document.getElementById('edit_type').value,
            price: document.getElementById('edit_price').value,
            reviews:document.getElementById('edit_reviews').value
        }
        console.log(user)
        db.collection("allproducts").doc(id).set(user).then(function(){
            console.log('Оновлено')
            hideModal('editTaskModal')
            location.reload()
        })
    }
    
    
    function edit(index){
       document.getElementById('edit_name').value = vsi_masive[index].name;
        document.getElementById('edit_developer').value= vsi_masive[index].developer;
        document.getElementById('edit_img').value= vsi_masive[index].img;
        document.getElementById('edit_type').value= vsi_masive[index].type;
        document.getElementById('edit_price').value= vsi_masive[index].price;
        document.getElementById('edit_reviews').value= vsi_masive[index].reviews;
        showModal('editTaskModal')
        document.getElementById('saveEd').setAttribute('onclick', `SaveEditUser("${vsi_masive[index].id}")`)
    }
    
    
    function delUser(userId){
        db.collection('allproducts').doc(userId).delete().then(function(){
            location.reload()
        })
        
    }
    
    
    
    
    