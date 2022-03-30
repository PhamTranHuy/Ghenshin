import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import "./Characters.scss"
import Navigator from "./Navigator/Navigator"

const Characters = () => {
    return (
        <div className="character-page">
            <Header />
            <Navigator />
            <div className="character-content" style={{height: window.innerHeight}}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Characters

