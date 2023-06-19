console.log('Hola')

const btn_sumar = document.getElementById('btn_suma');
const btn_restar = document.getElementById('btn_restar');
const btn_multiplicar = document.getElementById('btn_multiplicar');
const btn_dividir = document.getElementById('btn_dividir');

const btn_sumar_contador = document.getElementById('btn_suma_contador');
const btn_restar_contador = document.getElementById('btn_restar_contador');
const btn_regresiva = document.getElementById('btn_regresion');

const p = document.getElementById('resultado');
const contenidoA = document.getElementById('numA');
const contenidoB = document.getElementById('numB');

const p2 = document.getElementById('regresion');
var contador = 0;


p.textContent = 0;
p2.textContent = 0;

btn_sumar.addEventListener('click', async () =>{
    // await setTimeout(() => {
        p.textContent = Number(document.getElementById('numA').value)+Number(document.getElementById('numB').value);
        console.log(p.textContent)
    // }, 1000);
})

btn_restar.addEventListener('click', async () =>{
    // await setTimeout(() => {
        p.textContent = Number(document.getElementById('numA').value)-Number(document.getElementById('numB').value);
    // }, 1000);
})

btn_multiplicar.addEventListener('click', async () =>{
    // await setTimeout(() => {
        p.textContent = Number(document.getElementById('numA').value)*Number(document.getElementById('numB').value);
    // }, 1000);
})

btn_dividir.addEventListener('click', async () =>{
    // await setTimeout(() => {
        // if(IsNaN(document.getElementById('numA').value)!=true || IsNaN(document.getElementById('numB').value)!=true){
        //     Window.alert('Porfavor ingrese un dato numerico valido')

        // }
        // else {
    
        p.textContent = Number(document.getElementById('numA').value) / Number(document.getElementById('numB').value);
    
    // }, 1000);
})


btn_sumar_contador.addEventListener('click', async () =>{
    // await setTimeout(() => {
        contador++;
        p2.textContent = contador;
        console.log(p.textContent);
    // }, 1000);
})

btn_restar_contador.addEventListener('click', async () =>{
    // await setTimeout(() => {
        contador--;
        p2.textContent = contador;
        console.log(p.textContent);
    // }, 1000);
})

btn_regresiva.addEventListener('click', async () =>{
    
    var contadorInterval = setInterval(actualizarContador, 1000);
})



function actualizarContador() {
  
  contador--;
  p2.textContent = contador;
  if (contador == 0) {
    alert('Fin')
    clearInterval(contadorInterval);
  }
}



