import { NavLink, useLocation} from "react-router-dom"
import { useState } from "react"
import "./Navigator.scss"

function Navigator() {
    const { pathname } = useLocation();
    const [toggleNavigator, setToggleNavigator] = useState(false);
    const getCurrentCity = (pathname) => {
        const city = pathname.substring(pathname.lastIndexOf('/') + 1);
        return city;
    }
    const toggle = () => {
        setToggleNavigator((prevState) => !prevState)
    }
    return (
        <>
            <div className="character-navigator">
                <ul className="navigator-wrapper">
                    <li className="navigate-button">
                        <NavLink to="./mondstadt">
                            <p>Mondstadt</p>
                        </NavLink>
                    </li>
                    <li className="navigate-button">
                        <NavLink to="./liyue">
                            <p>Liyue</p>
                        </NavLink>
                    </li>
                    <li className="navigate-button">
                        <NavLink to="./inazuma">
                            <p>Inazuma</p>
                        </NavLink>
                    </li>
                    <li className="navigate-button">
                        <a>
                            <p>Coming soon</p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="character-navigator_mobile">
                <div onClick={toggle} className="navigator-current-city">{getCurrentCity(pathname)}</div>
                { toggleNavigator && (<ul className="navigator-wrapper">
                    <li className="navigate-button">
                        <NavLink to="./mondstadt">
                            <p>Mondstadt</p>
                        </NavLink>
                    </li>
                    <li className="navigate-button">
                        <NavLink to="./liyue">
                            <p>Liyue</p>
                        </NavLink>
                    </li>
                    <li className="navigate-button">
                        <NavLink to="./inazuma">
                            <p>Inazuma</p>
                        </NavLink>
                    </li>
                    <li className="navigate-button">
                        <a>
                            <p>Coming soon</p>
                        </a>
                    </li>
                </ul>)}
            </div>
        </>
    )
}

export default Navigator
