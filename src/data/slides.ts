export interface Slide {
  title: string
  titleColor?: string
  icon?: string
  content: string  // Markdown string or path to .md file (e.g., "/slides/slide1.md")
}

export const slides: Slide[] = [
  {
    title: "たくと",
    titleColor: "#ff69b4",
    icon: "/tak.png",
    content: "/slides/tak.md"
  },
  {
    title:"薄切り",
    titleColor: "#ff69b4",
    icon: "/usugiri.png",
    content: "/slides/usugiri.md"
  },
  {
    title: "まめ",
    titleColor: "#ff69b4",
    icon: "/mame.png",
    content: "/slides/mame.md"
  },
  {
    title: "しらす",
    titleColor: "#ff69b4",
    icon: "/sirasu.png",
    content: "/slides/sirasu.md"
  },
  {
    title: "88",
    titleColor: "#ff69b4",
    icon: "/88.png",
    content: "/slides/88.md"
  },

]
