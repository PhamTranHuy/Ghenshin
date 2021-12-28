import Mondstadt from './assets/city/Mondstadt.jpg'
import Liyue from './assets/city/Liyue.jpg'
import Inazuma from './assets/city/Inazuma.jpg'
import character_1 from './assets/city/character-1.png'
import character_2 from './assets/city/character-2.png'
import character_3 from './assets/city/character-3.png'

const HOME_DATA = {
    CITIES: [
        {
            name: 'Mondstadt',
            background: Mondstadt,
            character: character_1
        }, {
            name: 'Liyue',
            background: Liyue,
            character: character_2
        }, {
            name: 'Inazuma',
            background: Inazuma,
            character: character_3
        }
    ], SOCIALS: [
        {
            name: 'Facebook',
            icon: <i className="fab fa-facebook-f"></i>,
            url: ''
        }, {
            name: 'Twitter',
            icon: <i className="fab fa-twitter"></i>,
            url: ''
        }, {
            name: 'YouTube',
            icon: <i className="fab fa-youtube"></i>,
            url: ''
        }, {
            name: 'Instagram',
            icon: <i className="fab fa-instagram"></i>,
            url: ''
        }, {
            name: 'Discord',
            icon: <i className="fab fa-discord"></i>,
            url: ''
        }, {
            name: 'Reddit',
            icon: <i className="fab fa-reddit-alien"></i>,
            url: ''
        }, {
            name: 'HoYoLAB',
            icon: <i className="fas fa-dragon"></i>,
            url: ''
        }
    ]
}
export default HOME_DATA;