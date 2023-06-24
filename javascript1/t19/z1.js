function vivodText () {
    let text = document.getElementById(`text`).value;
    localStorage.setItem(`text`, text);
    zapus();
    
}

function zapus () {
    let text = localStorage.getItem(`text`);
    let stored_test = document.getElementById(`stored_test`);
    stored_test.innerText = text;
}

function clean () {
    localStorage.clear();
    stored_test.innerHTML = ``;
}

function zmina (){
    let local = localStorage.getItem(`text`);
    document.getElementById(`text`).value = local;
}
zapus ()

