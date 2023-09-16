import { useState } from "react"
import { Link } from 'react-router-dom'

function NavLinks() {
    
    let [show,setShow] = useState(true) 

    const toggleMenu = () => {
        setShow(!show) 
    };
    
    if (show) {
        return (
            <div className="botonNavbar">
                
                <button onClick={toggleMenu} className="material-symbols-outlined">
                    menu
                </button>
               
            </div>
        )
    } else {
        return (
            <div className="botonNavbarOn">

                <button onClick={toggleMenu} className="material-symbols-outlined">
                    menu
                </button>
               
                <ul>

                    <Link className="linkMenu" to="/productos">
                        Productos
                    </Link>

                    <Link className="linkMenu" to="/contacto">
                        Contacto
                    </Link>

                </ul>
            </div>
        )
    };
}

export default NavLinks
