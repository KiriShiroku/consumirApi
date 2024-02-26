import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { URL_API, URL_IMAGES } from "../config/rutas";


export function Inicio(){
    const [dataUsuarios, setDataUsuarios]=useState([]);

useEffect(()=>{
    axios.get(URL_API + "/mostrarUsuarios")
    .then((response)=>{
        setDataUsuarios(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

const listaUsuarios=dataUsuarios.map((usuario)=>{
    var Editar="/editar/"+usuario.id;
    var Borrar="/borrar/"+usuario.id;
    var foto=URL_IMAGES+usuario.foto;

    return(
        <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.usuario}</td>
                <td><img src={foto} width="100 px" /></td>
                <td>
                    <NavLink to={Editar}>Editar / </NavLink>
                    <NavLink to={Borrar}>Borrar</NavLink>
                </td>
        </tr>
    );      
});

return (
    <div className="container mt-5">
        <div className="container">
            <div className="card">
                <div className="card-header">
                    <h1>Lista de usuarios</h1>
                </div>
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Usuario</th>
                                <th>Foto</th>
                                <th>Editar / Borrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaUsuarios}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
);
}
