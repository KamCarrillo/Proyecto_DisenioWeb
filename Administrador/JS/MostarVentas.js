window.onload = function () {
    const ventas = [
        {
            "producto": "Doritos",
            "cantidad": 20,
            "precio": "$ 10,000"
        },
        {
            "producto": "Cheetos",
            "cantidad": 15,
            "precio": "$ 7,500"
        },
        {
            "producto": "Papas Fritas",
            "cantidad": 30,
            "precio": "$ 12,500"
        },
        {
            "producto": "Ruffles",
            "cantidad": 25,
            "precio": "$ 13,000"
        },
        {
            "producto": "Churrumais",
            "cantidad": 10,
            "precio": "$ 5,000"
        },
        {
            "producto": "Sabritas",
            "cantidad": 35,
            "precio": "$ 14,500"
        },
        {
            "producto": "Chips de Maíz",
            "cantidad": 50,
            "precio": "$ 15,000"
        },
        {
            "producto": "Cacahuates Japoneses",
            "cantidad": 8,
            "precio": "$ 6,500"
        },
        {
            "producto": "Tostitos",
            "cantidad": 40,
            "precio": "$ 11,000"
        },
        {
            "producto": "Papas Preparadas",
            "cantidad": 18,
            "precio": "$ 9,000"
        }
    ];
    const tabla = document.getElementById("table").getElementsByTagName("tbody")[0];
    for (let i = 0; i < ventas.length; i++) {
        let fila = tabla.insertRow(-1);
        let num = fila.insertCell(0);
        let producto = fila.insertCell(1);
        let cantidad = fila.insertCell(2);
        let precio = fila.insertCell(3);

        num.innerHTML = i + 1;
        producto.innerHTML = ventas[i].producto;
        cantidad.innerHTML = ventas[i].cantidad;
        precio.innerHTML = ventas[i].precio;
    }
}