// bagian sidebar
function openSidebar() {
    document.getElementById("sidebar").classList.remove("ml-[-100%]");
   }

   function closeSidebar() {
    document.getElementById("sidebar").classList.add("ml-[-100%]");
   }

// bagian calculator
let angka1, angka2, operator, hasil;
document.getElementById(`button`).onclick = function(){
    angka1 = document.getElementById(`angka1`).value;
    angka2 = document.getElementById(`angka2`).value;
    operator = document.getElementById(`operator`).value;

    hasil = eval(angka1 + operator + angka2);
    document.getElementById("hasil").textContent = hasil;
    // alert(hasil)
};