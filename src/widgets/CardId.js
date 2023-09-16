import { useEffect, useState } from "react"
import CardViewId from "../pages/CardViewId"
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
            <CardViewId productos={productos} />
        </>
    )
}

export default Card
