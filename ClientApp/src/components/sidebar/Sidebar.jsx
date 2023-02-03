import './../sidebar/sidebar.css'
import React, {useState } from 'react'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    const [show, setShow] = useState(false)
    return (
           
            <aside className="sidebar">
                <nav className="nav">
                    <div>
                        <Link to="/" className="nav-logo">
                            <i className="fas fa-home-alt nav-logo-icon"></i>
                            <span className="nav-logo-name">
                               
                            </span>
                        </Link>
                        <div className="nav-list">
                            <Link to="/" className="nav-link active">
                                <i className="fas fa-list nav-link-icon"></i>
                                <span className="nav-link-name">Inventario</span>
                            </Link>
                            <Link to="/new-toys" className="nav-link">
                                <i className="fas fa-plus nav-link-icon"></i>
                                <span className="nav-link-name">Nuevo Juguete</span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </aside>
        )
}

export default Sidebar