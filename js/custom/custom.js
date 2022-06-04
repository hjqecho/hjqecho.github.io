/*添加图片top*/
var top_up = "<img class='gotop' src='https://npm.elemecdn.com/hjqecho_img@latest/custom/goup.gif' title='回到顶部' >";
/*添加到返回顶部按钮下*/
document.getElementById("go-up").innerHTML += top_up;

//动态标题
// var OriginTitile = document.title;
// var titleTime;
// document.addEventListener('visibilitychange', function () {
//     if (document.hidden) {
//         //离开当前页面时标签显示内容
//         document.title = 'w(ﾟДﾟ)w 不要走！再看看嘛！';
//         clearTimeout(titleTime);
//     }
//     else {
//         //返回当前页面时标签显示内容
//         document.title = '♪(^∇^*)欢迎回来！' + OriginTitile;
//         //两秒后变回正常标题
//         titleTime = setTimeout(function () {
//             document.title = OriginTitile;
//         }, 2000);
//     }
// });