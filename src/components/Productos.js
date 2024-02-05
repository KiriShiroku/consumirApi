import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export function Productos(){
    const [dataProductos, setDataProductos]=useState([]);


useEffect(()=>{
    axios.get("https://apiconsumible-hl55.onrender.com/api/productos/mostrarproductos")
    .then((respuesta)=>{
        console.log(respuesta);
        setDataProductos(respuesta.data);
    })
    .catch((err)=>{
        console.log("Error al recuperar el api"+err);
    })
}, []);

const listaProductos=dataProductos.map((producto)=>{
    var Editar="/Editar/"+producto.id;
    var Borrar="/Borrar/"+producto.id;
    var foto="https://apiconsumible-hl55.onrender.com/images/"+producto.foto;

    return(
        <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.precio}</td>
                <td>{producto.desc}</td>
                <td><img src={foto} width="100 px" /></td>
                <td>
                    <NavLink to="">Editar</NavLink>
                    <NavLink to="">Borrar</NavLink>
                </td>
        </tr>
    );
        
});

return(
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
);
}
