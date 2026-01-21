export interface Slide {
  title: string
  titleColor?: string
  icon?: string
  content: string  // Content string or path to .md/.html file (e.g., "/slides/slide1.md" or "/slides/slide1.html")
}

export const slides: Slide[] = [
  {
    title: "たくと",
    titleColor: "#ff69b4",
    icon: "/tak.png",
    content: "/slides/tak.html"
  },
  {
    title:"薄切り",
    titleColor: "#ff69b4",
    icon: "/usugiri.png",
    content: "/slides/usugiri.html"
  },
  {
    title: "まめ",
    titleColor: "#ff69b4",
    icon: "/mame.png",
    content: "/slides/mame.html"
  },
  {
    title: "しらす",
    titleColor: "#ff69b4",
    icon: "/sirasu.png",
    content: "/slides/sirasu.html"
  },
  {
    title: "88",
    titleColor: "#ff69b4",
    icon: "/88.png",
    content: "/slides/88.html"
  },

]
