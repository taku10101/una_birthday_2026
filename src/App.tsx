import { useState } from 'react'
import Envelope from './components/Envelope'
import { slides } from './data/slides'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleEnvelopeClick = () => {
    if (!isOpen) {
      setIsOpen(true)
    }
  }

  return (
    <Envelope
      isOpen={isOpen}
      onEnvelopeClick={handleEnvelopeClick}
      slides={slides}
    />
  )
}

export default App
