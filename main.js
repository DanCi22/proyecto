const form = document.getElementById('form');
const password = document.getElementById('password');
const copiar = document.getElementById('copiar');
const numero = document.getElementById('numero');
const mayus = document.getElementById('mayus');
const minus = document.getElementById('minus');
const numeros = document.getElementById('numeros');
const simbolos = document.getElementById('simbolos');

copiar.addEventListener('click',()=>{

    let pass = password.innerText;
    if(!password){
        return;
    }

    navigator.clipboard.writeText(pass);
    alert('Password Copiado!');

});
