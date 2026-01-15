import { Slide } from '../data/slides'

interface SlideContentProps {
  slide: Slide
}

export default function SlideContent({ slide }: SlideContentProps) {
  const renderIcon = () => {
    if (!slide.icon) return null

    const isImageUrl = slide.icon.startsWith('http://') || 
                      slide.icon.startsWith('https://') || 
                      slide.icon.startsWith('./') || 
                      slide.icon.startsWith('../') ||
                      slide.icon.startsWith('/')

    if (isImageUrl) {
      return <img src={slide.icon} alt="icon" className="title-icon" />
    } else {
      return <span className="title-icon">{slide.icon}</span>
    }
  }

  return (
    <div className="slide-content">
      <p className="slide-title">
        {renderIcon()}
        {slide.title}
      </p>
      <p>{slide.content}</p>
      {slide.footer && <p>{slide.footer}</p>}
    </div>
  )
}
