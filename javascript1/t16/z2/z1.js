function q1(){ 
let q1 = document.getElementById(`q1`).value;
let q2 = document.getElementById(`q2`).value;
let q3 = document.getElementById(`q3`).value;
let q4 = document.getElementById(`q4`).value;
let q5 = document.getElementById(`q5`).value;
let q6 = document.getElementById(`q6`).value;

let poch = 0;

if(q1 == `Дерево` || q1 ==  `Деревина` || q1 == `Дерева`){
    poch++;
}
if(q2 == `Київ` || q2 == `Києв`){
    poch++;
}
if(q3 == `Париж`){
    poch++;
}
if(q4 == `Єгипет`){
    poch++;
}
if(q5 == `Холодно`){
    poch++;
}
if(q6 == `Інформатика`){
    poch++;
}
console.log(poch)

    let h1 = document.getElementById(`h1`);
    h1.innerHTML += `<h1>${poch} бали</h1>`;

    
}

