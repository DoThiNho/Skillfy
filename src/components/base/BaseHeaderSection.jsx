import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const BaseHeaderSection = ({ title }) => {
  return (
    <div className="header-section">
        <Row className='align-items-center'>
              <Col xs={12} md={12} lg={10}>
                <h3 class="section-title">{title}</h3>
              </Col>
              <Col xs={12} md={12} lg={2} className='btn-container'>
                <Button className='btn-view-all'>View all</Button>
              </Col>
          </Row>
    </div>
  )
}

export default BaseHeaderSection
