const numeros = [];
const panel = document.querySelector('.panel');
const numerosList = document.getElementById('numeros');

panel.addEventListener('click', event => {
    const value = event.target.innerText;
    if (!isNaN(value)) {
        numeros.push(Number(value));
        console.log(numeros);
    } else if (value === 'E') {
        imprimirHTML(numeros)
    } else if (value === 'C') {
        numeros.length = 0;
        console.log('Clear');
        clearConsole();
    }
});

function imprimirHTML(numeros) {
    const pantalla = document.querySelector('.pantalla');
    let html = '<p>';
    numeros.forEach(numero => {
        html += `${numero} `;
    });
    html += '</p>';
    pantalla.innerHTML = html;
}