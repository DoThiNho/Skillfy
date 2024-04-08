import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const LayoutNote = () => {
  return (
    <section className='note'>
        <div className="wrapper">
            <div className="note-content">
                <Row>
                    <Col xs={12} md={12} lg={6}>
                        <div class="note-info">
                                <p class="note-text">
                                    I believe in lifelong learning
                                    <br/>
                                    and Skillfy is a great place 
                                    <br/>
                                    to learn from experts. I've 
                                    <br/>
                                    learned a lot and  recommended 
                                    <br/>
                                    it to all my friends.
                                </p>
                                <span class="note-name">Riaz Surti|Hearthy Foods</span>
                            </div>
                    </Col>
                    <Col xs={12} md={12} lg={6}>
                        <div class="note-img">
                            <img src="/images/courses/note.jpg" alt=""/>
                            <div class="note-icon">
                                <FontAwesomeIcon icon={faPlay} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </section>
  )
}

export default LayoutNote
