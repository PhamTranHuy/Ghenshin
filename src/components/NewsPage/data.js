import news_1_img from './assets/recommend/news-1.png'
import news_2_img from  './assets/recommend/news-2.jpg'
import news_3_img from  './assets/recommend/news-3.jpg'
import news_4_img from  './assets/recommend/news-4.jpg'
import news_5_img from  './assets/recommend/news-5.jpg'

const NEWS_INFO = [
    {
        id: 1,
        title: `Genshin Impact's "Kitsune's Leisurely Stroll Around Hanamizaka" Web Event has begun!`,
        desc: `Oh? Are you surprised to meet me here? "Kitsune's Leisurely Stroll Around Hanamizaka" —— The web event for 
        Genshin Impact's new character: Yae Miko is now available.`,
        img: news_1_img,
        date: new Date(),
        category: 'info'
    }, {
        id: 2,
        title: `Character Teaser - "Yae Miko: Kitsune's Affections" | Genshin Impact`,
        desc: `Lady Guuji of the Grand Narukami Shrine is fond of many things.
        From whimsical novels to fragrant, tender, and succulent Fried Tofu, as well as charming and interesting people.
        Thus, she enjoys anything, as long as it relieves boredom.
        Fortunately, these are in bountiful supply in the human realm.`,
        img: news_2_img,
        date: new Date(2021, 8, 9),
        category: 'updates'
    }, {
        id: 3,
        title: `"Humans are just fascinating creatures, that's why I'm so fond of them."`,
        desc: `Today, we will be introducing a new character, Yae Miko!`,
        img: news_3_img,
        date: new Date(2021, 9, 13),
        category: 'events'
    }, {
        id: 4,
        title: `Pre-Installation Function Coming Soon`,
        desc: `To bring Travelers a better gaming experience, the developers will soon make a 
            pre-installation function available on PC and mobile platforms.`,
        img: news_4_img,
        date: new Date(2021, 10, 20),
        category: 'updates'
    }, {
        id: 5,
        title: `Genshin Impact Version 2.5 Preview`,
        desc: `The Version 2.5 "When the Sakura Bloom" Preview Page Is Here!`,
        img: news_5_img,
        date: new Date(2021, 8, 1),
        category: 'events'
    }, {
        id: 6,
        title: `eget dolor morbi non arcu risus quis varius quam quisque 1`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Enim nulla aliquet porttitor lacus luctus accumsan.`,
        img: "//placehold.it/265x140",
        date: new Date(2021, 8, 1),
        category: 'info'
    }, {
        id: 7,
        title: `eget dolor morbi non arcu risus quis varius quam quisque 2`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Enim nulla aliquet porttitor lacus luctus accumsan.`,
        img: "//placehold.it/265x140",
        date: new Date(2021, 8, 1),
        category: 'info'
    }, {
        id: 8,
        title: `eget dolor morbi non arcu risus quis varius quam quisque 3`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Enim nulla aliquet porttitor lacus luctus accumsan.`,
        img: "//placehold.it/265x140",
        date: new Date(2021, 8, 1),
        category: 'updates'
    }, {
        id: 9,
        title: `eget dolor morbi non arcu risus quis varius quam quisque 4`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Enim nulla aliquet porttitor lacus luctus accumsan.`,
        img: "//placehold.it/265x140",
        date: new Date(2021, 8, 1),
        category: 'updates'
    }, {
        id: 10,
        title: `eget dolor morbi non arcu risus quis varius quam quisque 5`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Enim nulla aliquet porttitor lacus luctus accumsan.`,
        img: "//placehold.it/265x140",
        date: new Date(2021, 8, 1),
        category: 'updates'
    }, {
        id: 11,
        title: `eget dolor morbi non arcu risus quis varius quam quisque 6`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Enim nulla aliquet porttitor lacus luctus accumsan.`,
        img: "//placehold.it/265x140",
        date: new Date(2021, 8, 1),
        category: 'updates'
    }, {
        id: 12,
        title: `eget dolor morbi non arcu risus quis varius quam quisque 7`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Enim nulla aliquet porttitor lacus luctus accumsan.`,
        img: "//placehold.it/265x140",
        date: new Date(2021, 8, 1),
        category: 'updates'
    }, {
        id: 13,
        title: `eget dolor morbi non arcu risus quis varius quam quisque 8`,
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Enim nulla aliquet porttitor lacus luctus accumsan.`,
        img: "//placehold.it/265x140",
        date: new Date(2021, 8, 1),
        category: 'updates'
    }, 
];

const GET_NEWS_INFO_API = (category = 'latest', page = 1, itemsNumber = 5) => {
    let result = [];
    const startIndex = (itemsNumber*page) - itemsNumber;
    const endIndex =  (itemsNumber*page) - 1;
    if (category === 'latest') {
        result = NEWS_INFO.filter((item, index) => {
            return index >= startIndex && index <= endIndex;
        });
    } else {
        const categoryList = NEWS_INFO.filter((item) => {
            return item.category === category;
        })
        result = categoryList.filter((item, index) => {
            return index >= startIndex && index <= endIndex;
        })
    }
    return new Promise(resolve => {
        setTimeout (() => {
            resolve(result);
        }, 100)
    })
}

export default GET_NEWS_INFO_API;