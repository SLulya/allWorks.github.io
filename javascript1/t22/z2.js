function cards(){
    let cards_num = document.getElementById(`cards_num`).value;
    let cardss = document.getElementById(`cards`);
    let c = ``;
    for(i=0; i<cards_num; i++){
        c += `<div class="card">
        <div class="card-body my-2">
          <h5 class="card-title">Card ${i+1}</h5>
        </div>
      </div>`
    }
    cardss.innerHTML = c;
}
function color(){

    let color = document.getElementById(`cards_text`).value;
    let a = document.getElementsByClassName(`card-title`);
    Array.from(a).map(function(x){
        x.style.color = color;
    })
}
function colorb(){
    let color1 = document.getElementById(`cards_fon`).value;
    let c = document.getElementsByClassName(`card-body`);
    Array.from(c).map(function(x){
        x.style.background = color1;
    })
}
function zmina2 (){
    let cards = document.getElementById(`cards`);
    cards.innerHTML = ``;
}