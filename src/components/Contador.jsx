import { useState } from "react"


export const Contador = () => {

    let [contador, setContador] = useState(0)

    const funcion = () => {
        setContador(contador + 1)
    }

    const saludo = 'Hola'

    return (
        <div>
            { saludo }
            <p>{ contador }</p>
            <button onClick={ funcion }>Boton</button>
        </div>
    )
}