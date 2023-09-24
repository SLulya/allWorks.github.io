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


  let info = {
    text: "Hello",
    allproducts: [],
    allproducts_copy: []
  }

  const tovar_component = {
    props: ['tov'],
    template: `<div class="tovar">
    <p>Назва: {{tov.name}}</p>
    <p>Виробник: {{tov.developer}}</p>
    <p>Картинка: {{tov.img}}</p>
    <p>Ціна: {{tov.price}}</p>
    <p>Відгуки: {{tov.reviews}}</p>
    <p>Тип: {{tov.type}}</p>
</div>`
  }

  const vue_app = {
    data(){
        return info;
    },
    methods:{
        getFBprods(){
            db.collection('allproducts').get().then(res => {
                res.forEach(doc => {
                    let prod = doc.data();
                    prod.id = doc.id;
                    prod.count = 1;
                    this.allproducts.push(prod);
                })
            })
            console.log(this.allproducts)
            this.allproducts_copy = this.allproducts;
            console.log(this.allproducts_copy)
        },
        tovar_filter(type){
            this.return_allproducts()
            this.allproducts = this.allproducts.filter(prod =>{
                return prod.type === type;
            })
            console.log(this.allproducts)
        },
        return_allproducts(){
            this.allproducts = this.allproducts_copy;
            console.log(this.allproducts)
        }
    },
    components:{
        'tovar': tovar_component
    },
    mounted(){
        this.getFBprods()
    }
  }

  Vue.createApp(vue_app).mount('#app')