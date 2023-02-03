import './../navbar/navbar.css'
const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <header className="header">
            <div className="header-toggle">
                <i className="fas fa-bars"></i>
            </div>
        </header>
        )
}
export default Navbar