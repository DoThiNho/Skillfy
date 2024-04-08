import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const SearchBar = () => {
  return (
    <section class="search" id="search">
        <Container className='wrapper'>
                <Row>
                    <Col xs={12} md={4} lg={3}>
                        <h3 class="search-title">Courses</h3>
                    </Col>
                    <Col xs={12} md={8} lg={9}>
                    <div class="form-search">
                            <input type="text" class="input-search" placeholder="Search your favourite course"/>
                            <Button className='btn-search'>
                                <FontAwesomeIcon icon={faSearch} />
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
    </section>
  )
}

export default SearchBar
