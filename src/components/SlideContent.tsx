import { Slide } from '../data/slides'
import Markdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import rehypeRaw from 'rehype-raw'
import { useState, useEffect, useRef } from 'react'
import { loadMarkdown } from '../utils/markdownLoader'

interface SlideContentProps {
  slide: Slide
}

export default function SlideContent({ slide }: SlideContentProps) {
  const [content, setContent] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isHtml, setIsHtml] = useState<boolean>(false)
  const [isScrollable, setIsScrollable] = useState<boolean>(false)
  const [showScrollIndicator, setShowScrollIndicator] = useState<boolean>(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoading(true)
    const isHtmlFile = slide.content.endsWith('.html')
    setIsHtml(isHtmlFile)

    loadMarkdown(slide.content)
      .then((loadedContent) => {
        setContent(loadedContent)
        setIsLoading(false)
      })
      .catch(() => {
        setContent('Error loading content')
        setIsLoading(false)
      })
  }, [slide.content])

  useEffect(() => {
    const checkScrollable = () => {
      if (scrollRef.current) {
        const element = scrollRef.current
        const isScrollableElement = element.scrollHeight > element.clientHeight
        setIsScrollable(isScrollableElement)
        setShowScrollIndicator(isScrollableElement && element.scrollTop === 0)
      }
    }

    // コンテンツ読み込み後にチェック
    if (!isLoading) {
      setTimeout(checkScrollable, 100)
    }

    const handleScroll = () => {
      if (scrollRef.current) {
        const element = scrollRef.current
        setShowScrollIndicator(
          isScrollable && element.scrollTop === 0
        )
      }
    }

    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', checkScrollable)
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', checkScrollable)
      }
    }
  }, [isLoading, isScrollable])

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

  const renderContent = (showIndicator: boolean = true) => (
    <div
      className={`slide-content-markdown ${isScrollable && showIndicator ? 'is-scrollable' : ''}`}
      ref={showIndicator ? scrollRef : undefined}
    >
      {isLoading ? (
        <p>Loading...</p>
      ) : isHtml ? (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <Markdown
          remarkPlugins={[remarkBreaks]}
          rehypePlugins={[rehypeRaw]}
          components={{
            p: ({ children }) => <p style={{ margin: '8px 0' }}>{children}</p>,
            br: () => <br />
          }}
        >
          {content}
        </Markdown>
      )}
      {showIndicator && showScrollIndicator && (
        <div className="scroll-indicator">
          <span className="scroll-arrow">↓</span>
          <span className="scroll-text">スクロールできます</span>
        </div>
      )}
    </div>
  )

  return (
    <>
      <div className="slide-content">
        <p className="slide-title" style={{ color: slide.titleColor }}>
          {renderIcon()}
          {slide.title}
        </p>
        {renderContent()}
        <div className="right-scroll-arrow">↓</div>
      </div>
    </>
  )
}
