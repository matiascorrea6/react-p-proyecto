function Main() {

    let nombre = prompt("Escriba su nombre y apellido.")

    return (
        <>
        <main className="text-3xl text-white">
            <p>Bienvenido {nombre}!</p>
        </main>
        </>
    );

}

export default Main