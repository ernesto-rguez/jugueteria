import './components/navbar/navbar.css'
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar"
import Inventory from "./pages/Inventory"
import New from "./pages/New"
import Footer from "./components/Footer";

const App = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => {
        setSidebarOpen(true);
    }
    const closeSidebar = () => {
        setSidebarOpen(false);
    }
    return (
        <main className="">
                <BrowserRouter>
                    <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
                        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
                        <Routes>
                            <Route path="/" exact={true} element={<Inventory />} />
                            <Route path="/new-toys" exact={true} element={<New />} />
                </Routes>
                <Footer/>
                </BrowserRouter>
            </main>
    
          
        )
}
export default App;