const firebaseConfig = {
    apiKey: "AIzaSyD355J7ZQlttwU2QFP5oHACMq3yRryDh2Q",
    authDomain: "newproject-da7c7.firebaseapp.com",
    projectId: "newproject-da7c7",
    storageBucket: "newproject-da7c7.appspot.com",
    messagingSenderId: "261880518754",
    appId: "1:261880518754:web:2762727ee8c36fd63c593b" };
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  let users = [];

class Phone{
    constructor(name, company, operatingSystem, screen, price, battery, color){
        this.name = name;
        this.company = company;
        this.operatingSystem = operatingSystem;
        this.screen = screen;
        this.price = price;
        this.battery = battery;
        this.color = color;
    }
    displayTitle(){
        return `${this.company} ${this.name} ${this.color}`
    }
    credit4month(){
        let month_additional_cost = this.price*(4/100);
        let month_total = 4;
        let total_price = month_additional_cost*month_total + this.price;
        return `Total price - ${total_price}`
    }
    credit6month(){
        let month_additional_cost = this.price*(5/100);
        let month_total = 6;
        let total_price = month_additional_cost*month_total + this.price;
        return `Total price - ${total_price}`
    }
    credit12month(){
        let month_additional_cost = this.price*(6/100);
        let month_total = 12;
        let total_price = month_additional_cost*month_total + this.price;
        return `Total price - ${total_price}`
    }

}
let phone_1 = new Phone(`Xiaomi`, `Xiaomi`, `Android`, `6.8`, 7000, 3050, `blue`);
let all_phones = [phone_1];
function addNewPhone(){
    let newphone = new Phone(document.getElementById(`name`).value,
    document.getElementById(`company`).value,
    document.getElementById(`operating_system`).value,
    Number(document.getElementById(`screen`).value),
    Number(document.getElementById(`price`).value),
    Number(document.getElementById(`battery`).value),
    document.getElementById(`color`).value
    );
    all_phones.push(newphone);

    db.collection('phones').add(newphone).then(function(){
        console.log(`added`)
    })

    drawPhones()
}
console.log(all_phones);

function drawPhones(){
    let phones_table = document.getElementById(`phones_table`);
    phones_table.innerHTML = ``;
    all_phones.forEach((phone, idx) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <th scope="row">${idx+1}</th>
            <td>${phone.name}</td>
            <td>${phone.company}</td>
            <td>${phone.operatingSystem}</td>
            <td>${phone.screen}</td>
            <td>${phone.price}</td>
            <td>${phone.battery}</td>
            <td>${phone.color}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="alert('${phone.displayTitle()}')">
                Main information
                <button>
            </td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="alert('${phone.credit4month()}')">
                4 months
                <button>
            </td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="alert('${phone.credit6month()}')">
                6 months
                <button>
            </td>
            <td>
                <button class="btn btn-sm btn-primary" oonclick="alert('${phone.credit12month()}')">
                12 months
                <button>
            </td>
        `
        phones_table.appendChild(tr)
    })
}
drawPhones()