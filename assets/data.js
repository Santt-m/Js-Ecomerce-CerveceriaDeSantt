/* 
descripcion base de datos:

        id: 1, --------------= identificador unico
        tipo:"", ------------= industrial, artesanal, premium, vino o espumante
        marca:"", -----------= marca por ejemplo quilmes, heineken, etc
        embase:"", ----------= lata, botella, etc
        color:"", -----------= color de la bebida (ejemplo rubia, roja,negra, ipa, etc)
        capacidad: ----------= cantidad de militros del producto
        retornable: false, --= boolean true para retornable o false para no retornable
        precio: 1, ----------= precio
        cardimg: "", --------= url de la imagen a mostrar en la card
        descripcion: "", ----= descripcion del producto
        abv: 00, ------------= cantidad de alcohol de la bebida
        ibu: 00, ------------= amargor
        background: "" ------= color de la card

*/

// []

const productList = [
    {
        id: 0,
        tipo:"artesanal",
        marca:"Santt",
        embase:"lata",
        color: "red",
        capacidad: 472,
        retornable: false,
        precio: 1,
        
        cardimg: "",

        descripcion:"",
        abv: 00,
        ibu: 00,

        background: "white",
    },
    /* Cervezas */
        /* Marca andes */
    {
        id: 1,
        tipo:"industrial",
        marca:"Andes",
        embase:"Lata",
        color: "Ipa",
        capacidad: 473,
        retornable: false,
        precio: 360,
        
        cardimg: "./assets/img/productos/andes/industrial-andes-ipa-lata473m.png",

        descripcion:"La Andes Origen IPA Andina es un gustito de amargo intenso con un leve dulzor para equilibrar, notas a cereal, levadura y un toque ácido al final.        Esta cerveza de dorado brillante y sabor intenso tiene aromas herbales con ésteres y apenas levadura.",
        abv: 4.5,
        ibu: 35,

        background: "white",
    },
    {
        id: 2,
        tipo:"industrial",
        marca:"Andes",
        embase:"Lata",
        color: "negra",
        capacidad: 473,
        retornable: false,
        precio: 360,
        
        cardimg: "./assets/img/productos/andes/industrial-andes-negra-lata473m.png",

        descripcion:"La Andes Origen Negra es un gustito de cuerpo intenso y color negro profundo. Que tenga malta tostada no es algo para pasar por alto, se siente en el sabor y en el aroma, donde también puede identificar algo de lúpulo. Para completar el disfrute en su boca, se va a sorprender con un sabor armonioso, una leve acidez y un suave dulzor para compensar el amargor.",
        abv: 5.3,
        ibu: 20,

        background: "white",
    },
    {
        id: 3,
        tipo:"industrial",
        marca:"Andes",
        embase:"Lata",
        color: "Roja",
        capacidad: 473,
        retornable: false,
        precio: 360,
        
        cardimg: "./assets/img/productos/andes/industrial-andes-roja-lata473ml.png",

        descripcion:"Está hecha con tres maltas, entre ellas la malta Caramelo que además de darle un aroma suave y sabor balanceado, la visten de un color ámbar cobrizo. Al probarla va a notar una leve acidez con final seco, el amargor justo y un cuerpo intenso.",
        abv: 5.1,
        ibu: 18,

        background: "white",
    },
    {
        id: 4,
        tipo:"industriales",
        marca:"Andes",
        embase:"Lata",
        color: "Rubia",
        capacidad: 473,
        retornable: false,
        precio: 360,
        
        cardimg: "./assets/img/productos/andes/industrial-andes-rubia-lata473ml.png",

        descripcion:"La Andes Origen Rubia es una cerveza para disfrutar, de sabor maltoso, amargo medio, con notas de cereal y levadura. Está hecha con maltas Pilsen y Munich, una es medio ácida y la otra dulzona, pero ninguna podría vivir sin la otra. Esta Rubia de dorado brillante y cuerpo medio, brinda aromas variados y acompasados: apenas algo de lúpulo, un poco de cereal, ésteres y levadura.",
        abv: 5.1,
        ibu: 16,

        background: "white",
    },
        /* marcas artesanales */
    {
            id: 5,
            tipo:"artesanal",
            marca:"Baba",
            embase:"Lata",
            color: "Ipa",
            capacidad: 473,
            retornable: false,
            precio: 600,
            
            cardimg: "./assets/img/productos/artesanales/baba-ipa-lata.png",
    
            descripcion:"",
            abv: 00,
            ibu: 00,
    
            background: "white",
    },
    {
            id: 6,
            tipo:"artesanal",
            marca:"Japi",
            embase:"Lata",
            color: "Ipa",
            capacidad: 473,
            retornable: false,
            precio: 990,
            
            cardimg: "./assets/img/productos/artesanales/japi-ipa-lata-473ml.png",
    
            descripcion:"LA QUE CHUPA EL BANANERO! UNA IPA REFRESCANTE QUE SAPE!! SI TE GUSTA TOMAR CERVEZA Y TOMARTE LA VIDA CON HUMOR, CHUPATE UNA O VARIAS JÀPI! SALUTEE!!",
            abv: 5.2,
            ibu: 55,
    
            background: "white",
    },
    {
            id: 7,
            tipo:"artesanal",
            marca:"Japi",
            embase:"Lata",
            color: "Roja",
            capacidad: 473,
            retornable: false,
            precio: 990,
            
            cardimg: "./assets/img/productos/artesanales/japi-roja-lata-473ml.png",
    
            descripcion:"LA QUE CHUPA EL BANANERO! UNA COLORADA REFRESCANTE QUE SAPE!! SI TE GUSTA TOMAR CERVEZA Y TOMARTE LA VIDA CON HUMOR, CHUPATE UNA O VARIAS JÀPI! SALUTEE!!",
            abv: 5.1,
            ibu: 18,
    
            background: "white",
    },
    {
            id: 8,
            tipo:"artesanal",
            marca:"Japi",
            embase:"Lata",
            color: "Lager",
            capacidad: 473,
            retornable: false,
            precio: 990,
            
            cardimg: "./assets/img/productos/artesanales/japi-roja-lata-473ml.png",
    
            descripcion:"LA QUE CHUPA EL BANANERO! UNA LAGER BEER REFRESCANTE QUE SAPE!! SI TE GUSTA TOMAR CERVEZA Y TOMARTE LA VIDA CON HUMOR, CHUPATE UNA O VARIAS JÀPI! SALUTEE!!",
            abv: 4.5,
            ibu: 16,
    
            background: "white",
    },
    {
            id: 9,
            tipo:"artesanal",
            marca:"Peñon del aguila",
            embase:"Lata",
            color: "Mexican Lager",
            capacidad: 473,
            retornable: false,
            precio: 660,
            
            cardimg: "./assets/img/productos/artesanales/peñonDelAguila-lata-mexicanLager.png",
    
            descripcion:"Liviana, ligera y fácil de tomar, posee entre sus ingredientes trigo y sémola de maíz lo que le aporta un dulzor interesante, perceptible en boca pero que no empalaga.",
            abv: 4.5,
            ibu: 16,
    
            background: "white",
    },
    {
        id: 10,
        tipo:"artesanal",
        marca:"Peñon del aguila",
        embase:"Lata",
        color: "Honney",
        capacidad: 473,
        retornable: false,
        precio: 660,

        cardimg: "./assets/img/productos/artesanales/peñonDelAguila-lata-miel.png",

        descripcion:"Liviana, ligera y fácil de tomar, posee entre sus ingredientes trigo y sémola de maíz lo que le aporta un dulzor interesante, perceptible en boca pero que no empalaga.",
        abv: 4.5,
        ibu: 16,

        background: "white",
    },
        /* Marca Corona */
    {
        id: 11,
        tipo:"industrial",
        marca:"Corona",
        embase:"vidrio",
        color: "Lager",
        capacidad: 330,
        retornable: false,
        precio: 450,

        cardimg: "./assets/img/productos/corona/industrial-corona-330ml.png",

        descripcion:"",
        abv: 4.5,
        ibu: 16,

        background: "white",
    },
    {
        id: 12,
        tipo:"industrial",
        marca:"Corona",
        embase:"Lata",
        color: "Lager",
        capacidad: 269,
        retornable: false,
        precio: 550,

        cardimg: "./assets/img/productos/corona/industrial-corona-lata-269ml.png",

        descripcion:"",
        abv: 4.5,
        ibu: 16,

        background: "white",
    },
        /* Marca Guinness */
    {
            id: 13,
            tipo:"industrial",
            marca:"Guinness",
            embase:"Lata",
            color: "Extra Stout",
            capacidad: 473,
            retornable: false,
            precio: 660,
    
            cardimg: "./assets/img/productos/guinness/industrial-Guinness-negra-lata-473m.png",
    
            descripcion:"",
            abv: 4.5,
            ibu: 16,
    
            background: "white",
    },
    {
            id: 14,
            tipo:"industrial",
            marca:"Guinness",
            embase:"Lata",
            color: "Draught Stout",
            capacidad: 440,
            retornable: false,
            precio: 660,
    
            cardimg: "./assets/img/productos/guinness/industrial-Guinness-nitrogenada-lata-440ml.png",
    
            descripcion:"",
            abv: 4.5,
            ibu: 16,
    
            background: "white",
    },
        /* Marca Heineken */
    {
        id: 15,
        tipo:"industrial",
        marca:"Heineken",
        embase:"Vidrio",
        color: "Lager",
        capacidad: 1000,
        retornable: false,
        precio: 750,
    
        cardimg: "./assets/img/productos/heineken/industrial-heineken-rubia-botella-1lts.png",
    
        descripcion:"",
        abv: 4.5,
        ibu: 16,
    
        background: "white",
    },
    {
        id: 16,
        tipo:"industrial",
        marca:"Heineken",
        embase:"Lata",
        color: "Lager",
        capacidad: 473,
        retornable: false,
        precio: 590,
    
        cardimg: "./assets/img/productos/heineken/industrial-heineken-rubia-lata-473ml.png",
    
        descripcion:"",
        abv: 4.5,
        ibu: 16,
    
        background: "white",
    },
        /*Marca Imperial */
    {
            id: 17,
            tipo:"industrial",
            marca:"Imperial",
            embase:"Lata",
            color: "APA",
            capacidad: 473,
            retornable: false,
            precio: 550,
        
            cardimg: "./assets/img/productos/imperial/industrial-imperial-apa-lata-473ml.png",
        
            descripcion:"",
            abv: 4.5,
            ibu: 16,
        
            background: "white",
    },
    {
            id: 18,
            tipo:"industrial",
            marca:"Imperial",
            embase:"Lata",
            color: "Golden",
            capacidad: 473,
            retornable: false,
            precio: 550,
        
            cardimg: "./assets/img/productos/imperial/industrial-imperial-golden-lata-473ml.png",
        
            descripcion:"",
            abv: 4.5,
            ibu: 16,
        
            background: "white",
    },
    {
        id: 19,
        tipo:"industrial",
        marca:"Imperial",
        embase:"Lata",
        color: "Ipa",
        capacidad: 473,
        retornable: false,
        precio: 550,

        cardimg: "./assets/img/productos/imperial/industrial-imperial-ipa-lata-473ml.png",
        
        descripcion:"",
        abv: 4.5,
        ibu: 16,
        
        background: "white",
    },
    {
        id: 20,
        tipo:"industrial",
        marca:"Imperial",
        embase:"Vidrio",
        color: "Lager",
        capacidad: 1000,
        retornable: false,
        precio: 990,

        cardimg: "./assets/img/productos/imperial/industrial-imperial-lager-botella-1lts.png",
        
        descripcion:"",
        abv: 4.5,
        ibu: 16,
        
        background: "white",
    },
    {
        id: 21,
        tipo:"industrial",
        marca:"Imperial",
        embase:"Lata",
        color: "Roja",
        capacidad: 473,
        retornable: false,
        precio: 550,

        cardimg: "./assets/img/productos/imperial/industrial-imperial-roja-lata-473ml.png",
        
        descripcion:"",
        abv: 4.5,
        ibu: 16,
        
        background: "white",
    },
    {
        id: 22,
        tipo:"industrial",
        marca:"Imperial",
        embase:"Lata",
        color: "Lager",
        capacidad: 473,
        retornable: false,
        precio: 550,

        cardimg: "./assets/img/productos/imperial/industrial-imperial-rubia-lata-473ml.png",
        
        descripcion:"",
        abv: 4.5,
        ibu: 16,
        
        background: "white",
    },
        /* Marca Quilmes */
    {
        id: 23,
        tipo:"industrial",
        marca:"Quilmes",
        embase:"Vidrio",
        color: "Lager",
        capacidad: 1000,
        retornable: true,
        precio: 800,

        cardimg: "./assets/img/productos/quilmes/industrial-quilmes-botella-1lts.png",

        descripcion:"",
        abv: 4.5,
        ibu: 16,

        background: "white",
    },
    {
            id: 24,
            tipo:"industrial",
            marca:"Quilmes",
            embase:"Vidrio",
            color: "Lager",
            capacidad: 340,
            retornable: false,
            precio: 450,
    
            cardimg: "./assets/img/productos/quilmes/industrial-quilmes-botella-340ml.png",
    
            descripcion:"",
            abv: 4.5,
            ibu: 16,
    
            background: "white",
    },
    {
            id: 25,
            tipo:"industrial",
            marca:"Quilmes",
            embase:"Lata",
            color: "Lager",
            capacidad: 473,
            retornable: false,
            precio: 450,
    
            cardimg: "./assets/img/productos/quilmes/industrial-quilmes-lata-473ml.png",
    
            descripcion:"",
            abv: 4.5,
            ibu: 16,
    
            background: "white",
    },
    {
        id: 26,
        tipo:"industrial",
        marca:"Quilmes",
        embase:"Lata",
        color: "Stout",
        capacidad: 473,
        retornable: false,
        precio: 450,
    
        cardimg: "./assets/img/productos/quilmes/industrial-quilmes-negra-lata-473ml.png",
    
        descripcion:"",
        abv: 4.5,
        ibu: 16,
    
        background: "white",
    },
    /* Cervezas Premium propias */
    {
        id: 27,
        tipo:"Artesanal",
        marca:"Santt's beer",
        embase:"Lata",
        color: "Lager",
        capacidad: 473,
        retornable: false,
        precio: 550,
    
        cardimg: "./assets/img/productos/premium/premium-lata-lager-473.png",
    
        descripcion:"",
        abv: 4.5,
        ibu: 16,
    
        background: "white",
    },
    {
        id: 28,
        tipo:"Artesanal",
        marca:"Santt's beer",
        embase:"Lata",
        color: "Roja",
        capacidad: 473,
        retornable: false,
        precio: 550,
    
        cardimg: "./assets/img/productos/premium/premium-lata-roja.png",
    
        descripcion:"",
        abv: 4.5,
        ibu: 16,
    
        background: "white",
    },
    {
        id: 29,
        tipo:"Artesanal",
        marca:"Santt's beer",
        embase:"Lata",
        color: "Honey",
        capacidad: 473,
        retornable: false,
        precio: 550,
    
        cardimg: "./assets/img/productos/premium/premium-lata-honey.png",
    
        descripcion:"",
        abv: 4.5,
        ibu: 16,
    
        background: "white",
    },
    {
        id: 30,
        tipo:"Artesanal",
        marca:"Santt's beer",
        embase:"Lata",
        color: "IPA",
        capacidad: 473,
        retornable: false,
        precio: 550,
    
        cardimg: "./assets/img/productos/premium/premium-lata-ipa.png",
    
        descripcion:"",
        abv: 4.5,
        ibu: 16,
    
        background: "white",
    },
    {
        id: 31,
        tipo:"Artesanal",
        marca:"Santt's beer",
        embase:"Vidrio",
        color: "Lager",
        capacidad: 550,
        retornable: false,
        precio: 750,
    
        cardimg: "./assets/img/productos/premium/premium-botella-lager.png",
    
        descripcion:"",
        abv: 4.5,
        ibu: 16,
    
        background: "white",
    },
    {
        id: 32,
        tipo:"Artesanal",
        marca:"Santt's beer",
        embase:"Vidrio",
        color: "Roja",
        capacidad: 550,
        retornable: false,
        precio: 750,
    
        cardimg: "./assets/img/productos/premium/premium-botella-roja.png",
    
        descripcion:"",
        abv: 4.5,
        ibu: 16,
    
        background: "white",
    },
    {
        id: 33,
        tipo:"Artesanal",
        marca:"Santt's beer",
        embase:"Vidrio",
        color: "Honey",
        capacidad: 550,
        retornable: false,
        precio: 750,
    
        cardimg: "./assets/img/productos/premium/premium-botella-honey.png",
    
        descripcion:"",
        abv: 4.5,
        ibu: 16,
    
        background: "white",
    },
    {
        id: 34,
        tipo:"Artesanal",
        marca:"Santt's beer",
        embase:"Vidrio",
        color: "APA",
        capacidad: 550,
        retornable: false,
        precio: 750,
    
        cardimg: "./assets/img/productos/premium/premium-botella-APA.png",
    
        descripcion:"",
        abv: 4.5,
        ibu: 16,
    
        background: "white",
    },
    {
        id: 35,
        tipo:"Artesanal",
        marca:"Santt's beer",
        embase:"Vidrio",
        color: "IPA",
        capacidad: 550,
        retornable: false,
        precio: 750,
    
        cardimg: "./assets/img/productos/premium/premium-botella-ipa.png",
    
        descripcion:"",
        abv: 4.5,
        ibu: 16,
    
        background: "white",
    },
    {
        id: 36,
        tipo:"Artesanal",
        marca:"Santt's beer",
        embase:"Vidrio",
        color: "KOLSCH",
        capacidad: 550,
        retornable: false,
        precio: 750,
    
        cardimg: "./assets/img/productos/premium/premium-botella-KOLSCH.png",
    
        descripcion:"",
        abv: 5.1,
        ibu: 21,
    
        background: "white",
    },
    {
        id: 37,
        tipo:"Artesanal",
        marca:"Santt's beer",
        embase:"Vidrio",
        color: "Blonde",
        capacidad: 550,
        retornable: false,
        precio: 750,
    
        cardimg: "./assets/img/productos/premium/premium-botella-blonde.png",
    
        descripcion:"",
        abv: 4.3,
        ibu: 15,
    
        background: "white",
    },
    {
        id: 38,
        tipo:"Artesanal",
        marca:"Santt's beer",
        embase:"Vidrio",
        color: "Stout",
        capacidad: 550,
        retornable: false,
        precio: 750,
    
        cardimg: "./assets/img/productos/premium/premium-botella-stout.png",
    
        descripcion:"",
        abv: 4.6,
        ibu: 32,
    
        background: "white",
    },
    
];


