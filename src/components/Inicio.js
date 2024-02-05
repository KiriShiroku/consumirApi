import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export function Inicio(){
    const [dataUsuarios, setDataUsuarios]=useState([]);


useEffect(()=>{
    axios.get("https://apiconsumible-hl55.onrender.com/api/mostrarUsuarios")
    .then((respuesta)=>{
        console.log(respuesta);
        setDataUsuarios(respuesta.data);
    })
    .catch((err)=>{
        console.log("Error al recuperar el api"+err);
    })
}, []);

const listaUsuarios=dataUsuarios.map((usuario)=>{
    var Editar="/Editar/"+usuario.id;
    var Borrar="/Borrar/"+usuario.id;
    var foto="https://apiconsumible-hl55.onrender.com/images/"+usuario.foto;

    return(
        <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.usuario}</td>
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
                <th>usuario</th>
                <th>foto</th>
                <th></th>
            </tr>
        </thead>

        <tbody>
            {listaUsuarios}
        </tbody>
    </table>
);
}