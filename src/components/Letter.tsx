import SlideContent from './SlideContent'
import { Slide } from '../data/slides'
import { useSlide } from '../hooks/useSlide'
import { useState } from 'react'

interface LetterProps {
  slides: Slide[]
  onComplete?: () => void
}

export default function Letter({ slides, onComplete }: LetterProps) {
  const { currentSlide, currentSlideData, goToNext, goToPrev, isFirst, isLast, totalSlides } = useSlide(slides)
  const [isHidden, setIsHidden] = useState(false)

  const handleNextClick = () => {
    if (isLast) {
      setIsHidden(true)
      onComplete?.()
    } else {
      goToNext()
    }
  }

  if (isHidden) {
    return null
  }

  return (
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
          disabled={isLast}
        >
          次へ →
        </button>
      </div>
    </div>
  )
}
