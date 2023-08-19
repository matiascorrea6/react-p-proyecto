import { useState } from "react"
import { Link } from 'react-router-dom'

function NavLinks() {
    
    let [show,setShow] = useState(false) 

    const toggleMenu = () => {
        setShow(!show) 
    };
    
    if (show) {
        return (
            <div>
                <button onClick={toggleMenu} className="material-symbols-outlined">menu</button>
            </div>
        )
    } else {
        return (
            <div className="flex static ">
                <button onClick={toggleMenu} className="absolute material-symbols-outlined">menu</button>
                <ul className="flex flex-col items-center text-2xl space-x-4">
                    <Link to="/home">Home</Link>
                    <Link to="/productos">Productos</Link>
                    <Link to="/contacto">contacto</Link>
                </ul>
            </div>
        )
    };
}

export default NavLinks
