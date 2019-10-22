// var
//   cursor = $(".cursor"),
//   cWidth = 20, //カーソルの大きさ
//   mouseX = 0, //マウスのX座標
//   mouseY = 0; //マウスのY座標

// $(document).on('mousemove', function (e) {
//   mouseX = e.clientX;
//   mouseY = e.clientY;
//   cursor.css({
//     //カーソルの真ん中に座標軸が来るよう、
//     //カーソルの大きさの半分を引きます
//     left: mouseX - (cWidth / 2),
//     top: mouseY - (cWidth / 2)
//   });
// });

// const linkElem = document.querySelectorAll('a');
// for (let i = 0; i < linkElem.length; i++) {
//   linkElem[i].addEventListener('mouseover', function () {
//     document.querySelector('.cursor').classList.add('hov_');
//   });
//   linkElem[i].addEventListener('mouseout', function () {
//     document.querySelector('.cursor').classList.remove('hov_');
//   });
// }




let cursorR = 4;  //カーソルの半径
const cursor = document.querySelector('.cursor');  //カーソル用のdivを取得

//上記のdivタグをマウスに追従させる処理
document.addEventListener('mousemove', function (e) {
  cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

const linkElem = document.querySelectorAll('a');
for (let i = 0; i < linkElem.length; i++) {
  linkElem[i].addEventListener('mouseover', function (e) {
    cursor.classList.add('hov_');
  });
  linkElem[i].addEventListener('mouseout', function (e) {
    cursor.classList.remove('hov_');
  });
}