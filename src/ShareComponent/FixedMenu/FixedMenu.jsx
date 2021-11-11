import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './FixedMenu.scss'

function FixedMenu({children}) {
    const [open, setOpen] = useState(true);
    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        const scrollHandle = () => {
            if (window.scrollY <= 400 && !hidden) {
                setHidden(true)
            } else if (window.scrollY > 400 && hidden) {
                setHidden(false)
            }
        }
        document.addEventListener('scroll', scrollHandle)
        return () => {
            document.removeEventListener('scroll', scrollHandle)
        }
    }, [hidden])

    const handleClicked = () => {
        setOpen((open) => !open)
    }

    return (
        <div className={`fixed-menu-container ${(hidden ? 'hidden' : '')}`} style={!open ? {transform: 'translate(100%)'} : {}}>
            <div className={`button ${(open ? 'active' : '')}`} onClick={handleClicked}></div>
            {children}
        </div>
    )
}

FixedMenu.propTypes = {
    children: PropTypes.array
}

export default FixedMenu

