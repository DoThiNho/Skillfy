import CourseItem from 'components/course/CourseItem'
import { COURSES } from 'constants/constant'
import React from 'react'
import Slider from './Slider'

const SliderCard = () => {

  return (
    <Slider>
      {
        COURSES.map((course, index) => (
            <CourseItem key={index} course={course} />
        ))
      }
    </Slider>
  )
}

export default SliderCard
