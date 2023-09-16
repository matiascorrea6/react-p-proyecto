import { Link } from "react-router-dom"
import { Card, Button } from "react-bootstrap";

function CardView(props) {

    return (

        <section className="mainProductos">

            <div className="h2productos">
                <h2 className="h2">Productos</h2>
            </div>   
            
            <div className="catalogo">
                {props.productos.length === 0 ? "cargando.."
                : props.productos.map((item,i)=>{

                    return (
                        <Card key={i} className="card">

                            <Card.Img className="cardImg" variant="top" src={item.img} />

                            <Card.Body>
                                <Card.Title className="cardNombre">
                                    {item.nombre}
                                </Card.Title>
                                <Card.Text className="cardPrecio">
                                    ${item.precio}
                                </Card.Text>
                                <Button variant="dark">
                                    <Link to="/productos/:id" className="botonDetalle">ver detalle</Link>
                                </Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
        </section>
    )
}

export default CardView
