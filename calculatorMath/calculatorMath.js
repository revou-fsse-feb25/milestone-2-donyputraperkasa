// bagian sidebar
function openSidebar() {
    document.getElementById("sidebar").classList.remove("ml-[-100%]");
   }

   function closeSidebar() {
    document.getElementById("sidebar").classList.add("ml-[-100%]");
   }

// bagian calculator
let aritmatikaAngka1, operatorAritmatika, aritmatikaAngka2, hasilOperatorAritmatika;

document.getElementById('buttonAritmatika').onclick = function (){
    // bagian input
    aritmatikaAngka1 = document.getElementById(`aritmatikaAngka1`).value;
    aritmatikaAngka2 = document.getElementById(`aritmatikaAngka2`).value;
    operatorAritmatika = document.getElementById(`operatorAritmatika`).value;
    console.log(aritmatikaAngka1);
    console.log(aritmatikaAngka2);
    console.log(operatorAritmatika);

    // bagian operasinya
    hasilOperatorAritmatika = eval(aritmatikaAngka1 + operatorAritmatika + aritmatikaAngka2);

    // bagian oputput
    document.getElementById("hasilOperatorAritmatika").textContent = hasilOperatorAritmatika;
}; 