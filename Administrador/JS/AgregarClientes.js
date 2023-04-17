window.onload = function () {
    const clientes =[
    {
        "nombre": "Juan",
        "usuario": "Admin"
    },
    {
        "nombre": "Maria",
        "usuario": "Cliente"
    },
    {
        "nombre": "Carlos",
        "usuario": "Admin"
    },
    {
        "nombre": "Ana",
        "usuario": "Cliente"
    },
    {
        "nombre": "Pedro",
        "usuario": "Admin"
    },
    {
        "nombre": "Luis",
        "usuario": "Cliente"
    },
    {
        "nombre": "Sofia",
        "usuario": "Admin"
    },
    {
        "nombre": "Laura",
        "usuario": "Cliente"
    },
    {
        "nombre": "Mario",
        "usuario": "Admin"
    },
    {
        "nombre": "Jorge",
        "usuario": "Cliente"
    }
];
const tabla = document.getElementById("table").getElementsByTagName("tbody")[0];
    for (let i = 0; i < clientes.length; i++) {
        let fila = tabla.insertRow(-1);
        let num = fila.insertCell(0);
        let nombre = fila.insertCell(1);
        let usuario = fila.insertCell(2);

        num.innerHTML = i + 1;
        nombre.innerHTML = clientes[i].nombre;
    usuario.innerHTML = clientes[i].usuario;
    }
}