function register(){ 
let login = document.getElementById(`login`).value;
let email = document.getElementById(`email`).value;
let pass = document.getElementById(`pass`).value;

let user ={
    login: login,
    email: email,
    pass: pass
}
console.log(user)
localStorage.setItem(`users`,JSON.stringify(user))
}

function check_login(){
    if(document.getElementById(`login`).value.length < 4){
        document.getElementById(`pomilka`).innerHTML = `Занадто короткий логін`;
    }else{
        document.getElementById(`pomilka`).innerHTML = ``;
    }
    
}

function check_email(){
    if(document.getElementById(`email`).value.length < 6){
        document.getElementById(`pomilka1`).innerHTML = `Занадто короткий email`;
    }else{
        document.getElementById(`pomilka1`).innerHTML = ``;
    }
    
}

function check_pass(){
    if(document.getElementById(`pass`).value.length < 6){
        document.getElementById(`pomilka2`).innerHTML = `Занадто короткий пароль`;
            
        }else{
            document.getElementById(`pomilka2`).innerHTML = ``;
        }
    
}

