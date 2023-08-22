import { Link } from "react-router-dom"

function CardView(props) {

    return (

        <section className="flex flex-wrap justify-center p-10 m-10">
            
            {props.productos.length === 0 ? "cargando.."
            : props.productos.map((item,i)=>{
                return (
                    <article key={i} className="flex flex-col h-auto w-80 p-10 m-10 border-gray-100 shadow-2xl">
                        
                        <picture className=" h-auto w-auto">
                            <img src={item.img} alt="" />
                        </picture>
                        
                        <header>
                            <h2 className="">
                                {item.nombre}
                            </h2>
                            <button className="rounded-full">
                                ${item.precio}
                            </button>
                        </header>

                        <button className="botonDetalle">
                            <Link to="/productos/:id">ver detalle</Link>
                        </button>
    
                    </article>
                )
            })}
        
        </section>
    )
}

export default CardView
