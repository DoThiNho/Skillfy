import React, { useState } from 'react'
import BaseNavbar from 'components/base/BaseNavbar'
import BaseMobileNav from 'components/base/BaseMobileNav'
import BaseModal from 'components/base/BaseModal'

const Header = () => {
  const [isShowModal, setIsShowModal] = useState(false)

  const openModal = () => {
    setIsShowModal(true)
  }

  const closeModal = () => {
    setIsShowModal(false)
  }

  return (
    <header className="header">
        <div className="wrapper d-flex justify-content-between">
            <div className="header-logo">
                <img className="logo-image" src="images/header/logo.jpg" alt="" />
                <span className="logo-title">Skillfy</span>
            </div>
            <div className="header-nav">
                <BaseNavbar/>
            </div>
            <BaseMobileNav openModal={openModal}/>
        </div>
        <BaseModal isShow={isShowModal} onClose={closeModal} />
    </header>
  )
}

export default Header
