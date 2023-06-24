function changes(){
   let card_num = document.getElementById('card_num').value;
   let card_color = document.getElementById('card_color').value;
   let card_bg = document.getElementById(`card_bg`).value;
      
   document.getElementById(`card_${card_num}`).setAttribute(`style`, `color: ${card_color}; background: ${card_bg}`)
   
}
console.log(`fff`)
