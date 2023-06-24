
function register(){
    

    let pass = document.getElementById(`login`).value;
    let email = document.getElementById(`email`).value;
    
    let user = {
        pass: pass,
        email: email
    }

    
    localStorage.setItem(`dani`, JSON.stringify(user));

}
