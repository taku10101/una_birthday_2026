import { useState } from 'react'
import { Slide } from '../data/slides'

export function useSlide(slides: Slide[]) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const goToPrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return {
    currentSlide,
    currentSlideData: slides[currentSlide],
    goToNext,
    goToPrev,
    isFirst: currentSlide === 0,
    isLast: currentSlide === slides.length - 1,
    totalSlides: slides.length
  }
}
