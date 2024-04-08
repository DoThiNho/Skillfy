import React from 'react'
import { faAngleDown, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NAV_LINK } from 'constants/constant'
import { Nav } from 'react-bootstrap'


const Navbar = () => {
  return (
    <Nav className="nav-items">
            {
                NAV_LINK.map((link, index) => {
                    return (
                        <Nav.Item key={index}>
                            <Nav.Link href="#home" className="item-link">{link.name}</Nav.Link>
                            <FontAwesomeIcon icon={faAngleDown} size='xs'/>
                        </Nav.Item>
                    )
                })
            }
            <li className="nav-item">
                <FontAwesomeIcon icon={faSearch} />
            </li>
            <li className="nav-item">
                <FontAwesomeIcon icon={faCartShopping} />
            </li>
            <li className="nav-item">
                <div className="user">
                    <img src="images/header/avatar.jpg" alt=""/>
                    <div className="user-info">
                        <span className="info-name">Abhinav</span>
                        <FontAwesomeIcon icon={faAngleDown} size='xs'/>
                    </div>
                </div>
            </li>
        </Nav>
  )
}

export default Navbar
