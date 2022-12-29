// preentrega 3

class Product { //clase, sin métodos xq se van a usar funciones x fuera
    constructor(id, brand, model, color, category, price, img) /* contructor + (parametros)*/ {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.category = category;
        this.price = price;
        this.img = img;
        this.quantity = 1; //x default siempre la cantidad va a ser 1, no se pide por parametros, p evitar dato repetido
    }
}

// creación de objetos
const bicycle1 = new Product(1, "SBK", "Kansas", "Amarillo", "Mountain Bike", 80000, "../img/productos_bicicleta1.jpg");
const bicycle2 = new Product(2, "SBK", "Chicago", "Rojo", "Mountain Bike", 120000, "../img/productos_bicicleta2.jpg");
const bicycle3 = new Product(3, "Philco", "Duster", "Negro", "Urbana", 105000, "../img/productos_bicicleta3.jpg");
const bicycle4 = new Product(4, "Newton", "Gina", "Rojo", "Mountain Bike", 115000, "../img/productos_bicicleta4.jpg");
const bicycle5 = new Product(5, "Newton", "Elena", "Rosa", "Mountain Bike", 85000, "../img/productos_bicicleta5.jpg");
const bicycle6 = new Product(6, "Stark", "Toscana", "Rojo", "Mountain Bike", 90000, "../img/productos_bicicleta6.jpg");
const bicycle7 = new Product(7, "Stark", "Summer", "Rojo", "Playera", 135000, "../img/productos_bicicleta7.jpg");
const bicycle8 = new Product(8, "Newton", "Ride", "Celeste", "Paseo", 125000, "../img/productos_bicicleta8.jpg");
const bicycle9 = new Product(9, "Stark", "Thunder", "Fucsia", "Mountain Bike", 105000, "../img/productos_bicicleta9.jpg")

// array con todos los productos
const products = [bicycle1, bicycle2, bicycle3, bicycle4, bicycle5, bicycle6, bicycle7, bicycle8, bicycle9]

// array con carrito, inicialmente está vacío
let cart = []

// cargar carrito dsd localStorage
if (localStorage.getItem("cart")){ // si hay algo en el localStorage
    cart = JSON.parse(localStorage.getItem("cart")); //entonces el carrito se va a cargar c lo q encuentre, si da falso va a continuar en carrito en vacío
}

// función p mostrar productos en forma dinámica, se va a usar varias veces
const productContainer = document.getElementById("productContainer") // toma div pral del html

const showProducts = () => { // función flecha que itera sobre array de productos
    products.forEach(product => { // función flecha adentro de productos xq es función de orden superior
        const card = document.createElement("div");
        //card.classList.add("col-xl-3", "col-md-6", "col-xs-12"); sist grillas Boostrap, no se aplica bien
        card.innerHTML = ` 
                        <div class = "card-body">
                            <img src = "${product.img}" class = "card-img-top imgProductos" alt = "${product.brand}">
                            <h4> Bicicleta "<b>${product.brand}</b> ${product.model}" </h4>                            
                            <h5>${product.category.toUpperCase()} </h5>
                            <p><b>Color:</b> ${product.color} <b>• Precio:</b> $${product.price}</p>
                            <button class = "btn colorBoton" id="button${product.id/*cada boton va a tener un id diferente, con esto carrito sabe que producto tomar*/}"><img src = "../img/header_mobile_carrito_blanco.png" class="imgCarrito" alt ="Agregar al carrito"></button>
                        </div>
                        ` // con esto de arriba se agregó una card en el html

        productContainer.appendChild(card) //le indico donde va la card

        // cada botón tiene id único, c evento agrego productos al carrito
        const button = document.getElementById(`button${product.id}`)
        button.addEventListener("click", () => { //evento c función flecha
            addToCart(product.id)
        })
    })
}

// función agregar al carrito, cdo se suma mismo producto cambia la cantidad, no se pone 2 veces el mismo producto 
const addToCart = (id) => {
    const productInCart = cart.find(product => product.id === id) // método q permite verificar si objeto se encuentra en array, es decir si producto ya está en carrito
    if (productInCart) {
        productInCart.quantity++; // si el producto ya está en carrito, incrementa la cantidad
    } else {
        const product = products.find(product => product.id === id) //si producto no está en carrito, lo pushea (agrega)
        cart.push(product)

        //localStorage
        localStorage.setItem("cart", JSON.stringify(cart)); // cada vez q se agregue objeto se pisa el localStorage

    }
    calculateTotal(); //funcion q va sumando total d la compra
}

showProducts();

// mostrar carrito

const cartContainer = document.getElementById("cartContainer")
const checkCart = document.getElementById("checkCart")

checkCart.addEventListener("click", () => { // evento c función flecha
    showCart();
})

// función mostrar carrito
const showCart = () => {
    cartContainer.innerHTML = "";// en vacío, p q no se dupliquen productos cuando se pone mostrar carrito, limpia carrito
    cart.forEach(product => {
        const card = document.createElement("div");
        //card.classList.add("col-xl-3", "col-md-6", "col-xs-12"); sist grillas Boostrap, no se aplica bien
        card.innerHTML = ` 
                        <div class = "card-body">
                            <img src = "${product.img}" class = "card-img-top imgProductos" alt = "${product.brand}">
                            <h4> ${product.brand} ${product.model} • ${product.color} • $${product.price} </h4>                          
                            <p>Cantidad:<b> ${product.quantity} </b></p> 
                            <button class = "btn colorBoton" id="eliminar${product.id/*cada boton va a tener un id diferente, con esto carrito sabe que producto tomar*/}">Eliminar</button>
                        </div>
                        ` // se agregó cantidad en ver carrito, y se reemplazó botón "Agregar al carrito" por "Eliminar"

        cartContainer.appendChild(card); //le indico donde va la card

        //eliminar productos del carrito

        const button = document.getElementById(`eliminar${product.id}`);
        button.addEventListener("click", () => {
            removeFromCart(product.id); //funcion p eliminar
        })
    })
    calculateTotal(); //funcion q va sumando total d la compra
}

// función q elimina producto d carrito

const removeFromCart = (id) => {
    const product = cart.find(product => product.id === id); //busca producto cuyo id q sea estrictamente igual al q viene x parametro d la función
    const index = cart.indexOf(product);
    cart.splice(index, 1); // le paso indice y la cantidad d veces que quiero eliminar (es decir 1)

    //actualizar carrito dps d eliminar producto

    showCart();

    //localStorage
    localStorage.setItem("cart", JSON.stringify(cart)); //p cdo eliminamos

}

//vaciar carrito

const emptyCart = document.getElementById("emptyCart")

emptyCart.addEventListener("click", () => {
    deleteCart(); // función p eliminar carrito
})

const deleteCart = () => {
    cart = [];
    showCart();

     //localStorage
     localStorage.clear("cart", JSON.stringify(cart)); //p cdo vacianos q elimine todo el storage
}

// calcula total

const total = document.getElementById("total")

const calculateTotal = () => {
    let totalShop = 0;
    cart.forEach(product => {
        totalShop += product.price * product.quantity;
    })
    total.innerHTML = ` $${totalShop}`;
}
