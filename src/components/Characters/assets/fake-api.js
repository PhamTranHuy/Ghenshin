import { CHARACTER_AVATAR_LIST } from "./data"
import { CHARACTER_DETAIL_LIST } from "./data";

export const getAvatars = async (city) => {
    return CHARACTER_AVATAR_LIST.filter((item) => {
        return item.city === city;
    })
}
export const getDetail = async (name) => {
    return CHARACTER_DETAIL_LIST.filter((item) => {
        return item.name === name;
    })
}