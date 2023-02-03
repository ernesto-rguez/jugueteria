import { Link } from 'react-router-dom'
const Sidebar = () => {
    
    return (
        <div className="sidebar">
            <div className="text-center p-10">
                <img className="img-avatar" src="https://w7.pngwing.com/pngs/627/97/png-transparent-avatar-web-development-computer-network-avatar-game-web-design-heroes.png"></img>
            </div>
            <ul>
                <p className="text-center">Menú</p>
                <li>
                    <Link to="/">Lista de Juguetes</Link>
                </li>
                <li>
                    <Link to="/new-toys">Nuevo Juguete</Link>
                </li>
            </ul>
        </div>
       
        )
}
export default Sidebar;