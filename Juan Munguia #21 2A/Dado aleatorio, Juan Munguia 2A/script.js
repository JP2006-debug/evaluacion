function Aleatorio() {

    let min = Number(document.getElementById('num').value);
    let max = Number(document.getElementById('num1').value);
    let out = document.getElementById('Salida');

    const resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    out.textContent = resultado;
}
