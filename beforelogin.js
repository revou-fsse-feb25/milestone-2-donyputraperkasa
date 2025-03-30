const nama = document.getElementById("nama");
const pass = document.getElementById("pass");
const login = document.getElementById("login");
const welcome = document.querySelector("h2");

function pesan(){
    alert("selamat datang " + nama.value);
}

let button = document.getElementById("buttonLogin");

button.style.backgroundColor = "blue-500";
button.style.color = "blue-500";
button.addEventListener("click", function(){
    button.style.backgroundColor = "blue-700";
})
