export interface Slide {
  title: string
  icon?: string
  content: string
  footer?: string
}

export const slides: Slide[] = [
  {
    title: "スライド1",
    icon: "/icon.png",
    content: "ここに文字をたくさんかきます",
    footer: ""
  },
  {
    title: "スライド2",
    content: "2枚目のスライド内容です",
    footer: ""
  },
  {
    title: "スライド3",
    content: "3枚目のスライド内容です",
    footer: ""
  },
  {
    title: "最後のスライド",
    content: "ありがとうございました",
    footer: "From Your Friend"
  }
]
