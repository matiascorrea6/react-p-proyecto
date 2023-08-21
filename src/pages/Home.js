import Productos from '../widgets/Productos'

function Home() {


    return (
        <>
            <div className='flex justify-center p-8 m-8'>
                <h1>Mi Pagina</h1>
            </div>
            <div>    
                <Productos />
            </div>
        </>
    )
}

export default Home