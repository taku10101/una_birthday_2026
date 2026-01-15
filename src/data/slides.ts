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
]
