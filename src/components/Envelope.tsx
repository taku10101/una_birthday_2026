import Letter from './Letter'
import { Slide } from '../data/slides'
import { useState } from 'react'

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
        <Letter slides={slides} onComplete={handleLetterComplete} />
        <div className="flip left-flip"></div>
        <div className="flip right-flip"></div>
        <div className="flip bottom-flip"></div>
        <div className="flip top-flip"></div>
      </div>
    </div>
  )
}
