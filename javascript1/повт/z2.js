function vhid(){
    let pass = document.getElementById(`login`).value;
    let email = document.getElementById(`email`).value;

    let user1 = localStorage.getItem(`dani`);
    if(user1.pass == pass && user1.email == email ){
            document.getElementById(`div`).innerHTML = `<div>Успішно</div>`;
    }
}