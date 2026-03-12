let count = 0

const number = document.getElementById("number");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");

plus.addEventListener("click", function(){
    count++;
    number.textContent = count;
});

minus.addEventListener("click", function(){
    count--;
    number.textContent = count;
});

reset.addEventListener("click", function(){
    count = 0;
    number.textContent = count;
});