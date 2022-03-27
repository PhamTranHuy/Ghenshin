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
            url: 'https://www.facebook.com/Genshinimpact/'
        }, {
            name: 'Twitter',
            icon: <i className="fab fa-twitter"></i>,
            url: 'https://twitter.com/GenshinImpact'
        }, {
            name: 'YouTube',
            icon: <i className="fab fa-youtube"></i>,
            url: 'https://www.youtube.com/c/GenshinImpact'
        }, {
            name: 'Instagram',
            icon: <i className="fab fa-instagram"></i>,
            url: 'https://www.instagram.com/genshinimpact/'
        }, {
            name: 'Discord',
            icon: <i className="fab fa-discord"></i>,
            url: 'https://discord.com/invite/genshinimpact'
        }, {
            name: 'Reddit',
            icon: <i className="fab fa-reddit-alien"></i>,
            url: 'https://www.reddit.com/r/Genshin_Impact'
        }, {
            name: 'HoYoLAB',
            icon: <i className="fas fa-dragon"></i>,
            url: 'https://www.hoyolab.com/home?utm_source=officialweb&utm_medium=game&utm_id=2'
        }
    ]
}
export default HOME_DATA;