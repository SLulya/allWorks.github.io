
function changeCard(x){
    if(document.getElementById(x).classList.length == 3){
        document.getElementById(x).classList.add("bg-red", "yellow")
    }else if(document.getElementById(x).classList.length > 3){
        document.getElementById(x).classList.remove("bg-red", "yellow")
    }

}

console.log(document.getElementById("card_1").classList.length)