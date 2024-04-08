import React from 'react'
import DealItem from 'components/deal/DealItem'
import { BACKGROUND_BOX_DEAL, DEALS } from 'constants/constant'
import Slider from './Slider'

const SliderDeal = () => {

  return (
    <Slider>
        {
            DEALS.map((deal, index) => (
                <DealItem key={index} deal={deal} boxBg={BACKGROUND_BOX_DEAL[index]} />
            ))
        }
    </Slider>
  )
}

export default SliderDeal
