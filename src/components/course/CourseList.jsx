import React from 'react'
import FilterBar from 'components/filters/FilterBar'
import { Col, Container, Row } from 'react-bootstrap'
import { COURSES } from 'constants/constant'
import CourseItem from './CourseItem'

const CourseList = () => {
  return (
    <section id="products" class="products">
        <Container className="wrapper">
          <FilterBar/>
          <Row className='mt-4'>
            {
              COURSES.map(( course ) => {
                  return (
                    <Col xs={12} md={6} lg={4}>
                      <CourseItem course={course}/>
                    </Col>
                  )
              })
            }
          </Row>
        </Container>
    </section>
  )
}

export default CourseList
