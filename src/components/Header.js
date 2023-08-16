import Menu from './Menu'

function Header() {

    return (
        <>
        <nav className="flex justify-between items-center bg-black text-white p-5">
            
            <Menu/>
            <a href="#" className='text-5xl'> Mi pagina </a>
            
            <div>
                <i className="material-symbols-outlined" >shopping_cart</i>
                <span> 3 </span>
            </div>
        </nav>
        </>
    );
}

export default Header