/* Renderizado de productos */

/* Esta funcion "splitProducts" toma un argumento "size". 
La función utiliza un ciclo "for" para recorrer una lista de productos llamada "productList" y,
mediante el uso del método "slice", divide la lista en segmentos del tamaño especificado por el argumento "size" 
y los agrega a una nueva lista llamada "dividedProducts". 
Finalmente, la función devuelve la lista dividida. */

const splitProducts = (size) => {
    let dividedProducts = [];

    for (let i = 0; i < productList.length; i += size){
        dividedProducts.push(productList.slice(i, i +size))
    }
    return dividedProducts;
};

/* Con esta funcion marco un limite a la cantidad de productos a renderizar */

const productsController ={
    dividedProducts: splitProducts(6), /* esta propiedad almacena el resultado de llamar a la función "splitProducts" con un argumento de 6. */
    nextProductsIndex: 1, /* esta propiedad almacena un numero que inicia en 1 y se utilizara para mantener un registro del indice de los productos que se van a mostrar en la pagina */
    productsLimit: splitProducts(6).length, /* Esta propiedad almacena el resultado de llamar a la funcion "splitProducts" con un argumento de 6 y luego obtener el tamaño de la lista dividida. Esta propiedad se utilizara para establecer un limite a la cantidad de productos a mostrar en la pagina que sale de la cantidad de elementos en el array de productos "productList" */
};

