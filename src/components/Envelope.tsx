import { useState } from 'react'
import SlideContent from './SlideContent'
import { Slide } from '../data/slides'
import { useSlide } from '../hooks/useSlide'

interface EnvelopeProps {
  isOpen: boolean
  onEnvelopeClick: () => void
  slides: Slide[]
}

export default function Envelope({ isOpen, onEnvelopeClick, slides }: EnvelopeProps) {
  const { currentSlide, currentSlideData, goToNext, goToPrev, isFirst, isLast, totalSlides } = useSlide(slides)
  const [isHidden, setIsHidden] = useState(false)

  const handleNextClick = () => {
    if (isLast) {
      setIsHidden(true)
    } else {
      goToNext()
    }
  }

  const envelopeClasses = [
    isOpen ? 'open' : 'new',
    isHidden && 'hide'
  ].filter(Boolean).join(' ')

  if (isHidden) {
    return null
  }

  return (
    <div className={`envelope ${envelopeClasses}`} onClick={!isOpen ? onEnvelopeClick : undefined}>
      <div className="front">
        <div className="mail">
          <p>Happy Birthday una</p>
          <b className="click">Click!!</b>
        </div>
      </div>
      <div className="back">
        <div className="letter">
          <SlideContent slide={currentSlideData} />
          <div className="slide-nav">
            <button 
              className="nav-btn" 
              onClick={goToPrev}
              disabled={isFirst}
            >
              ← 前へ
            </button>
            <span className="slide-counter">
              {currentSlide + 1} / {totalSlides}
            </span>
            <button 
              className="nav-btn" 
              onClick={handleNextClick}
              disabled={false}
            >
              次へ →
            </button>
          </div>
        </div>
        <div className="flip left-flip"></div>
        <div className="flip right-flip"></div>
        <div className="flip bottom-flip"></div>
        <div className="flip top-flip"></div>
      </div>
    </div>
  )
}
