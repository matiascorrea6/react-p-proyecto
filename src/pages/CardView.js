import { Link } from "react-router-dom"

function CardView(props) {

    return (

        <section className="flex flex-wrap justify-center">
            
            {props.data.length === 0 ? "cargando.."
            : props.data.map((item,i)=>{
                return (
                    <article className="flex flex-col h-80 w-80 p-8 m-8  items-center  border-gray-100 box-border">
                        <img src={item.img} alt="" />
                        <h2 className="">{item.nombre}</h2>
                        <p>${item.precio}</p>
                        <Link to="/detalle">ver detalle</Link>
                    </article>
                )
            })}
        
        </section>
    )
}

export default CardView