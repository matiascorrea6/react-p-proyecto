import { useState } from "react"

function Menu() {
    
    let [show,setShow] = useState(false) 

    const toggleMenu = () => {
        setShow(!show) 
    };
    
    if (show) {
        return (
            <main>
                <button onClick={toggleMenu} className="material-symbols-outlined">menu</button>
            </main>
        )
    } else {
        return (
            <main>
                <button onClick={toggleMenu} className="material-symbols-outlined">menu</button>
                <ul className="flex flex-col items-center text-2xl space-x-4">
                    <a href="">Store</a>
                    <a href="">Contact</a>
                </ul>
            </main>
        )
    };
}

export default Menu