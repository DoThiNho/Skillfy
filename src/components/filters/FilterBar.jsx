import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import FilterBarOptions from 'components/filters/FilterBarOptions'

const FilterBar = () => {
  return (
        <Row>
            <Col xs={12} md={3} lg={2} >
                <Form.Select className='filter-text' size="xs">
                    <option>Popular</option>
                </Form.Select>
            </Col>
            <Col className='select-filter' xs={12} md={6} lg={8}>
                <FilterBarOptions/>
            </Col>
            <Col xs={12} md={3} lg={2}>
                <div class="filter-text action-filter">
                    <span>
                        <svg fill="#6e688d" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http:/www.w3.org/2000/svg">
                            <path d="M30 6.749h-28c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h28c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM24 14.75h-16c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h16c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0zM19 22.75h-6.053c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25v0h6.053c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25v0z"></path>
                        </svg>
                    </span>
                    <span>Filter</span>
                </div>
            </Col>
        </Row>
  )
}

export default FilterBar
