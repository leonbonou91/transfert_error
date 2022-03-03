
let pourcentage = 0;

const btn = document.getElementById('btn_Increment');
const showPour = document.getElementById('showPour');
showPour.innerText = pourcentage;

function Increment() {
    if (pourcentage >= 98) {
        clearInterval(timer);
        window.location.href = 'fail.html';
    } else {
        pourcentage = pourcentage + 1;
    }
    showPour.innerText = pourcentage;
}

var timer = setInterval("Increment()", 150);


