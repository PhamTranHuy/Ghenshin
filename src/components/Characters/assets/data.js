const MONDSTADT_AVATAR_URL = "./character-avatar/mondstadt"
const LIYUE_AVATAR_URL = "./character-avatar/liyue"
const INAZUMA_AVATAR_URL = "./character-avatar/inazuma"

export const CHARACTER_AVATAR_LIST = [
    {
        id: 0,
        name: "Jean",
        city: "mondstadt",
        img: require(`${MONDSTADT_AVATAR_URL}/jean.png`).default
    }, {
        id: 1,
        name: "Amber",
        city: "mondstadt",
        img: require(`${MONDSTADT_AVATAR_URL}/amber.png`).default
    }, {
        id: 2,
        name: "Lisa",
        city: "mondstadt",
        img: require(`${MONDSTADT_AVATAR_URL}/lisa.png`).default
    }, {
        id: 3,
        name: "Kaeya",
        city: "mondstadt",
        img: require(`${MONDSTADT_AVATAR_URL}/kaeya.png`).default
    }, {
        id: 4,
        name: "Barbara",
        city: "mondstadt",
        img: require(`${MONDSTADT_AVATAR_URL}/barbara.png`).default
    }, {
        id: 5,
        name: "Diluc",
        city: "mondstadt",
        img: require(`${MONDSTADT_AVATAR_URL}/diluc.png`).default
    }, {
        id: 6,
        name: "Razor",
        city: "mondstadt",
        img: require(`${MONDSTADT_AVATAR_URL}/razor.png`).default
    }, {
        id: 7,
        name: "Venti",
        city: "mondstadt",
        img: require(`${MONDSTADT_AVATAR_URL}/venti.png`).default
    }, {
        id: 8,
        name: "Klee",
        city: "mondstadt",
        img: require(`${MONDSTADT_AVATAR_URL}/klee.png`).default
    }, {
        id: 9,
        name: "Benefit",
        city: "mondstadt",
        img: require(`${MONDSTADT_AVATAR_URL}/benefit.png`).default
    }, {
        id: 10,
        name: "Xiao",
        city: "liyue",
        img: require(`${LIYUE_AVATAR_URL}/xiao.png`).default
    }, {
        id: 11,
        name: "Beidou",
        city: "liyue",
        img: require(`${LIYUE_AVATAR_URL}/beidou.png`).default
    }, {
        id: 12,
        name: "Ningguang",
        city: "liyue",
        img: require(`${LIYUE_AVATAR_URL}/ningguang.png`).default
    }, {
        id: 13,
        name: "Xiangling",
        city: "liyue",
        img: require(`${LIYUE_AVATAR_URL}/xiangling.png`).default
    }, {
        id: 14,
        name: "Xingqiu",
        city: "liyue",
        img: require(`${LIYUE_AVATAR_URL}/xingqiu.png`).default
    }, {
        id: 15,
        name: "Chongyun",
        city: "liyue",
        img: require(`${LIYUE_AVATAR_URL}/chongyun.png`).default
    }, {
        id: 16,
        name: "Qiqi",
        city: "liyue",
        img: require(`${LIYUE_AVATAR_URL}/qiqi.png`).default
    }, {
        id: 17,
        name: "Keqing",
        city: "liyue",
        img: require(`${LIYUE_AVATAR_URL}/keqing.png`).default
    }, {
        id: 18,
        name: "Zhongli",
        city: "liyue",
        img: require(`${LIYUE_AVATAR_URL}/zhongli.png`).default
    }, {
        id: 19,
        name: "Kamisato Ayaka",
        city: "inazuma",
        img: require(`${INAZUMA_AVATAR_URL}/kamisato-ayaka.png`).default
    }, {
        id: 20,
        name: "Kaedehara Kazuha",
        city: "inazuma",
        img: require(`${INAZUMA_AVATAR_URL}/kaedehara-kazuha.png`).default
    }, {
        id: 21,
        name: "Yoimiya",
        city: "inazuma",
        img: require(`${INAZUMA_AVATAR_URL}/yoimiya.png`).default
    }, {
        id: 22,
        name: "Sayu",
        city: "inazuma",
        img: require(`${INAZUMA_AVATAR_URL}/sayu.png`).default
    }, {
        id: 23,
        name: "Raiden Shogun",
        city: "inazuma",
        img: require(`${INAZUMA_AVATAR_URL}/raiden-shogun.png`).default
    }, {
        id: 24,
        name: "Kujou Sara",
        city: "inazuma",
        img: require(`${INAZUMA_AVATAR_URL}/kujou-sara.png`).default
    }, {
        id: 25,
        name: "Sangonomiya Kokomi",
        city: "inazuma",
        img: require(`${INAZUMA_AVATAR_URL}/sangonomiya-kokomi.png`).default
    }, {
        id: 26,
        name: "Thoma",
        city: "inazuma",
        img: require(`${INAZUMA_AVATAR_URL}/thoma.png`).default
    }, {
        id: 27,
        name: "Arataki Itto",
        city: "inazuma",
        img: require(`${INAZUMA_AVATAR_URL}/arataki-itto.png`).default
    }, {
        id: 28,
        name: "Yae Miko",
        city: "inazuma",
        img: require(`${INAZUMA_AVATAR_URL}/yae-miko.png`).default
    }
]

const getCharacterImg = (name) => {
    return require(`./character-img/desktop/${name}.png`).default
}
const getCharacterMobileImg = (name) => {
    return require(`./character-img/mobile/${name}.png`).default
}
const getQualityImg = (quality) => {
    return require(`./character-quality/${quality}.png`).default
}
const getConversationImg = (name) => {
    return require(`./character-conversation/${name}.png`).default
}
export const CHARACTER_DETAIL_LIST = [
    {
        id: 0,
        name: "Jean",
        img: getCharacterImg('jean'),
        mobile_img: getCharacterMobileImg('jean'),
        quality_img: getQualityImg('wind'),
        conversation_img: getConversationImg('jean'),
        cv: `SAITO Chiwa`,
        intro: `As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt.
        She had taken precautions long before the onset of Stormterror's assault, and she will guard Mondstadt with her life as always.`
    }
]