import { useEffect, useState } from "react"
import CardView from "../pages/CardView"
import { getProductos } from "./Productos"

function Card() {

    const [ productos, setProductos ] = useState([])

    useEffect(()=>{
        getProductos()
            .then(response => {
                setProductos(response)
            })
    }, []) 

    return (
        <>
            <CardView productos={productos} />
        </>
    )
}

export default Card
