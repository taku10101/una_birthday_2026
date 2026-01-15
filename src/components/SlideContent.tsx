import { Slide } from '../data/slides'
import Markdown from 'react-markdown'
import { useState, useEffect } from 'react'
import { loadMarkdown } from '../utils/markdownLoader'

interface SlideContentProps {
  slide: Slide
}

export default function SlideContent({ slide }: SlideContentProps) {
  const [markdownContent, setMarkdownContent] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsLoading(true)
    loadMarkdown(slide.content)
      .then((content) => {
        setMarkdownContent(content)
        setIsLoading(false)
      })
      .catch(() => {
        setMarkdownContent('Error loading content')
        setIsLoading(false)
      })
  }, [slide.content])

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
      <p className="slide-title" style={{ color: slide.titleColor }}>
        {renderIcon()}
        {slide.title}
      </p>
      <div className="slide-content-markdown">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Markdown>{markdownContent}</Markdown>
        )}
      </div>
    </div>
  )
}
