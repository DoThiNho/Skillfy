import React from 'react'
import { Card, CardBody } from 'react-bootstrap'

const DealItem = ({ deal, boxBg = "" }) => {
  return (
    <Card className="deal">
        <CardBody className='deal-content'>
            <div class="deal-info">
                    <p class="info-title">{deal.title}</p>
                    <p class="info-description">{deal.description}</p>
                </div>
                <div class="deal-img">
                    <img src={deal.image} alt=""/>
                </div>
                <div class="shape">
                    <div class="shape__svg">
                        <svg xmlns="http:/www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#f5ecef" fill-opacity="1" d="M0,128L60,154.7C120,181,240,235,360,229.3C480,224,600,160,720,112C840,64,960,32,1080,58.7C1200,85,1320,171,1380,213.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                        </svg>
                </div>
                <div class="box"></div>
            </div>
        </CardBody>
        <div class={`total-count ${boxBg}`}>
            <p class="title">Total Discount</p>
            <p class="number-percent">50%</p>
        </div>
    </Card>
  )
}

export default DealItem
