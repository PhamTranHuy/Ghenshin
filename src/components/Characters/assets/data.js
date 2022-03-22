const MONDSTADT_AVATAR_URL = "./character-avatar/mondstadt"
const LIYUE_AVATAR_URL = "./character-avatar/liyue"
const INAZUMA_AVATAR_URL = "./character-avatar/inazuma"

const getCharacterImg = (name) => {
    return require(`./character-img/desktop/${name}.png`).default
}
const getCharacterMobileImg = (name) => {
    //return require(`./character-img/mobile/${name}.png`).default
}
const getQualityImg = (quality) => {
    return require(`./character-quality/${quality}.png`).default
}
const getConversationImg = (name) => {
    return require(`./character-conversation/${name}.png`).default
}

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
        name: "Bennett",
        city: "mondstadt",
        img: require(`${MONDSTADT_AVATAR_URL}/bennett.png`).default
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
    }, {
        id: 1,
        name: "Amber",
        img: getCharacterImg('amber'),
        mobile_img: getCharacterMobileImg('amber'),
        quality_img: getQualityImg('fire'),
        conversation_img: getConversationImg('amber'),
        cv: `IWAMI Manaka`,
        intro: `A perky, straightforward girl, who is also the only Outrider of the Knights of Favonius.
        Her amazing mastery of the glider has made her a three-time winner of the Gliding Champion in Mondstadt.
        As a rising star within the Knights of Favonius, Amber is always ready for any challenging tasks.`
    }, {
        id: 2,
        name: "Lisa",
        img: getCharacterImg('lisa'),
        mobile_img: getCharacterMobileImg('lisa'),
        quality_img: getQualityImg('electro'),
        conversation_img: getConversationImg('lisa'),
        cv: `TANAKA Rie`,
        intro: `She is an intellectual witch who can never get enough naps. As the Librarian of the Knights of Favonius, Lisa is smart in that she always knows exactly what to do with whatever troubles her.
        As much as she loves her sleep, she still manages to keep everything under control in a calm, composed manner.`
    }, {
        id: 3,
        name: "Kaeya",
        img: getCharacterImg('kaeya'),
        mobile_img: getCharacterMobileImg('kaeya'),
        quality_img: getQualityImg('freeze'),
        conversation_img: getConversationImg('kaeya'),
        cv: `TORIUMI Kohsuke`,
        intro: `In the Knights of Favonius, Kaeya is the most trusted aide for the Acting Grand Master Jean. You can always count on him to solve any intractable problems.
        Everyone in Mondstadt loves Kaeya, but no one knows what secrets this witty, charming knight has...`
    }, {
        id: 4,
        name: "Barbara",
        img: getCharacterImg('barbara'),
        mobile_img: getCharacterMobileImg('barbara'),
        quality_img: getQualityImg('water'),
        conversation_img: getConversationImg('barbara'),
        cv: `KITO Akari`,
        intro: `The Deaconess of the Church of Favonius and a shining idol adored by all.
        Although the concept of an idol is rather novel in a city of bards, the people of Mondstadt love Barbara nonetheless.
        "I owe everything to the city's spirit of freedom." — Barbara, regarding her popularity.`
    }, {
        id: 5,
        name: "Diluc",
        img: getCharacterImg('diluc'),
        mobile_img: getCharacterMobileImg('diluc'),
        quality_img: getQualityImg('fire'),
        conversation_img: getConversationImg('diluc'),
        cv: `ONO Kenshou`,
        intro: `As the wealthiest gentleman in Mondstadt, the ever-dapper Diluc always presents himself as the epitome of perfection.
        But behind the courteous visage burns a zealous soul that has sworn to protect Mondstadt at all costs, allowing him to mercilessly vanquish all who threaten his city.`
    }, {
        id: 6,
        name: "Razor",
        img: getCharacterImg('razor'),
        mobile_img: getCharacterMobileImg('razor'),
        quality_img: getQualityImg('electro'),
        conversation_img: getConversationImg('razor'),
        cv: `UCHIYAMA Koki`,
        intro: `Some say he is an orphan raised by wolves. Others say he is a wolf spirit in human form.
        He is most at home in the wild, fighting with claw and thunder.
        To this day the wolf boy can be found prowling the forest, where he and his wolf pack hunt to survive using nothing more than their animal instincts.`
    }, {
        id: 7,
        name: "Venti",
        img: getCharacterImg('venti'),
        mobile_img: getCharacterMobileImg('venti'),
        quality_img: getQualityImg('wind'),
        conversation_img: getConversationImg('venti'),
        cv: `MURASE Ayumu`,
        intro: `A bard that seems to have arrived on some unknown wind — sometimes sings songs as old as the hills, and other times recites poems fresh and new.
        Likes apples and lively places, but is not a fan of cheese or anything sticky.
        When using his Anemo power to control the wind, it often appears as feathers, as he's fond of that which appears light and breezy.`
    }, {
        id: 8,
        name: "Klee",
        img: getCharacterImg('klee'),
        mobile_img: getCharacterMobileImg('klee'),
        quality_img: getQualityImg('fire'),
        conversation_img: getConversationImg('klee'),
        cv: `KUNO Misaki`,
        intro: `Knights of Favonius Spark Knight! Forever with a bang and a flash!
        —And then disappearing from the stern gaze of Acting Grand Master Jean.
        Sure, time in solitary confinement gives lots of time to think about new gunpowder formulas...
        But it'd still be better to not be in solitary in the first place.`
    }, {
        id: 9,
        name: "Bennett",
        img: getCharacterImg('bennett'),
        mobile_img: getCharacterMobileImg('bennett'),
        quality_img: getQualityImg('fire'),
        conversation_img: getConversationImg('bennett'),
        cv: `OSAKA Ryota`,
        intro: `One of the few young adventurers of the Mondstadt Adventurers' Guild, he is always plagued with inexplicable bad luck.
        He is the only active member of his own adventure group, known as "Benny's Adventure Team," after all the other members decided to "take leave" following a series of unfortunate incidents. As a result, the team is currently on the verge of being dissolved.
        Being unable to break the poor boy's heart, Katheryne of the Adventurers' Guild has kept "Benny's Adventure Team" on the books, whilst also hiding from him the fact that all the other members have long since officially left the team.`
    }, {
        id: 10,
        name: "Xiao",
        img: getCharacterImg('xiao'),
        mobile_img: getCharacterMobileImg('xiao'),
        quality_img: getQualityImg('wind'),
        conversation_img: getConversationImg('xiao'),
        cv: `MATSUOKA Yoshitsugu`,
        intro: `One of the mighty and illuminated adepti guarding Liyue, also heralded as the "Vigilant Yaksha."
        Despite his youthful appearance, tales of his exploits have been documented for millennia.       
        He is especially fond of Wangshu Inn's Almond Tofu.     
        This is because it tastes just like the sweet dreams he used to devour.`
    }, {
        id: 10,
        name: "Xiao",
        img: getCharacterImg('xiao'),
        mobile_img: getCharacterMobileImg('xiao'),
        quality_img: getQualityImg('wind'),
        conversation_img: getConversationImg('xiao'),
        cv: `MATSUOKA Yoshitsugu`,
        intro: `One of the mighty and illuminated adepti guarding Liyue, also heralded as the "Vigilant Yaksha."
        Despite his youthful appearance, tales of his exploits have been documented for millennia.       
        He is especially fond of Wangshu Inn's Almond Tofu.     
        This is because it tastes just like the sweet dreams he used to devour.`
    }, {
        id: 11,
        name: "Beidou",
        img: getCharacterImg('beidou'),
        mobile_img: getCharacterMobileImg('beidou'),
        quality_img: getQualityImg('electro'),
        conversation_img: getConversationImg('beidou'),
        cv: `KOSHIMIZU Ami`,
        intro: `Captain of the Crux, with quite the reputation in Liyue.
        There are those who say she can split mountains and part the sea. Others say she draws lightning through her sword. Some say that even the mightiest of sea beasts are no match for her.
        For those not from Liyue, it may sound like a hearty joke, but those that have sailed with her will say—
        "No matter what sea beasts there may be, Beidou will be sure to split them all in two."`
    }, {
        id: 12,
        name: "Ningguang",
        img: getCharacterImg('ningguang'),
        mobile_img: getCharacterMobileImg('ningguang'),
        quality_img: getQualityImg('lava'),
        conversation_img: getConversationImg('ningguang'),
        cv: `OHARA Sayaka`,
        intro: `Owner of the Jade Chamber in the skies above Liyue, there are stories abound about Ningguang, with her elegance and mysterious smile.
        As the Tianquan of the Liyue Qixing, not only does she embody law and order, she also represents fortune and wit.`
    }, {
        id: 13,
        name: "Xiangling",
        img: getCharacterImg('xiangling'),
        mobile_img: getCharacterMobileImg('xiangling'),
        quality_img: getQualityImg('fire'),
        conversation_img: getConversationImg('xiangling'),
        cv: `OZAWA Ari`,
        intro: `The Head Chef at the Wanmin Restaurant and also a waitress there, Xiangling is extremely passionate about cooking and excels at her signature hot and spicy dishes.
        Though still young, Xiangling is a true master of the culinary arts with all the skills of a kitchen veteran. She enjoys a good reputation among the hearty eaters at Chihu Rock.
        There's absolutely no need to be nervous if she wants you to sample her latest creation. It will not disappoint. Promise.`
    }, {
        id: 14,
        name: "Xingqiu",
        img: getCharacterImg('xingqiu'),
        mobile_img: getCharacterMobileImg('xingqiu'),
        quality_img: getQualityImg('water'),
        conversation_img: getConversationImg('xingqiu'),
        cv: `MINAGAWA Junko`,
        intro: `Second son of the Feiyun Commerce Guild, Xingqiu has had a reputation for being studious and polite ever since he was a young child.
        But there is another side to the mild-mannered Xingqiu everyone knows. A daring, adventurous and much more mischievous side...`
    }, {
        id: 15,
        name: "Chongyun",
        img: getCharacterImg('chongyun'),
        mobile_img: getCharacterMobileImg('chongyun'),
        quality_img: getQualityImg('freeze'),
        conversation_img: getConversationImg('chongyun'),
        cv: `SAITO Soma`,
        intro: `An exorcist who roams the land with Liyue as his base of operations, evil spirits fleeing wherever he goes. As the heir to a clan of exorcists, he has always possessed abilities superior to most. 
        However, these abilities are not the result of training, but of an inborn trait — a pure-yang spirit.`
    }, {
        id: 16,
        name: "Qiqi",
        img: getCharacterImg('qiqi'),
        mobile_img: getCharacterMobileImg('qiqi'),
        quality_img: getQualityImg('freeze'),
        conversation_img: getConversationImg('qiqi'),
        cv: `TAMURA Yukari`,
        intro: `An apprentice and herb gatherer at Bubu Pharmacy.
        "Blessed" by the adepti with a body that cannot die, this petite zombie cannot do anything without first giving herself orders to do it.
        Qiqi's memory is like a sieve. Out of necessity, she always carries around a notebook in which she writes anything important that she is sure to forget later.
        But on her worst days, she even forgets to look at her notebook...`
    }, {
        id: 17,
        name: "Keqing",
        img: getCharacterImg('keqing'),
        mobile_img: getCharacterMobileImg('keqing'),
        quality_img: getQualityImg('electro'),
        conversation_img: getConversationImg('keqing'),
        cv: `KITAMURA Eri`,
        intro: `The Yuheng of the Liyue Qixing. Keqing has much to say about Rex Lapis' unilateral approach to policymaking in Liyue ⁠— but in truth, gods admire skeptics such as her quite a lot.
        She firmly believes that humanity's future should be determined by humans themselves, and that they can even do better than the archons and adepti have done for them. In order to prove this, she works harder than anyone else.`
    }, {
        id: 18,
        name: "Zhongli",
        img: getCharacterImg('zhongli'),
        mobile_img: getCharacterMobileImg('zhongli'),
        quality_img: getQualityImg('lava'),
        conversation_img: getConversationImg('zhongli'),
        cv: `MAENO Tomoaki`,
        intro: `Wangsheng Funeral Parlor mysterious consultant. Handsome, elegant, and surpassingly learned.
        Though no one knows where Zhongli is from, he is a master of courtesy and rules. From his seat at Wangsheng Funeral Parlor, he performs all manner of rituals.`
    }, {
        id: 19,
        name: "Kamisato Ayaka",
        img: getCharacterImg('kamisato-ayaka'),
        mobile_img: getCharacterMobileImg('kamisato-ayaka'),
        quality_img: getQualityImg('freeze'),
        conversation_img: getConversationImg('kamisato-ayaka'),
        cv: `HAYAMI Saori`,
        intro: `Daughter of the Yashiro Commission's Kamisato Clan from Inazuma. Dignified and elegant, wise and determined.
        Sincere and pleasant to others. Universally loved by the Inazuma people, she has earned the title of Shirasagi Himegimi.`
    }, {
        id: 20,
        name: "Kaedehara Kazuha",
        img: getCharacterImg('kaedehara-kazuha'),
        mobile_img: getCharacterMobileImg('kaedehara-kazuha'),
        quality_img: getQualityImg('wind'),
        conversation_img: getConversationImg('kaedehara-kazuha'),
        cv: `SHIMAZAKI Nobunaga`,
        intro: `A wandering samurai from Inazuma with a modest and gentle personality.
        Beneath a youthful and carefree demeanor lies a heart that hides a great many burdens from the past. Seemingly easygoing, Kazuha has his own code of conduct.`
    }, {
        id: 21,
        name: "Yoimiya",
        img: getCharacterImg('yoimiya'),
        mobile_img: getCharacterMobileImg('yoimiya'),
        quality_img: getQualityImg('fire'),
        conversation_img: getConversationImg('yoimiya'),
        cv: `UEDA Kana`,
        intro: `A talented pyrotechnician. The current owner of Naganohara Fireworks known as the "Queen of the Summer Festival."
        A girl filled with fiery passion. The uncompromising childish innocence and the obsession with craftsmanship intertwine in her to create a spectacular blaze.`
    }, {
        id: 22,
        name: "Sayu",
        img: getCharacterImg('sayu'),
        mobile_img: getCharacterMobileImg('sayu'),
        quality_img: getQualityImg('wind'),
        conversation_img: getConversationImg('sayu'),
        cv: `SUZAKI Aya`,
        intro: `Sayu, Shuumatsuban's resident ninja, is obsessed with sleeping and growing taller.
        She has mastered all kinds of ninjutsu to run away and hide in pursuit of opportunities to laze around and sleep.
        Such an extraordinary skillset may have very unexpected uses.`
    }, {
        id: 23,
        name: "Sayu",
        img: getCharacterImg('sayu'),
        mobile_img: getCharacterMobileImg('sayu'),
        quality_img: getQualityImg('wind'),
        conversation_img: getConversationImg('sayu'),
        cv: `SUZAKI Aya`,
        intro: `Sayu, Shuumatsuban's resident ninja, is obsessed with sleeping and growing taller.
        She has mastered all kinds of ninjutsu to run away and hide in pursuit of opportunities to laze around and sleep.
        Such an extraordinary skillset may have very unexpected uses.`
    }, {
        id: 24,
        name: "Raiden Shogun",
        img: getCharacterImg('raiden-shogun'),
        mobile_img: getCharacterMobileImg('raiden-shogun'),
        quality_img: getQualityImg('electro'),
        conversation_img: getConversationImg('raiden-shogun'),
        cv: `SAWASHIRO Miyuki`,
        intro: `The Raiden Shogun is the awesome and terrible power of thunder incarnate, the exalted ruler of the Inazuma Shogunate.
        With the might of lightning at her disposal, she commits herself to the solitary pursuit of eternity.`
    }, {
        id: 25,
        name: "Kujou Sara",
        img: getCharacterImg('kujou-sara'),
        mobile_img: getCharacterMobileImg('kujou-sara'),
        quality_img: getQualityImg('electro'),
        conversation_img: getConversationImg('kujou-sara'),
        cv: `SETO Asami`,
        intro: `Leader of the Tenryou Commission's forces. A charismatic woman who acts as swiftly as a storm wind and always honors her word.
        She bears the title of "Devotee of the Divine" and has sworn her allegiance to the Raiden Shogun.
        The eternity that the Shogun pursues is the cause that she is willing to fight for.`
    }, {
        id: 26,
        name: "Sangonomiya Kokomi",
        img: getCharacterImg('sangonomiya-kokomi'),
        mobile_img: getCharacterMobileImg('sangonomiya-kokomi'),
        quality_img: getQualityImg('water'),
        conversation_img: getConversationImg('sangonomiya-kokomi'),
        cv: `MIMORI Suzuko`,
        intro: `Kokomi is the Divine Priestess of Watatsumi Island, and also serves as its supreme leader.
        She is well-versed in the art of war, is good at strategizing, and has keen insights into military affairs. She is also adept at handling domestic affairs, diplomacy, and other matters.
        Still, this unfathomable leader has a mysterious side to her...`
    }, {
        id: 27,
        name: "Thoma",
        img: getCharacterImg('thoma'),
        mobile_img: getCharacterMobileImg('thoma'),
        quality_img: getQualityImg('fire'),
        conversation_img: getConversationImg('thoma'),
        cv: `MORITA Masakazu`,
        intro: `The housekeeper of the Yashiro Commission's Kamisato Clan, and a well-known "fixer" in Inazuma.
        Friendly and approachable, Thoma fits in with the crowd easily wherever he is.
        At first glance, he seems to be a very easygoing person, but he is in fact very responsible. He has an extraordinarily serious side, be it in his work or his interpersonal communications.`
    }, {
        id: 28,
        name: "Arataki Itto",
        img: getCharacterImg('arataki-itto'),
        mobile_img: getCharacterMobileImg('arataki-itto'),
        quality_img: getQualityImg('lava'),
        conversation_img: getConversationImg('arataki-itto'),
        cv: `NISHIKAWA Takanori`,
        intro: `Descendant of the oni, of intrepid spirit and noble heart.   
        Fast as the wind and mighty as thunder.`
    }, {
        id: 29,
        name: "Yae Miko",
        img: getCharacterImg('yae-miko'),
        mobile_img: getCharacterMobileImg('yae-miko'),
        quality_img: getQualityImg('electro'),
        conversation_img: getConversationImg('yae-miko'),
        cv: `SAKURA Ayane`,
        intro: `The head shrine maiden in charge of Grand Narukami Shrine and a descendant of Kitsune lineage, Eternity's servant and friend, and the intimidating editor-in-chief of Yae Publishing House, a publisher of light novels...
        The enigmatic Guuji, with many identities, may never be fully understood by mortals for what she truly is in her heart of hearts.`
    }, 
]