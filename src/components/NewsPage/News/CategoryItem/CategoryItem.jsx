import "./CategoryItem.scss"

function CategoryItem({title, onClick}) {
    return (
        <li className="category-item" onClick={onClick}>
            {title}
        </li>
    )
}

export default CategoryItem
