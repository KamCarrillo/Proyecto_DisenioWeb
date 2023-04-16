const pantalla = document.querySelector('.almacen');
    const prod=['Sabritas','ruffles','Chips','takis']
    const columna=[];
    var n;
    var precio_Prod;
    var code;
    for(i=0;i<4;i++){
        n=Math.floor(Math.random() * 4);
        if (columna.includes(n)){
            i-=1;
        }
        else{
            columna[i]=n
        }
    }

    let html = ''
    for(i=0;i<4;i++){
        html += '<section class="producto">'
        for(j=0;j<6;j++){
            switch(columna[i]){
                case 0:
                    precio_Prod=' $20.00'
                    code=1
                    break;
                case 1:
                    precio_Prod=' $34.50'
                    code=7
                    break;
                case 2:
                    code=13
                    precio_Prod=' $20.50'
                    break;
                case 3:
                    code=19
                    precio_Prod=' $20.50'
                    break;
            }
            code=code+j
            html += `<div>
            <img class="producto-img" src="/Recursos/${prod[columna[i]]}.png" alt="Producto 6"><br>
            <p class="sticker">`
            if(code<10){
            html +=`A0${code}<span>  ${precio_Prod}</span></p>
            </div>` ;}
            else{
                html +=`A${code}<span>  ${precio_Prod}</span></p>
            </div>`;
            }
        }
        html += '</section><div class="sticker-precio"></div>'
    };

pantalla.innerHTML = html;