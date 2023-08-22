const productos = [
    {
        id: 1,
        nombre: "Jordan 1",
        category: "zapatillas",
        precio: 150,
        img: 'jordan1.jpg'
        },
    {id: 2, nombre: "Yeezy", category: "zapatillas", precio: 110, img: 'yeezy.png'},
    {id: 3, nombre: "puma", category: "zapatillas", precio: 90, img: 'puma.png'},
    {id: 4, nombre: "jordan-azul", category: "zapatillas", precio: 90, img: 'jordan-azul.png'},
    {id: 5, nombre: "air-marron", category: "zapatillas", precio: 90, img: 'airjprdan.png'},
    {id: 6, nombre: "air-negras", category: "zapatillas", precio: 90, img: 'air-negras.png'},
    {id: 7, nombre: "Ozweego", category: "zapatillas", precio: 90, img: 'ozweego.png',},
    {id: 8, nombre: "jordan-marron", category: "zapatillas", precio: 90, img: 'nike-marron.png'},
    {id: 9, nombre: "Jordan 2", category: "zapatillas", precio: 150, img: 'jordan1.jpg'},
    {id: 10, nombre: "Yeezy2", category: "zapatillas", precio: 110, img: 'yeezy.png'},
    {id: 11, nombre: "puma2", category: "zapatillas", precio: 90, img: 'puma.png'},
    {id: 12, nombre: "jordan-azul2", category: "zapatillas", precio: 90, img: 'jordan-azul.png'},
    {id: 13, nombre: "air-marron2", category: "zapatillas", precio: 90, img: 'airjprdan.png'},
    {id: 14, nombre: "air-negras2", category: "zapatillas", precio: 90, img: 'air-negras.png'},
    {id: 15, nombre: "Ozweego2", category: "zapatillas", precio: 90, img: 'ozweego.png'},
    {id: 16, nombre: "jordan-marron2", category: "zapatillas", precio: 90, img: 'nike-marron.png'},
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
    }, 500)
    })
}

/* export const getProductsById = (id) => {
    return new Promise((filter) => {
        setTimeout(() => {
            filter(productos.find(prod => prod.id === id))
        }, 1000);
    })
} */

/* export const getProductsByCategory = (category) => {
    return new Promise((filter) => {
        setTimeout(() => {
            filter(productos.find(prod => prod.category === category))
        }, 1000);
    })
} */