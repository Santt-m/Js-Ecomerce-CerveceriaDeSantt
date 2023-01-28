// Contenedor de productos
// Aca es a donde voy a mandar los productos para que se muesren (por eso tiene que coincidir la class)
const products = document.querySelector(".section-pruductos-cont-cards");


// Esta funcion va a inyectar las card con sus datos tomados del array de productos

const renderProduct = (product) => {
    // voy a crear otra const para traer los datos del array "productList" para tomar los datos mas facil
    const {id, tipo, marca, embase, color, capacidad, retornable, precio, cardimg, descripcion, abv, ibu, background} = product
    return `
    <div class="productos-card">
        <img class="card-img" src="${cardimg}" alt="imagen del producto: ${embase} ${marca} ${color} ${capacidad} mililitros.">
        <div class="productos-card-txt-body">
            <h4>${embase} ${capacidad}ml ${color}</h4>
            <div class="productos-card-txt-info">
                <p class="card-marca">${marca}</p>
                <p class="card-precio">$ ${precio}</p>
                <div class="productos-card-txt-data">
                    <p class="card-embase">${embase}</p>
                    <p class="card-capacidad">${capacidad}ml</p>
                </div>
                <p class="card-descripcion">${descripcion}</p>
                <div class="card-cont-ibu">
                    <p class="card-ABV">ABV: ${abv}</p>
                    <p class="card-IBU">IBU: ${ibu}</p>
                </div>
            </div>
        <a class="card-btn-add" href="#">Agregar 💸</a>
        </div>
    </div>
`;
}

/* renderizador de productos divididos */

const renderDividedProducts = (index = 0) => {
    // importante de poner += que esto concatena y no pisa la informacion
    // Porque "innerHTML" reemplaza el contenido HTML actual del elemento con el valor especificado.
    // por lo tanto si asignamos = lo va a reemplazar y si ponemos += va agregar
    products.innerHTML += productsController.dividedProducts[index].map(renderProduct).join("")
};

const renderFilteredProducts = (tipo)=>{
    const productList = productsData.filter((product) => {
        return product.tipo === tipo
    })
    products.innerHTML = productList.map(renderProduct).join("")
}

/* Renderizado de productos */

const renderProducts = (index = 0, category = undefined) => {
/* category quizas haya que cambiarlo a "tipo" por el nombre en el array para filtrar los productos */
    if(tipo){
        renderDividedProducts(index);
        return;
    }
    renderFilteredProducts(tipo);
};

const init = () => {
    renderProducts();
};

init();