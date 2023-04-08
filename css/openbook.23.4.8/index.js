let book = document.getElementsByClassName('book')[0],
    leftPage = document.querySelector('.front-cover'),
    card = document.querySelector('.card'),
    shadow = document.querySelector('.shadow'),
    hold = false,
    clamp = function(val, min, max) {
      return Math.max(min, Math.min(val, max))
    }

// window.addEventListener('mousemove', function() {
//   console.log(123);
// })

// 鼠标是按住的状态
leftPage.onmousedown = function() {
  hold = true
}
window.onmouseup = function() {
  hold = false
}


window.onmousemove = function(evt) {
  if (hold === true) {
    console.log(evt.pageX);

    var angle = clamp((window.innerWidth / 2 - evt.pageX + 300) / 300 * -90, -180, 0)

    leftPage.style.transform = `rotateY(${angle}deg)`
    card.style.transform =`rotateX(${angle/3}deg)`
    shadow.style.transform =`skewX(${angle/8}deg)`
    book.style.transform = `rotateX(${60+angle/8}deg)`
  }
}