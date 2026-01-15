import Letter from '../Letter/Letter'
import { Slide } from '../../data/slides'
import { useState } from 'react'
import styles from './Envelope.module.css'

interface EnvelopeProps {
  isOpen: boolean
  onEnvelopeClick: () => void
  slides: Slide[]
}

export default function Envelope({ isOpen, onEnvelopeClick, slides }: EnvelopeProps) {
  const [isHidden, setIsHidden] = useState(false)

  const handleLetterComplete = () => {
    setIsHidden(true)
  }

  const envelopeClasses = [
    styles.envelope,
    isOpen ? styles.open : styles.new,
    isHidden && styles.hide
  ].filter(Boolean).join(' ')

  if (isHidden) {
    return null
  }

  return (
    <div className={envelopeClasses} onClick={!isOpen ? onEnvelopeClick : undefined}>
      <div className={styles.front}>
        <div className={styles.mail}>
          <p>Happy Birthday una</p>
          <b className="click">Click!!</b>
        </div>
      </div>
      <div className={styles.back}>
        <Letter slides={slides} onComplete={handleLetterComplete} />
        <div className={`${styles.flip} ${styles.leftFlip}`}></div>
        <div className={`${styles.flip} ${styles.rightFlip}`}></div>
        <div className={`${styles.flip} ${styles.bottomFlip}`}></div>
        <div className={`${styles.flip} ${styles.topFlip}`}></div>
      </div>
    </div>
  )
}
