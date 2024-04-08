import React from 'react'
import { Card, CardBody, CardText, CardTitle } from 'react-bootstrap'

const BlogItem = ({ blog, bgColor }) => {
  return (
    <Card className='blog'>
        <div className='blog-top'>
          <div className="blog-img">
              <img src={blog.image} alt=""/>
          </div>
          <div className={`blog-box ${bgColor}`}></div>
        </div>
        <CardBody>
            <CardTitle className='blog-title'>{blog.name}</CardTitle>
            <CardText className='blog-description'>{blog.description}</CardText>
        </CardBody>
    </Card>
  )
}

export default BlogItem
