const productos = [{
    id: 1,
    nombre: "T-BONE",
    categoria: "RES",
},
{
    id: 2,
    nombre: "SIRLON",
    categoria: "RES",
},
{
    id: 3,
    nombre: "RIB EYE",
    categoria: "RES",

},
{
    id: 4,
    nombre: "NEW YORK",
    categoria: "RES",
},
];

// Ahora dibujamos la tabla
const $cuerpoTabla = document.querySelector("#cuerpoTabla");
// Recorrer todos los productos
productos.forEach(producto => {
// Crear un <tr>
const $tr = document.createElement("tr");
// Creamos el <td> de nombre y lo adjuntamos a tr
let $tdNombre = document.createElement("td");
$tdNombre.textContent = producto.nombre; // el textContent del td es el nombre
$tr.appendChild($tdNombre);
// El td de precio
let $tdCategoria = document.createElement("td");
$tdCategoria.textContent = producto.categoria;
$tr.appendChild($tdCategoria);
// Finalmente agregamos el <tr> al cuerpo de la tabla
$cuerpoTabla.appendChild($tr);
// Y el ciclo se repite hasta que se termina de recorrer todo el arreglo
});