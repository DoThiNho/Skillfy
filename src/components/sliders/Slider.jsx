import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'
import { getMaxScrollLeft } from 'utils/util'

const Slider = ({ children }) => {
    const refCards = useRef(null)
    const refProgress = useRef(null)
    const refProgressBar = useRef(null)
  
    useEffect(() => {
      if(refCards && refCards.current) {
          refCards.current.addEventListener("scroll", () => {
              handleHorizantalScroll()
          })
      }
    }, [])
  
    const handleHorizantalScroll = () => {
      const maxScrollLeft = getMaxScrollLeft(refCards.current)
      const scrollPosition = refCards.current.scrollLeft
      const thumbPosition = (scrollPosition / maxScrollLeft) * (refProgress.current.clientWidth - refProgressBar.current.offsetWidth)
      refProgressBar.current.style.left = `${thumbPosition}px`
    };
  
    const handleButton = (scrollAmount) => {
      handleHorizantalScroll()
      refCards.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
    
  return (
    <div className='slider-wrapper'>
        <div ref={refCards} className="cards">
            {children}
        </div>
        
        <div class="btn-wrap">
            <button class="btn btn-direction" onClick={() => handleButton(-refCards.current.clientWidth)}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <div ref={refProgress} class="progress">
                <div ref={refProgressBar} class="progress__bar"></div>
            </div>
            <button class="btn btn-direction" onClick={() => handleButton(refCards.current.clientWidth)}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    </div>
  )
}

export default Slider
