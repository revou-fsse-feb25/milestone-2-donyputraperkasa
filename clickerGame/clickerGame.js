// bagian sidebar
function openSidebar() {
    document.getElementById("sidebar").classList.remove("ml-[-100%]");
   }

   function closeSidebar() {
    document.getElementById("sidebar").classList.add("ml-[-100%]");
   }

// bagian klik game
let skor = document.getElementById("gameCost");
function hasilSkor(){
    skor.innerHTML = parseFloat(skor.innerHTML) + 1;
}
const timerSpan = document.getElementById("timer");
function countdown(seconds){
    const timerInterval = setInterval(function(){
        if (seconds >= 0){timerSpan.innerHTML = seconds--;
        } else {
            clearInterval(timerInterval);
            alert("waktu habis\nskor anda = " + skor.innerHTML);
        }
    }, 1000)
}
countdown(10);