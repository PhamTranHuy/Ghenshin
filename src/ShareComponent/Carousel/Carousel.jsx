import React from 'react'
import PropTypes from 'prop-types'
import styles from './Carousel.module.scss'

function Carousel({children}) {
    return (
        <div className={styles['container']}>
            <div className={styles['carousel-outer']}>
                <div className={styles['carousel-inner']}>
                    {children.map((item, i) => (
                        <div key={i} className={styles['item']}>{item}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

Carousel.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
        ]).isRequired
}

export default Carousel

