// スライドデータを配列で管理
const slides = [
  {
    title: "スライド1",
    icon: "./icon.png",
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
];

let currentSlide = 0;

// スライドを表示する関数
function showSlide(index) {
  const slide = slides[index];
  
  // アイコンの表示処理
  let iconHtml = '';
  if (slide.icon) {
    // URLの場合は画像として表示、それ以外はそのまま表示（絵文字やUnicode文字など）
    if (slide.icon.startsWith('http://') || slide.icon.startsWith('https://') || slide.icon.startsWith('./') || slide.icon.startsWith('../')) {
      iconHtml = `<img src="${slide.icon}" alt="icon" class="title-icon" />`;
    } else {
      iconHtml = `<span class="title-icon">${slide.icon}</span>`;
    }
  }
  
  const content = `
    <p class="slide-title">${iconHtml}${slide.title}</p>
    <p>${slide.content}</p>
    ${slide.footer ? `<p>${slide.footer}</p>` : ''}
  `;
  $('#slide-content').html(content);
  $('#slide-counter').text(`${index + 1} / ${slides.length}`);

  // ボタンの有効/無効を切り替え
  $('#prev-slide').prop('disabled', index === 0);
  $('#next-slide').prop('disabled', index === slides.length - 1);
}

$(function(){
  // 初期スライドを表示
  showSlide(currentSlide);

  // 前へボタン
  $('#prev-slide').click(function(){
    if (currentSlide > 0) {
      currentSlide--;
      showSlide(currentSlide);
    }
  });

  // 次へボタン
  $('#next-slide').click(function(){
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      showSlide(currentSlide);
    }
  });

  // 封筒を開く
  if (!$('.envelope').hasClass('open')){
    $('.envelope').click(function(){
      $(this).removeClass('new').addClass('open');
    });
  }
});
