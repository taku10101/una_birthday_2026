import SlideContent from '../SlideContent/SlideContent'
import { Slide } from '../../data/slides'
import { useSlide } from '../../hooks/useSlide'
import { useState } from 'react'
import styles from './Letter.module.css'

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
    <div className={styles.letter}>
      <SlideContent slide={currentSlideData} />
      <div className={styles.slideNav}>
        <button
          className={styles.navBtn}
          onClick={goToPrev}
          disabled={isFirst}
        >
          ← 前へ
        </button>
        <span className={styles.slideCounter}>
          {currentSlide + 1} / {totalSlides}
        </span>
        <button
          className={styles.navBtn}
          onClick={handleNextClick}
          disabled={isLast}
        >
          次へ →
        </button>
      </div>
    </div>
  )
}
