import { NavLink } from "react-router-dom"
import "./Navigator.scss"

function Navigator() {
    return (
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
    )
}

export default Navigator
