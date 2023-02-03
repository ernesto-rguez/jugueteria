
import Sidebar from "./Sidebar"
const Header = () => {
    return (
        <nav className="nav">
            <div className="nav__container">
                <label for="check" className="nav__icon">
                    <span className="nav__text">☰</span>
                </label>
            </div>
            <input type="checkbox" id="check" className="nav__checkbox"></input>
            <div className="nav__items">
                <Sidebar/>
            </div>
        </nav>
       
        )
}
export default Header;