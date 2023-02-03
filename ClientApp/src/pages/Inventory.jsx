import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
const Home = () => {

    const [mostrar, setMostrar] = useState(false);

    const [persons, setPersona] = useState([]);

    const ConsumirAPI = async () => {
        const response = await fetch("./api/persons/ObtenerPersona");

        if (response.ok) {
            const data = await response.json();
            setPersona(data);
        } else {
            console.log("Error en la lista");
        }
    }

    const eliminarJuguete = async (id) => {
        var respuesta = window.confirm("DEsea eliminarlo?")
        if (!respuesta) {
            return;
        }
        const response = await fetch(`api/persons/Eliminar${id}`, {
            method: 'DELETE'
        })
        if (response.ok) {
            ConsumirAPI()
        }
    }

    useEffect(() => {
        ConsumirAPI();
    }, [])
    return (
        <div className="container">
           
                <div className="row">
                <Link to="/new-toys" className="btn btn-primary">Nuevo</Link>
                </div>
            <section className="table-body">
                    <table className="">
                        <thead>
                            <tr>
                                <th className="text-left">Nombre</th>
                                <th className="text-left">Descripción</th>
                                <th className="text-left">Edad Minima</th>
                            <th className="text-left">Compañia</th>
                            <th className="text-center">Opción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (persons.length < 1) ? (
                                    <tr>
                                        <td colSpan="4"></td>
                                    </tr>
                                ) :


                                    (
                                        persons.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.nombre}</td>
                                                <td>{item.apellido}</td>
                                                <td>{item.domicilio}</td>
                                                <td>{item.telefono}</td>
                                                <td className="text-center">
                                                    <Link  to="" className="btn btn-primary">Editar</Link>
                                                    <Link onClick={() => eliminarJuguete(item.id)} to="" className="btn btn-danger">Eliminar</Link>
                                                    
                                                </td>

                                            </tr>
                                        ))
                                    )
                            }
                        </tbody>
                    </table>                
            </section>

        </div>
           
       
        )
}
export default Home