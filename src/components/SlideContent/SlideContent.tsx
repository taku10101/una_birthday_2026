import { Slide } from '../../data/slides'
import Markdown from 'react-markdown'
import { useState, useEffect } from 'react'
import { loadMarkdown } from '../../utils/markdownLoader'
import styles from './SlideContent.module.css'

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
      return <img src={slide.icon} alt="icon" className={styles.titleIcon} />
    } else {
      return <span className={styles.titleIcon}>{slide.icon}</span>
    }
  }

  return (
    <div className={styles.slideContent}>
      <p className={styles.slideTitle} style={{ color: slide.titleColor }}>
        {renderIcon()}
        {slide.title}
      </p>
      <div className={styles.slideContentMarkdown}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Markdown>{markdownContent}</Markdown>
        )}
      </div>
    </div>
  )
}
