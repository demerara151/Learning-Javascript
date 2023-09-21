// requestAnimationFrame()を利用した反復処理の例
const spinner = document.querySelector("div")
let rotateCount = 0
let startTime

function draw(timestamp) {
  if (!startTime) {
    startTime = timestamp
  }

  rotateCount = (timestamp - startTime) / 3

  if (rotateCount > 359) {
    rotateCount %= 360
  }

  spinner.style.transform = "rotate(" + rotateCount + "deg)"

  requestAnimationFrame(draw)
}

draw(0)
