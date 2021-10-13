import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './Popup.scss'

function Popup({children, trigger, handleMaskClicked}) {
    const onMaskClicked = () => {
        handleMaskClicked();
    }

    return (
        trigger && (
            <div className="pop-up">
                <div className="pop-up_mask" onClick={onMaskClicked}>
                    <div className="popup_inner">
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
    handleMaskClicked: PropTypes.object
}

export default Popup

