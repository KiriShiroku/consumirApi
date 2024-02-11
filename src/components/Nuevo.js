import { useState } from "react";

export function Nuevo(){
    const [nombre, setNombre]=useState("");
    const [usuario, setUsuario]=useState("");
    const [password, setPassword]=useState("");
    const [foto, setFoto]=useState(null);
    function guardarDatos(e){
        e.preventDefault();
        console.log("Hola");
        setNombre(e.target.nombre.value);
        console.log(nombre);
    }
    return(
        <div className="container mt-5">
            <form onSubmit={guardarDatos}>
            <div className="card">
                <div className="card-header">
                    <h1>Nuevo Usuario</h1>
                </div>
                <div className="card-body">    
                    <input className="form-control mb-3" type="text" name="nombre" id="nombre" autoFocus/>
                    <input className="form-control mb-3" type="text" name="usuario" id="usuario"/>
                    <input className="form-control mb-3" type="password" name="password" id="password"/>
                    <input className="form-control mb-3" type="file" name="foto" id="foto"/>
                </div>
                <div className="card-footer">
                    <button className="form-control btn btn-primary" type="submit">Guardar Usuario</button>
                </div>  
            </div>
            </form>
        </div>
    );
}