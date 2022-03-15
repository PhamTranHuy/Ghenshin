import { CHARACTER_AVATAR_LIST } from "./data"

export const getAvatars = async (city) => {
    return CHARACTER_AVATAR_LIST.filter((item) => {
        return item.city === city;
    })
}