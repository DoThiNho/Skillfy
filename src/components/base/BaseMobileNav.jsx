import { faBars, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const MobileNav = ({ openModal }) => {
  return (
    <div className="mobile-menu">
        <div className="menu-icons">
            <button className="btn btn-icon menu-icon">
                <FontAwesomeIcon icon={faSearch} />
            </button>
            <button className="btn btn-icon menu-icon">
                <FontAwesomeIcon icon={faCartShopping} />
            </button>
            <button className="btn btn-icon btn-menu menu-icon" onClick={openModal}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </div>
    </div>
  ) 
}

export default MobileNav
