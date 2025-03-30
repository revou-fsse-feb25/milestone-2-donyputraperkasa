const nama = document.getElementById("nama");
const pass = document.getElementById("pass");
const login = document.getElementById("login");
const welcome = document.querySelector("h2");

function pesan1(){
    alert("selamat datang " + nama.value);
}
function pesan2(){
    welcome.textContent = "selamat datang " + nama.value;
}