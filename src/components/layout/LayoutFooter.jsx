import { faFacebookF, faGoogle, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FOOTER_INFOS } from 'constants/constant'
import React from 'react'
import { Col, Nav, Row } from 'react-bootstrap'

const LayoutFooter = () => {
  return (
    <footer className='footer' id='footer'>
      <div className="wrapper">
        <Row>
            {
              FOOTER_INFOS.map((info, index) => (
                <Col xs={12} md={6} lg={3}>
                     <h3 className="footer-title">{info.title}</h3>
                        <Nav className="footer-list">
                          {
                            info.links.map((link, index) => (
                              <Nav.Item className="footer-item">
                                <Nav.Link href="#" className="footer-link">{link}</Nav.Link>
                            </Nav.Item>
                            ))
                          }
                      </Nav>
                </Col>
              ))
            }
            <Col xs={12} className='divider'></Col>
        </Row>
        <Row className='mt-4'>
          <Col xs={12} md={8} lg={8}>
            <div className="slogan">
                <p>
                    © 2015-2020 Skillfy Education Private limited All rights reserved
                </p>
            </div>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <Nav className="social">
              <Nav.Item>
                <Nav.Link href="#" className="social-item">
                  <FontAwesomeIcon icon={faFacebookF} />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="social-item">
                  <FontAwesomeIcon icon={faTwitter} />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="social-item">
                  <FontAwesomeIcon icon={faGoogle} />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="social-item">
                  <FontAwesomeIcon icon={faLinkedin} />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </div>
    </footer>
  )
}

export default LayoutFooter
