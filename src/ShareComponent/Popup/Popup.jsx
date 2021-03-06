import React from 'react'
import PropTypes from 'prop-types'
import styles from './Popup.module.scss'

function Popup({children, trigger, handleMaskClicked}) {
    return (
        trigger && (
            <div className={styles['pop-up']}>
                <div className={styles['pop-up_mask']} onClick={handleMaskClicked}>
                    <div className={styles['pop-up_inner']}>
                        {children}
                    </div>
                </div>
            </div>
        )
    )
}

Popup.propTypes = {
    children: PropTypes.object,
    trigger: PropTypes.bool.isRequired,
    handleMaskClicked: PropTypes.func
}

export default Popup

