import { NavLink, useLocation} from "react-router-dom"
import { useEffect, useState } from "react"
import "./Navigator.scss"
import clsx from "clsx";

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
    useEffect(() => {
        setToggleNavigator(false);
    }, [pathname]);

    return (
        <>
            <div className="character-navigator">
                <ul className="navigator-wrapper">
                    <li className="navigate-button-wrapper">
                        <NavLink to="./mondstadt" className="navigate-button">
                            <p>Mondstadt</p>
                        </NavLink>
                    </li>
                    <li className="navigate-button-wrapper">
                        <NavLink to="./liyue" className="navigate-button" >
                            <p>Liyue</p>
                        </NavLink>
                    </li>
                    <li className="navigate-button-wrapper">
                        <NavLink to="./inazuma" className="navigate-button">
                            <p>Inazuma</p>
                        </NavLink>
                    </li>
                    <li className="navigate-button-wrapper">
                        <div className="navigate-button">
                            <p>Coming soon</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="character-navigator_mobile">
                <div onClick={toggle} className={clsx("navigator-current-city", toggleNavigator && "active")}>{getCurrentCity(pathname)}</div>
                { toggleNavigator && (<ul className="navigator-wrapper">
                    <li className="navigate-button-wrapper">
                        <NavLink to="./mondstadt" className="navigate-button">
                            <p>Mondstadt</p>
                        </NavLink>
                    </li>
                    <li className="navigate-button-wrapper">
                        <NavLink to="./liyue" className="navigate-button">
                            <p>Liyue</p>
                        </NavLink>
                    </li>
                    <li className="navigate-button-wrapper">
                        <NavLink to="./inazuma" className="navigate-button">
                            <p>Inazuma</p>
                        </NavLink>
                    </li>
                    <li className="navigate-button-wrapper">
                        <div className="navigate-button">
                            <p>Coming soon</p>
                        </div>
                    </li>
                </ul>)}
            </div>
        </>
    )
}

export default Navigator
