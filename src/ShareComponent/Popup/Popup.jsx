import React from 'react'
import PropTypes from 'prop-types'

function Popup({children, trigger}) {
    return (
        trigger && (
            <div className="pop-up">
                <div className="pop-up_inner">
                    {children}
                </div>
            </div>
        )
    )
}

Popup.propTypes = {
    children: PropTypes.func,
    trigger: PropTypes.bool.isRequired
}

export default Popup

