import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import "./Characters.scss"

const Characters = () => {
    return (
        <div className="character-page">
            <Header />
            <div className="background-wrapper">
                <div className="background bg-1"></div>
                <div className="background bg-2"></div>
            </div>
            <Footer />
        </div>
    )
}

export default Characters

