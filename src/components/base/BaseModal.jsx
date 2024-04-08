import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NAV_LINK } from 'constants/constant'
import React from 'react'
import { Modal, Nav } from 'react-bootstrap'

const BaseModal = ({ isShow, onClose }) => {
  return (
    <Modal show={isShow} onHide={onClose} className='p-0'>
        <Modal.Header closeButton>
          <Modal.Title>MENU</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
    </Modal>
  )
}

export default BaseModal
