import SliderCourse from 'components/sliders/SliderCourse'
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const BaseFeatures = () => {
  return (
    <section className='feature' id='feature'>
        <div className="wrapper">
          <div className="feature-header">
            <Row className='align-items-center'>
                <Col xs={12} md={8} lg={9}>
                    <h3 class="feature-title">Recommended For you</h3>
                </Col>
                <Col xs={12} md={4} lg={3} className='feature-view'>
                    <select class="feature-category">
                      <option value="">Design</option>
                    </select>
                    <Button className='btn-view-all'>View all</Button>
                </Col>
            </Row>
          </div>
          <SliderCourse/>
        </div>
    </section>
  )
}

export default BaseFeatures
