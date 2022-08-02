// 专辑
const albums = document.querySelectorAll('.album');
// 专辑上的播放按钮
const play_buttons = document.querySelectorAll('.play-button');

// 鼠标拖到专辑上的效果
{
    albums[0].onmouseover = function () {
        play_buttons[0].style.display = 'block';
    }
    albums[0].onmouseout = function () {
        play_buttons[0].style.display = 'none';
    }
}