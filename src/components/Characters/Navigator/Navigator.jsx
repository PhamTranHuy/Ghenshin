import "./Navigator.scss"

function Navigator() {
    return (
        <div className="character-navigator">
            <ul className="navigator-wrapper">
                <li className="navigate-button">Mondstadt</li>
                <li className="navigate-button">Liyue</li>
                <li className="navigate-button">Inazuma</li>
                <li className="navigate-button">Coming soon</li>
            </ul>
        </div>
    )
}

export default Navigator
