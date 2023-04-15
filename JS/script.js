const numbers = [];

const panel = document.querySelector('.panel');
panel.addEventListener('click', event => {
    const value = event.target.innerText;
    if (!isNaN(value)) {
        numbers.push(Number(value));
        console.log('Numbers:', numbers);
    } else if (value === 'E') {
        // Aquí puedes hacer lo que quieras con los números guardados
        console.log('End');
    } else if (value === 'C') {
        numbers.length = 0; // Limpiar el arreglo de números
        console.log('Clear');
    }
});