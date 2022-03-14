import { CHARACTER_IMG_LIST } from "./data"

export const getAvatars = async (city) => {
    return CHARACTER_IMG_LIST.filter((item) => {
        return item.city === city;
    })
}