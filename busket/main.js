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
  let vsi_tovari=[]
  function drawTovars(){
      let tovari = document.getElementById('tovari');
      tovari.innerHTML = ''
      db.collection('products').get().then(res => {
          res.forEach(doc  =>{
              let tovar = doc.data();
              tovar.id = doc.id;
              tovar.count = 1;
              vsi_tovari.push(tovar)
              tovari.innerHTML += `
          <div class="tovar">
              <p>Назва: ${tovar.name}</p>
              <p>Картинка:${tovar.img}</p>
              <p>Видавництво:${tovar.display}</p>
              <p>Відгуки:${tovar.accumulyator}</p>
              <p>Ціна: ${tovar.price}</p>
              <button onclick="saveLocal(${vsi_tovari.length-1})">Купити</button>
          </div> `
             
          })
      })
  }
  drawTovars()
  
  
  function saveLocal(index){
      let loc_tovars = getLocal();
   
      let tovar = loc_tovars.findIndex(car => car.id === vsi_tovari[index].id);
       
      if(tovar === -1){
          loc_tovars.push(vsi_tovari[index])
      }else{
          loc_tovars[tovar].count++
      }
     
      console.log(tovar)
  
  
     
      localStorage.setItem('prod', JSON.stringify(loc_tovars))
     
  }
  
  
  function getLocal(){
     let prod =  JSON.parse(localStorage.getItem('prod'));
      if(prod === null){
          return []
      }else{
          return prod
      }
  
  
  }
  
  
  