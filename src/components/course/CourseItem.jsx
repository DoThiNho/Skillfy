import { faCirclePlay, faEye, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card, CardImg, CardBody, CardTitle, } from 'react-bootstrap'
import { formatNumber } from 'utils/util'

const CourseItem = ({ course }) => {
  return (
    <Card key={course.id} className='course'>
      <div class="course-top">
          <CardImg src={course.image}/>
          <div class="course-info">
              <div class="info-item info-feedback">
                  <FontAwesomeIcon icon={faStar} className='icon-star'/>
                  <span>{course.rating.rate} ({course.rating.count})</span>
              </div>
              <div class="info-item info-view">
                  <FontAwesomeIcon icon={faEye} className='icon-eye'/>
                  <span>{formatNumber(course.view)}</span>
              </div>
              <div class="info-item info-view">
                  <FontAwesomeIcon icon={faCirclePlay} className='icon-right-circle'/>
                  <span>{course.videoCount} Lession</span>
              </div>
          </div>
      </div>
      <div class="divider"></div>
      <CardBody>
          <CardTitle  className="course-title">{course.title}</CardTitle>
          <div class="course-detail">
              <div class="avatar">
                  <img src={course.course_owner.avatar} alt=""/>
                  <span>{course.course_owner.name}</span>
              </div>
              <div class="price">
                  <span class="price-old">${course.priceOld}</span>
                  <span class="price-new">${course.priceNew}</span>
              </div>
         </div>
      </CardBody>
    </Card>
  )
}

export default CourseItem
