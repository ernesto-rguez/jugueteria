import './../css/styles.css'
import React, { useState } from "react"

const modeloContacto = {
        idContacto: 0,
        nombre: '',
        apellido: '',
        domicilio: '',
        telefono: ''

        }

const NewProduct = (guardarContacto) => {


    const [contacto, setContacto] = useState(modeloContacto);

    const actualizarDatos = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setContacto(
            {
                ...contacto,
                [e.target.name]: e.target.value
            }
        )
    }

   

    const guardarC = async (e) => {
       
        console.log(contacto);
        e.preventDefault();
       const response = await fetch("api/persons/Guardar",
            {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(contacto)
            })
        if (response.ok) {

            alert('Juguete guardado correctamente');
        } else {
        } }
     


    return (
        <div className="">
            <form className="container">
                <div className="form-color">
                    <h1 className="text-center text-fuchtia">Nuevo Juguete</h1>
                    <div className="input-group">
                        <label for="">Nombre</label>
                        <input className="input-control" name="nombre" onChange={(e) => actualizarDatos(e)} value={contacto.nombre} />
                    </div>
                    <div className="input-group">
                        <label for="">Descripcion</label>
                        <input className="input-control" name="apellido" onChange={(e) => actualizarDatos(e)} value={contacto.apellido} />
                    </div>
                    <div className="input-group">
                        <label for="">Edad minima</label>
                        <input className="input-control" name="domicilio" onChange={(e) => actualizarDatos(e)} value={contacto.domicilio} />
                    </div>
                    <div className="input-group">
                        <label for="">Compania</label>
                        <input className="input-control" name="telefono" onChange={(e) => actualizarDatos(e)} value={contacto.telefono} />
                    </div>
                    <div className="input-group">
                        <button className="color-primary btn btn-primary" onClick={guardarC}>Guardar</button>
                        <button className="color-primary btn btn-danger" onClick={guardarC}>Cancelar</button>
                    </div>
                </div>
            </form>
            
        </div>
    )
}
export default NewProduct