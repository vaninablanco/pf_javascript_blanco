class Producto { /*clase*/
    constructor(id, marca, modelo, color, categoria, precio, img) /* contructor + (parametros)*/ {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.categoria = categoria;
        this.precio = precio;
        this.img = img;
    }
}

const bicicleta1 = new Producto(1, "SBK", "Kansas", "Amarillo", "Mountain Bike", 80000, "../img/productos_bicicleta1.jpg");
const bicicleta2 = new Producto(2, "SBK", "Chicago", "Rojo", "Mountain Bike", 120000, "../img/productos_bicicleta2.jpg");
const bicicleta3 = new Producto(3, "Philco", "Duster", "Negro", "Urbana", 105000, "../img/productos_bicicleta3.jpg");
const bicicleta4 = new Producto(4, "Newton", "Gina", "Rojo", "Mountain Bike", 115000, "../img/productos_bicicleta4.jpg");
const bicicleta5 = new Producto(5, "Newton", "Elena", "Rosa", "Mountain Bike", 85000, "../img/productos_bicicleta5.jpg");
const bicicleta6 = new Producto(6, "Stark", "Toscana", "Rojo", "Mountain Bike", 90000, "../img/productos_bicicleta6.jpg");
const bicicleta7 = new Producto(7, "Stark", "Summer", "Rojo", "Playera", 135000, "../img/productos_bicicleta7.jpg");
const bicicleta8 = new Producto(8, "Newton", "Ride", "Celeste", "Paseo", 125000, "../img/productos_bicicleta8.jpg");
const bicicleta9 = new Producto(9, "Stark", "Thunder", "Fucsia", "Mountain Bike", 105000, "../img/productos_bicicleta9.jpg")

// array con todos los productos
const productos = [bicicleta1, bicicleta2, bicicleta3, bicicleta4, bicicleta5, bicicleta6, bicicleta7, bicicleta8, bicicleta9]

// array con carrito, inicialmente está vacío
let carrito = []

console.log(productos)

// función p mostrar productos en forma dinamica, se va a usar varias veces

const contenedorProductos = document.getElementById("contenedorProductos") // toma div pral

const mostrarProductos = () => { // función flecha que itera sobre array de productos
    productos.forEach(producto => { // función flecha adentro de productos xq es función de orden superior
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-xs-12");
        card.innerHTML = `
                        <div> 
                            <img src = "${producto.img}" class = "card-img-top imgProductos alt = "${producto.marca}">
                            <div class = "card-body">
                            <h4> Bicicleta "${producto.marca}" </h4>
                            <h5> Modelo: "${producto.modelo}" </h5>
                            <h5> Color: ${producto.color} </h5>
                            <h6>${producto.categoria} </h5>
                            <p>Precio: $${producto.precio}</P>
                            <button class = "btn colorBoton" id="boton${producto.id}">Agregar al carrito</button>
                            </div>
                        </div>`
        contenedorProductos.appendChild(card);
    })
}

mostrarProductos();




