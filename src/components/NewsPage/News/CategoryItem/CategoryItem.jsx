import clsx from "clsx"
import "./CategoryItem.scss"

function CategoryItem({title, onClick, active}) {
    return (
        <li className={clsx("category-item", active ? "active" : false)} onClick={onClick}>
            {title}
        </li>
    )
}

export default CategoryItem
