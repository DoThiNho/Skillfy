import BaseHeaderSection from 'components/base/BaseHeaderSection'
import SliderDeal from 'components/sliders/SliderDeal'
import React from 'react'

const LayoutDeal = () => {
  return (
    <section className='deals' id='deals'>
        <div className="wrapper">
            <BaseHeaderSection title={"Top Education offers and deals are listed here"}/>
            <SliderDeal/>
        </div>
    </section>
  )
}

export default LayoutDeal