/*// stock con array de objetos
let products = [
    { id: 1, brand: "Stark", model: "Thunder", color: "Roja", category: "Mountain Bike", price: 80000, img:},
    { id: 2, brand: "Stark", model: "Fusion", color: "Violeta", category: "Playera", price: 120000, img:},
    { id: 3, brand: "Stark", model: "Duster", color: "Negra", category: "Urbana", price: 105000, img:},
    { id: 4, brand: "Newton", model: "Gina", color: "Violeta", category: "Playera", price: 115000, img:},
    { id: 5, brand: "Newton", model: "Elena", color: "Naranja", category: "Urbana", price: 85000, img:},
    { id: 6, brand: "Philco", model: "Toscana", color: "Amarilla", category: "Paseo", price: 90000, img:},
    { id: 7, brand: "Philco", model: "Battle", color: "Negra", category: "Mountain Bike", price: 135000, img:},
    { id: 8, brand: "SBK", model: "Kansas", color: "Negra", category: "Paseo", price: 125000, img:},
    { id: 9, brand: "SBK", model: "Chicago", color: "Verde", category: "Urbana", price: 105000, img:}    
]

// preentrega 3

let container = document.getElementById("productContainer") // ahora la var "container" es igual al elemento tomado por ID
console.log(container.innerHTML)

for (const product of products) { // ahora la constante "product" es igual al recorrido del array "products" 
    container.innerHTML = container.innerHTML + `<div>${product.brand}</div>` // ahora la var "container" va a tener como contenido "brand" del array  
}


/* preentrega 2
// variables con filtros de búsqueda
let filterPrice = "• 01 → por Precio"
let filterModel = "• 02 → por Modelo"
let filterCategory = "• 03 → por Categoría"

// pedido de tipo de filtro
let filter = parseInt(prompt("Bienvenido a 🚲 BICICLETERÍA SCARANO 🚲\n\nPor favor, indique que como desea realizar su búsqueda de bicicleta:\n\n" + filterPrice + "\n" + filterModel  + "\n" + filterCategory));
console.log(filter)

// declaración de función - si tipean una opción mal
function escape(){
    alert("Por favor, presione ESC para volver a las opciones.")
    console.log("Por favor, presione ESC para volver a las opciones.")    
}

// aplicación de filtros
if (filter === 1) { // filtro por precio, se usará "filter", para filtrar los rangos     
    let amount = parseInt(prompt("Su búsqueda será: " + filterPrice + "\n\nIndique el rango deseado:\n• 01 - $50.000 a $100.000 \n• 02 - $100.000 a $200.000")); 
    console.log(amount)    
    if (amount === 1) {         
        let byPrice = stock.filter(bicycle => bicycle.price < 100000)
        let message = "Los modelos disponibles en ese rango son: \n\n"
        for (const bicycle of byPrice) {
            message = message + "• Bicicleta '" + bicycle.brand + " " + bicycle.model.toUpperCase() + "' " + bicycle.color.toLowerCase() + " - " + bicycle.category + " a $" + bicycle.price + "\n"
        }
    console.log(byPrice);
    alert(message); 
    }else if (amount === 2){               
        let byPrice = stock.filter(bicycle => bicycle.price > 100000)
        let message = "Los modelos disponibles en ese rango son: \n\n"
        for (const bicycle of byPrice) {
            message = message + "• Bicicleta '" + bicycle.brand + " " + bicycle.model.toUpperCase() + "' " + bicycle.color.toLowerCase() + " - " + bicycle.category + " a $" + bicycle.price + "\n"
        }    
    console.log(byPrice);
    alert(message);
    }else{
        escape()
    }
}else if (filter === 2) { // filtro por modelo, se usará "find", por ser un valor único que no se repite     
    let byModel = prompt("Su búsqueda será: " + filterModel + "\n\nIndique el modelo de bicicleta que desea encontrar:");
    console.log(byModel)
    // modelos disponibles para probar en prompt: Thunder, Fusion, Duster, Gina, Elena, Toscana, Battle, Kansas, Chicago y Nevada
    if (modelSearch = stock.find(bicycle => bicycle.model.trim().toUpperCase() === byModel.trim().toUpperCase())){
        alert("• El modelo '" + modelSearch.brand + " " + byModel.trim().toUpperCase() + "' " + modelSearch.color + " - " + modelSearch.category + " a $" + modelSearch.price + " está disponible.\n")  
        console.log(modelSearch)       
    }else{
        alert("El modelo '" + byModel.trim().toUpperCase() + "' no está disponible")
    }
}else if (filter === 3) {  
    let message = ""
    console.log(message)
    stock.forEach(bicycle => {
        message = message + " " + bicycle.category + " - '" + bicycle.brand + " " + bicycle.model.toUpperCase() + "'\n"
        })
    alert ("• Los modelos por categoría son:\n\n" + message)
}else{      
    escape()
} */