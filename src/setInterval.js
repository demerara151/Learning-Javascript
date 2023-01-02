// setInterval()を利用して一定時間ごとに繰り返し実行する
const displayTime = () => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  console.log(time);
};

const clock = setInterval(displayTime, 1000);

// clearInterval でインターバルをクリアする
setTimeout(() => {
  clearInterval(clock);
}, 5000);
