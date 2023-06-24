const list = document.getElementById(`list`);
let nam = ` `;

for(i = 0; i < 3; i++){  
let username = prompt(`Назвіться`)
nam += `<li>${username}</li>`;
}
list.innerHTML = nam;

console.log(list) 