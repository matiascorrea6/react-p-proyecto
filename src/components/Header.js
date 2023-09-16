import NavLinks from '../widgets/NavLinks'
import Carrito from '../widgets/Carrito'
import { Link } from 'react-router-dom'

function Header() {



    return (
        
        <nav className="navBar">
            
            <NavLinks/>
            <Link to="/" className='linkPagina'>Sneakers </Link>
            <Carrito/>   
        
        </nav>
    );
}

export default Header
