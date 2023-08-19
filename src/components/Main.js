import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Contacto from '../pages/Contacto'


function Main() {

   
    return (
        <main className="text-3xl text-white">
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/productos" element={<p>Productos</p>}></Route>
                <Route path="/contacto" element={<Contacto/>}></Route>
            </Routes>
        </main>
    );

}

export default Main