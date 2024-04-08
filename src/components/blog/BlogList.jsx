import { BACKGROUND_BOX_BLOG, BLOGS } from 'constants/constant'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BlogItem from './BlogItem'
import BaseHeaderSection from 'components/base/BaseHeaderSection'

const BlogList = () => {
  return (
    <section className='blogs' id='blogs'>
        <div className="wrapper">
            <BaseHeaderSection title={"Classes Taught be Real Creators"}/>
            <Row>
                {
                    BLOGS.map((blog, index) => (
                        <Col xs={12} md={6} lg={4}>
                            <BlogItem blog={blog} bgColor={BACKGROUND_BOX_BLOG[index]}/>
                        </Col>
                    ))
                }
            </Row>
        </div>
    </section>
  )
}

export default BlogList
