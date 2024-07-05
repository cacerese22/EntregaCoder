let nombreUsuario = prompt("Bienvenido/a al catalogo de ropa de lujo, para continuar ingrese su nombre:");

while (!nombreUsuario) {
    nombreUsuario = prompt("Por favor ingrese un nombre válido para continuar:");
}

console.log("Hola " + nombreUsuario + ", ¿Qué marca de moda deseas adquirir?");

const marca1 = {
    marca: "GUCCI",
    prenda: "CAMISA DE SEDA CON ESTAMPADO GG",
    color: "GRIS Y BLANCO",
    precio: 1200
}

const marca2 = {
    marca: "BALENCIAGA",
    prenda: "CHAQUETA CON CREMALLERA BALENCIAGA",
    color: "NEGRO",
    precio: 1990
}

const marca3 = {
    marca: "PRADA",
    prenda: "BOLSO BANDOLERA GRANDE DE PIEL",
    color: "CARAMELO",
    precio: 3600
}


const marcas = [marca1, marca2, marca3]

console.log(marcas)

for (const marca of marcas) {
    console.log(marca)
}





function PrendaMasBarata() {
    if (marcas.length === 0) {
        console.log("El catálogo de marcas está vacío.");
        return;
    }

    let prendaMasBarata = marcas[0];

    for (let i = 1; i < marcas.length; i++) {
        if (marcas[i].precio < prendaMasBarata.precio) {
            prendaMasBarata = marcas[i];
        }
    }
    console.log("La prenda más barata en el catálogo es la " + (prendaMasBarata.prenda) +  " de " + (prendaMasBarata.marca) +  " con un precio de $" + (prendaMasBarata.precio));
}
PrendaMasBarata()





function PrendaMasCara() {
    if (marcas.length === 0) {
        console.log("El catálogo de marcas está vacío.");
        return;
    }

    let prendaMasCara = marcas[0];

    for (let i = 1; i < marcas.length; i++) {
        if (marcas[i].precio > prendaMasCara.precio) {
            prendaMasCara = marcas[i];
        }
    }
    console.log("La prenda más cara en el catálogo es " + (prendaMasCara.prenda)+  " de " + (prendaMasCara.marca) + " con un precio de $" + (prendaMasCara.precio));
}
PrendaMasCara()





function MarcasRopa() {
    let buscarmarca = false;
    while (!buscarmarca) {
        let nombremarca = prompt("Elige la marca de ropa que deseas adquirir:");
    // Aquí se podría buscar la marca elegida en el array de marcas
    let marcaElegida = marcas.find(marca => marca.marca.toUpperCase() === nombremarca.toUpperCase());  
    if (marcaElegida) {
        let confirmacion = confirm("¿Estás seguro/a de comprar la prenda " + (marcaElegida.prenda) + " de " + (marcaElegida.marca) +  " por $" + (marcaElegida.precio) + " ? " );
        if (confirmacion) {
            console.log("Compra realizada. Has comprado la prenda " + (marcaElegida.prenda) + " de " + (marcaElegida.marca) + " ¡Que la disfrutes!");
        } else {
            console.log("Cancelaste la compra.");
        }
        buscarmarca = true;
    } else {
        console.log("No encontramos la marca " + (nombremarca)  + " Por favor, elige una marca válida.");
        
    }
}}


MarcasRopa()