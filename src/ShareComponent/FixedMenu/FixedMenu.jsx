import React from 'react'
import PropTypes from 'prop-types'
import './FixedMenu.scss'

function FixedMenu({children}) {
    return (
        <div className="fixed-menu-container">
            <div className="button"></div>
            {children}
        </div>
    )
}

FixedMenu.propTypes = {
    children: PropTypes.object
}

export default FixedMenu

