import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Contacto from '../pages/Contacto'
import Card from '../widgets/Card'


function Main() {

   
    return (

        <main className="text-3xl text-white">
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/productos" element={<Card/>} />
                <Route path="/contacto" element={<Contacto/>}></Route>
                <Route path="/productos/:id" element={<p> detalle </p>}></Route>
            </Routes>
        </main>
    );

}

export default Main