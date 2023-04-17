function obtenerDatosJSON(ruta) {
    return fetch(ruta)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error al obtener los datos del archivo JSON:', error);
        });
}

window.onload = function () {
    const productos =[
        {
            "nombre": "SABRITAS",
            "tipo": "PAPAS",
            "codigo": "131233",
            "precio": "10",
            "cantidad": "10"
        },
        {
            "nombre": "CHIPS",
            "tipo": "PAPAS",
            "codigo": "123213",
            "precio": "10",
            "cantidad": "6"
        },
        {
            "nombre": "TAKIS",
            "tipo": "PAPAS",
            "codigo": "324234",
            "precio": "10",
            "cantidad": "30"
        },
        {
            "nombre": "RUFFLES",
            "tipo": "PAPAS",
            "codigo": "234234",
            "precio": "10",
            "cantidad": "20"
        },
        {
            "nombre": "COCA",
            "tipo": "REFRESCO",
            "codigo": "234934",
            "precio": "15",
            "cantidad": "23"
        },
        {
            "nombre": "PEPSI",
            "tipo": "REFRESCO",
            "codigo": "434234",
            "precio": "15",
            "cantidad": "20"
        },
        {
            "nombre": "SKITTLES",
            "tipo": "DULCE",
            "codigo": "287234",
            "precio": "18",
            "cantidad": "14"
        },
        {
            "nombre": "EMINEMS",
            "tipo": "DULCE",
            "codigo": "230234",
            "precio": "18",
            "cantidad": "21"
        }
    ];

    const tabla = document.getElementById("table").getElementsByTagName("tbody")[0];

    for (let i = 0; i < productos.length; i++) {
        let fila = tabla.insertRow(-1);
        let num = fila.insertCell(0);
        let nombre = fila.insertCell(1);
        let tipo = fila.insertCell(2);
        let codigo = fila.insertCell(3);
        let precio = fila.insertCell(4);
        let cantidad = fila.insertCell(5);


        num.innerHTML = i + 1;
        nombre.innerHTML = productos[i].nombre;
        tipo.innerHTML = productos[i].tipo;
        codigo.innerHTML = productos[i].codigo;
        precio.innerHTML = "$" + productos[i].precio;
        cantidad.innerHTML = (50 / (i + 5) - 1).toFixed(0);
    }
}