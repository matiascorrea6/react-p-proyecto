import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Contacto from '../pages/Contacto'
import Productos from '../widgets/Productos'


function Main() {

   
    return (

        <main className="text-3xl text-white">
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/productos" element={<Productos/>} />
                <Route path="/contacto" element={<Contacto/>}></Route>
                <Route path="/detalle" element={<p> detalle </p>}></Route>
            </Routes>
        </main>
    );

}

export default Main