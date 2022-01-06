import React from 'react'

const Bienvenida = (props) => {
    const {nombre} = props
    console.log(props)
    return (
        <div>
            <h2>Bienvenido {/*props.nombre*/nombre}</h2>
        </div>
    )
}

export default Bienvenida
