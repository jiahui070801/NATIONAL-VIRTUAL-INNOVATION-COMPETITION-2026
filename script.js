// =============================
// ⏳ COUNTDOWN TIMER
// =============================

// 目标时间
let targetDate = new Date("June 15, 2026 09:00:00").getTime();


// 每秒更新一次倒计时
setInterval(() => {

  // 当前时间
  let now = new Date().getTime();

  // 距离目标时间的差距（毫秒）
  let distance = targetDate - now;

  // 如果时间到了（避免负数）
  if (distance < 0) {
    document.getElementById("days").innerText = 0;
    document.getElementById("hours").innerText = 0;
    document.getElementById("minutes").innerText = 0;
    document.getElementById("seconds").innerText = 0;
    return;
  }

  // 转换时间单位
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // 更新 HTML
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

}, 1000);


// =============================
// 👥 PARTICIPANT COUNTER
// =============================

let count = 0;      // 起始人数
let target = 1500;  // 目标人数

let counter = setInterval(() => {

  count++; // 每次 +1

  // 更新网页显示
  document.getElementById("count").innerText = count;

  // 到达目标停止
  if (count >= target) {
    clearInterval(counter);
  }

}, 50); // ✔ 建议 50ms（平滑又不卡）