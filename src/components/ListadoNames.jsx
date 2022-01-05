import React,{useState} from "react"
import uniqid from "uniqid"

const ListadoNames = () =>{

    const  [nombre, setNombre] = useState('')
    const [listaNombres, setListaNombres] = useState([])

    const addNombre = (e) =>{
       e.preventDefault()
       const nuevoNombre = { 
        id:uniqid(),
        tituloNombre:nombre
       }
        setListaNombres([...listaNombres,nuevoNombre])//A lista de nombres le añades nombre(basicamente que se vaya llnando el aarray.)
       setNombre('')
    }

    const deleteNombre = (id) =>{
        const nuevoArray = listaNombres.filter(item => item.id !== id)
        setListaNombres(nuevoArray)
    }

    return (
        <div>
            <h2>Aplicacion de crud basic</h2>
            <div className="row">
            <div className="col">
                <h2>Listado de nombres</h2>
                <ul className="list-group">
                   {
                       listaNombres.map(item =>
                        <li key={item.id} className="list-group-item">{item.tituloNombre}

                        <button  className="btn btn-danger float-right" onClick={ () => {deleteNombre(item.id)}}>Borrar</button>
                        </li>
                        )
                   }
                </ul>
            </div>
            <div className="col">
                <h2>Formulario para añadir nombres</h2>
                <form onSubmit={(e)=>addNombre(e)} className="form-group">

                    <input onChange={(e)=>{setNombre(e.target.value)}} 
                    className="form-control mb-3" 
                    type="text" placeholder="Introduce el nombre" 
                    value={nombre}
                    />
                    
                    <input className="btn btn-info btn-block" type="submit" value="Registrar nombre" />
                </form>
            </div>
            </div>
        </div>
    )
}

export default ListadoNames