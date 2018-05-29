




window.onload=function(){


// 功能
// 1.视频的播放与暂停 当在暂停状态 显示播放按钮  当在播放状态 显示暂停按钮
// 2.总时间的显示
// 3.当前时间的显示
// 4.进度条的显示
// 5.跳跃播放
// 6.全屏播放 MDN(查询各种方法的网站)

// 获取元素
var video = document.querySelector('video');
var playBtn = document.querySelector(".play-button");
var iconCircle = document.querySelector(".play-button i");
var sum = document.querySelector(".sum");
var current = document.querySelector('.current');
var progressBar = document.querySelector(".progress-bar");
var progress = document.querySelector(".progress");
var fullscreen = document.querySelector(".fullscreen");

// 1.视频的播放与暂停 当在暂停状态 显示播放按钮  当在播放状态 显示暂停按钮
// 步骤:
// 1.1 获取元素  
// 1.2 给按钮添加点击事件
playBtn.onclick = function () {
  // 1.3 判断是在暂停还是播放状态 获取在暂停状态的属性 paused
  if (video.paused) {
    // 1.4 如果是暂停状态 那么调用播放方法 play()
    video.play();
    iconCircle.classList.toggle("fa-pause-circle")
  } else {
    // 1.5 如果是播放状态 那么调用暂停方法 pause();
    video.pause();
    iconCircle.classList.toggle("fa-pause-circle")
  }
}


// 2.总时间的显示
// 步骤:
//  2.1  获取元素 sum
//  2.2  当视频是可以播放的时候  当视频可以播放用 oncanplay事件
video.oncanplay = function () {
  //  2.3  获取视频的总时间  属性: duration
  // console.log(video.duration);  1570.32 -> 00:26:10
  //  2.4  把总时间变成小时h 分钟m 秒s
  var h = Math.floor(video.duration / 60 / 60);
  var m = Math.floor(video.duration / 60 % 60);
  var s = Math.floor(video.duration % 60);
  // console.log(h,m,s);
  //  2.5  判断h,m,s是否大于9 如果大于9 那么显示自身 否则加0;
  h = h > 9 ? h : '0' + h;
  m = m > 9 ? m : '0' + m;
  s = s > 9 ? s : '0' + s;
  //  2.6  把最终的结果通过拼接字符串 放入sum这个元素中
  sum.innerHTML = h + ":" + m + ':' + s;
}


// 3.当前时间的显示
// 步骤:
// 3.1.获取元素
// 3.2.让当前时间不断变化 随着视频的播放不断触发ontimeupdate事件
video.ontimeupdate = function () {
  // console.log(1);
  // 3.3.获取当前时间   属性currentTime可以获取当前播放的进度(时间)
  // console.log(video.currentTime);
  // 3.4.把当前时间变成小时h 分钟m 秒s
  var h = Math.floor(video.currentTime / 60 / 60);
  var m = Math.floor(video.currentTime / 60 % 60);
  var s = Math.floor(video.currentTime % 60);
  // 3.5判断h,m,s是否大于9 如果大于9 那么显示自身 否则加0;
  h = h > 9 ? h : '0' + h;
  m = m > 9 ? m : '0' + m;
  s = s > 9 ? s : '0' + s;
  // 3.6 把最终的结果通过拼接字符串 放入current这个元素中
  current.innerHTML = h + ":" + m + ':' + s;


  // 4.进度条的显示
  // 步骤:
  // 4.1.获取元素
  // 4.2.给progress-bar设置宽度 = 当前时间/总时间*100+'%';
  progressBar.style.width = video.currentTime / video.duration * 100 + '%';
}


// 5.跳跃播放
// 步骤:
// 5.1  获取元素
// 5.2  给progress添加点击事件
progress.onclick = function (e) {
  // 5.3  获取鼠标在progress上的点击的X轴的坐标
  var x = e.offsetX;
  // console.log(x);
  // 5.4  获取进度条的总宽度
  var pWith = this.offsetWidth;
  // console.log(pWith);
  // 5.5  当前时间= 鼠标在progress上的点击的X轴的坐标/进度条的总宽度*视频的总时间
  video.currentTime = x / pWith * video.duration;
}


// 6.全屏播放
// 步骤:
// 1.获取元素
// 2.给元素添加点击事件
// fullscreen.onclick = function(){
// // 3.调用全屏方法,让视频全屏播放 
//   // video.webkitRequestFullScreen();

// }


// 7.完整全屏播放(点击进入全屏再次点击推出全屏)
// 步骤:
// 1.获取元素
// 2.给元素添加点击事件
// fullscreen.onclick = function(){
//   // 3.判断是否在全屏状态 
//   if(!video.webkitFullScreenElement){
//     // 4.如果在非全屏状态,那么进入全屏状态 
//     video.webkitRequestFullscreen();
//    }

//    video.webkitExitFullScreen();
// }


fullscreen.onclick = function () {

  video.webkitRequestFullscreen()

  video.webkitExitFullScreen();
}



}

