import { FILTER_CATEGORY_COURSE } from 'constants/constant'
import React from 'react'


const FilterBarOptions = () => {
  return (
    <>
        <ul class="filter-items d-lg-flex d-none">
            {
              FILTER_CATEGORY_COURSE.map((categoryCourse, index) => {
                return (
                  <li 
                    key={index} 
                    class="filter-item">
                      {categoryCourse.value}
                  </li>
                )
              })
            }
        </ul>
        <select class="form-select filter-text d-lg-none d-block" name="" id="">
          {
            FILTER_CATEGORY_COURSE.map((categoryCourse, index) => {
              return (
                <option key={index} value={categoryCourse.value}>
                    {categoryCourse.value}
                </option>
              )
            })
          }
        </select>
    </>
  )
}

export default FilterBarOptions
