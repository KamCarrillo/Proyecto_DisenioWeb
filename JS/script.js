const numeros = [];

const panel = document.querySelector('.panel');
panel.addEventListener('click', event => {
    const value = event.target.innerText;
    if (!isNaN(value)) {
        numeros.push(Number(value));
        console.log('Numbers:', numeros);
    } else if (value === 'E') {
        console.log('End');
    } else if (value === 'C') {
        numeros.length = 0;
        console.log('Clear');
    }
});



