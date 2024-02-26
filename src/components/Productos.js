import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { URL_API, URL_IMAGES } from "../config/rutas";

export function Productos(){
    const [dataProductos, setDataProductos]=useState([]);


useEffect(()=>{
    axios.get(URL_API+"/productos/mostrarProductos")
    .then((response)=>{
        setDataProductos(response.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    }, []);

const listaProductos=dataProductos.map((producto)=>{
    var Editar="/editarPr/"+producto.id;
    var Borrar="/borrarPr/"+producto.id;
    var foto=URL_IMAGES+producto.foto;

    return(
        <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.precio}</td>
                <td>{producto.desc}</td>
                <td><img src={foto} width="100 px" /></td>
                <td>
                    <NavLink to={Editar}>Editar / </NavLink>
                    <NavLink to={Borrar}>Borrar</NavLink>
                </td>
        </tr>
    );
        
});

return(
    <div className="container mt-5">
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h1>Lista de productos</h1>
                </div>
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>nombre</th>
                                <th>precio</th>
                                <th>desc</th>
                                <th>foto</th>
                                <th>Editar / Borrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaProductos}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
)
}
