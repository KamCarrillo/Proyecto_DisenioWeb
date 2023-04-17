function ProductosInput() {
    const nombre = document.getElementById("nombre").value;
    const tipo = document.getElementById("tipo").value;
    const codigo = document.getElementById("codigo").value;
    const precio = document.getElementById("precio").value;
  
    if (nombre !== '' && tipo !== '' && codigo !== '' && precio !== '') {
        const productos = [nombre, tipo, codigo, precio];

        console.log(productos);    
    }
    else{
        alert('Formulario incompleto');
    }
}
ProductosInput()