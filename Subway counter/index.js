let count = 0
let counter = document.getElementById("counter")
let savedEnteries = document.getElementById("saved-Enteries")

function increment(){
    count ++;
    counter.textContent = count
}
function save(){
    savedEnteries.textContent += count + "-"
    counter.textContent=0
    count=0
}