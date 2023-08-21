import NavLinks from '../widgets/NavLinks'
import Carrito from '../widgets/Carrito'
import { Link } from 'react-router-dom'

function Header() {



    return (
        
        <nav className="flex justify-between items-center bg-black text-white p-5">
            
            <NavLinks/>
            <Link to="/" className='text-5xl'>Mi pagina </Link>
            <Carrito/>   
        
        </nav>
    );
}

export default Header
