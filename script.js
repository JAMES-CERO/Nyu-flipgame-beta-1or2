let Start = document.querySelector("#StartB");

let Pair = 0;
let Impair = 0;

Start.addEventListener("click", function() {
    let outcome = Math.random();
    console.log(outcome)
    if (outcome < 0.5) {
        document.querySelector("#N1").src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Eo_circle_red_number-1.svg/2048px-Eo_circle_red_number-1.svg.png"; alt="impair number"
        document.querySelector("h2").textContent = "ITS Impair"
        Impair++
        console.log(Impair)
        UpdateTable()
    } else {
        document.querySelector("#N1").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq6bZLinJH-3bIcOsm22wU5LapfK6deXGh1G4FW43FLrUsN15iVPvKf_wNwdMgsmOYkQI&usqp=CAU"; alt="pair number"
        document.querySelector("h2").textContent = "ITS Pair"
        Pair++
        console.log(Pair)
        UpdateTable()
    }
})

document.querySelector("#ClearB").addEventListener("click", function(){
document.querySelector("#N1").src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Eo_circle_red_number-1.svg/2048px-Eo_circle_red_number-1.svg.png"; alt="impair number"
document.querySelector("h2").textContent = "Can you guess?"
Pair =0;
Impair =0;
UpdateTable()
 })

 function UpdateTable(){
    document.querySelector("#NP").textContent= Pair
    document.querySelector("#NI").textContent= Impair

    if((Pair + Impair) !== 0 ){

        document.querySelector("#PP").textContent = Math.round(Pair/(Pair+Impair)*100) + '%'
        document.querySelector("#PI").textContent = Math.round(Impair/(Pair+Impair)*100) + '%'
    } else {
        document.querySelector("#PP").textContent ='0%'
        document.querySelector("#PI").textContent = '0%'
    }

}

 
