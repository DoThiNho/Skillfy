import { faSquareCheck } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const BaseAbout = () => {
  return (
    <section className='about' id='about'>
        <div className="wrapper">
            <Row>
                <Col xs={12} md={12} lg={8}>
                    <div className="about-content">
                        <div class="about-info">
                            <span class="about-title">Know about learning learning platform</span>
                            <div class="about-detail">
                                <ul class="about-items">
                                    <li class="about-item">
                                        <FontAwesomeIcon icon={faSquareCheck} className='about-icon'/>
                                        <span>Free E-book, Video & Consolation</span>
                                    </li>
                                    <li class="about-item">
                                        <FontAwesomeIcon icon={faSquareCheck} className='about-icon'/>
                                        <span>Top instructors from around world</span>
                                    </li>
                                    <li class="about-item">
                                        <FontAwesomeIcon icon={faSquareCheck} className='about-icon'/>
                                        <span>Top courses for your team</span>
                                    </li>
                                </ul>
                            </div>
                            <Button className='btn-start'>Start learning now</Button>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={12} lg={4}>
                    <div class="about-img">
                        <img src="images/about/about.jpg" alt=""/>
                    </div>
                </Col>
            </Row>
        </div>
    </section>
  )
}

export default BaseAbout
