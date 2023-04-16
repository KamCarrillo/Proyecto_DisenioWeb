const numeros = [];
const data = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16'];
const price =[20.0,34.5,20.5];

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
        imprimirHTML(numeros)
    }
});

function imprimirHTML(numeros) {
    const pantalla = document.querySelector('.pantalla');
    if(numeros.length>1){
        let html = 'Producto: A ';
        for(i=0;i<2;i++){
            html += `${numeros[i]} `;
        };
        html += '<br>Costo: $';
        p1=String(numeros[0])
        p2=String(numeros[1])
        code=p1+p2
        for(i=0;i<4;i++){
            if(code==data[i]){
                html += `${price[0]} `;
            }
        };
        for(i=4;i<8;i++){
            if(code==data[i]){
                html += `${price[1]} `;
            }
        };
        for(i=8;i<16;i++){
            if(code==data[i]){
                html += `${price[2]} `;
            }
        };
        html += '</br>';
        numeros.length = 0;
        pantalla.innerHTML = html;
    }
    else{
        let html = 'Producto: <br>Costo: </br>';
        pantalla.innerHTML = html;
    }
}