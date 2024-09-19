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

form.addEventListener('submit',(e)=>{
    e.preventDefault();


    let arreglo = [];

    if(mayus.checked){arreglo.push(mayusculas);}
    if(minus.checked){arreglo.push(minusculas);}
    if(numeros.checked){arreglo.push(fnumeros);}
    if(simbolos.checked){arreglo.push(fsimbolos);}

    generar(arreglo)

});
