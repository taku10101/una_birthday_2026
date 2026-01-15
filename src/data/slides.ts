export interface Slide {
  title: string
  titleColor?: string
  icon?: string
  content: string  // Markdown string or path to .md file (e.g., "/slides/slide1.md")
}

export const slides: Slide[] = [
  {
    title: "スライド1",
    titleColor: "#ff69b4",
    icon: "/icon.png",
    content: "/slides/slide1.md"
  },
  {
    title: "スライド2",
    titleColor: "#9370db",
    content: "/slides/slide2.md"
  },
  {
    title: "スライド3",
    titleColor: "#20b2aa",
    content: "/slides/slide3.md"
  },
  {
    title: "最後のスライド",
    titleColor: "#ff6347",
    content: "/slides/slide4.md"
  }
]
