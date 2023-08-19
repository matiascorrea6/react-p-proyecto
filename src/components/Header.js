import NavLinks from '../widgets/NavLinks'
import Carrito from '../widgets/Carrito'

function Header() {



    return (
        <nav className="flex justify-between items-center bg-black text-white p-5">
            
            <NavLinks/>
            <a href="#" className='text-5xl'>Mi pagina </a>
            <Carrito/>   
        </nav>
    );
}

export default Header
