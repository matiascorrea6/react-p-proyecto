import { useEffect, useState } from "react"
import CardView from "../pages/CardView"

function Productos() {

    const [ data, setData ] = useState([])

    useEffect(()=>{
        Productos()
    }, [])


    const Productos = () => {
        setTimeout(() => {
            let data = [
                {id: 1, nombre: "Jordan 1", precio: 150, img: 'jordan1.jpg',},
                {id: 2, nombre: "Yeezy", precio: 110, img: 'yeezy.png',},
                {id: 3, nombre: "puma", precio: 90, img: 'puma.png',},
                {id: 4, nombre: "jordan-azul", precio: 90, img: 'jordan-azul.png',},
                {id: 5, nombre: "air-marron", precio: 90, img: 'airjprdan.png',},
                {id: 6, nombre: "air-negras", precio: 90, img: 'air-negras.png',},
                {id: 7, nombre: "Ozweego", precio: 90, img: 'ozweego.png',},
                {id: 8, nombre: "jordan-marron", precio: 90, img: 'nike-marron.png',},
                {id: 9, nombre: "Jordan 2", precio: 150, img: 'jordan1.jpg',},
                {id: 10, nombre: "Yeezy2", precio: 110, img: 'yeezy.png',},
                {id: 11, nombre: "puma2", precio: 90, img: 'puma.png',},
                {id: 12, nombre: "jordan-azul2", precio: 90, img: 'jordan-azul.png',},
                {id: 13, nombre: "air-marron2", precio: 90, img: 'airjprdan.png',},
                {id: 14, nombre: "air-negras2", precio: 90, img: 'air-negras.png',},
                {id: 15, nombre: "Ozweego2", precio: 90, img: 'ozweego.png',},
                {id: 16, nombre: "jordan-marron2", precio: 90, img: 'nike-marron.png',},
            ]
            setData(data)
        }, 2000);
    }
    
    return (
        <>
        <CardView data={data} />
        </>
    )
}

export default Productos
