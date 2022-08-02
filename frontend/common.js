// 播放器
const player = document.querySelector('.player');
// 播放器暂停按钮
const pausemusic = document.querySelector('.pausemusic');
// 播放器播放按钮
const playmusic = document.querySelector('.playmusic');
// 播放器上一首按钮
const backward = document.querySelector('.backward');
// 播放器下一首按钮
const forward = document.querySelector('.forward');
// 歌曲播放按钮数组
const plays = document.getElementsByClassName('play');
// 歌名数组
const song_names = document.getElementsByClassName('song-name');
// 音频数组
const audio = document.querySelectorAll('.audio');
// 播放器上显示的歌名
const song_name_display = document.querySelector('.song-name-display');
// 当前已播放时长
const current_time = document.querySelector('.current-time');
// 音乐总时长
const total_time = document.querySelector('.total-time');
// 进度条
const progress_bar = document.querySelector('.progress-bar');
// 进度条圆圈
const circle = document.querySelector('.circle');
// 音量条
const volume_box = document.querySelector('.volume-box');
// 当前音量
const volume_bar = document.querySelector('.volume-bar');
// 喇叭按钮
const speaker = document.querySelector('.speaker');

// 进度条最左端的x坐标
var bar_left_Xcoordinate;
// 鼠标当前悬停x坐标在进度条上的位置
var hover_bar_pos
// 鼠标当前悬停x坐标在进度条上的位置对应的时间
var hover_bar_time
// 音量条最底端的y坐标
var volume_bar_bottom_Ycoordinate;
// 音量条最顶端的y坐标
var hover_volume_bar_pos
// 歌曲标记（需要更新）
var flag = [0, 0, 0, 0, 0, 0, 0, 0];
// 当前已播时长（分）
var current_min;
// 当前已播时长（秒）
var current_sec;
// 总时长（分）
var total_min;
// 总时长（秒）
var total_sec;
// 是否正在播放
var isPlaying = false;

// 每一首歌的点击事件
{
    plays[0].onclick = function () {
        // 弹出播放器
        player.style.display = 'block';
        // 在播放器上显示歌曲名
        song_name_display.innerHTML = song_names[0].textContent;
        // 循环检测有无其他歌曲正在播放，有的话把它暂停，且把它的时间设为0，下次播放从头开始
        // 当前正在播放的歌的flag为1，通过循环找到它，把它的flag置0
        for (var i = 0; i < song_names.length; i++) {
            if (flag[i] == 1) {
                flag[i] = 0;
                audio[i].pause();
                audio[i].currentTime = 0;
                isPlaying = true;
                index = i;
            }
        }
        // 如果本来显示暂停，则在点击后变成播放
        if (playmusic.style.display == 'block') {
            playmusic.style.display = 'none';
            pausemusic.style.display = 'block';
        }
        // 进度变为0
        circle.style.left = '0px';
        // 播放
        audio[0].play();
        // 标记
        flag[0] = 1;
        // 初始音量设为70%，如果刚刚在播放别的歌曲则继承当前音量
        if (isPlaying == true) {
            audio[0].volume = audio[index].volume;
        }
        else {
            audio[0].volume = 0.6;
        }
        // 获取进度条最左端的x坐标、音量条最顶和最底端的y坐标，后续用来运算
        bar_left_Xcoordinate = progress_bar.getBoundingClientRect().left;
        volume_bar_bottom_Ycoordinate = volume_box.getBoundingClientRect().bottom;
        volume_bar_top_Ycoordinate = volume_box.getBoundingClientRect().top;
    }
    plays[1].onclick = function () {
        player.style.display = 'block';
        song_name_display.innerHTML = song_names[1].textContent;
        for (var i = 0; i < song_names.length; i++) {
            if (flag[i] == 1) {
                flag[i] = 0;
                audio[i].pause();
                audio[i].currentTime = 0;
                isPlaying = true;
                index = i;
            }
        }
        if (playmusic.style.display == 'block') {
            playmusic.style.display = 'none';
            pausemusic.style.display = 'block';
        }
        circle.style.left = '0px';
        audio[1].play();
        flag[1] = 1;
        // 初始音量设为70%，如果刚刚在播放别的歌曲则继承当前音量
        if (isPlaying == true) {
            audio[1].volume = audio[index].volume;
        }
        else {
            audio[1].volume = 0.6;
        }
        bar_left_Xcoordinate = progress_bar.getBoundingClientRect().left;
        volume_bar_bottom_Ycoordinate = volume_box.getBoundingClientRect().bottom;
        volume_bar_top_Ycoordinate = volume_box.getBoundingClientRect().top;
    }
    plays[2].onclick = function () {
        player.style.display = 'block';
        song_name_display.innerHTML = song_names[2].textContent;
        for (var i = 0; i < song_names.length; i++) {
            if (flag[i] == 1) {
                flag[i] = 0;
                audio[i].pause();
                audio[i].currentTime = 0;
                isPlaying = true;
                index = i;
            }
        }
        if (playmusic.style.display == 'block') {
            playmusic.style.display = 'none';
            pausemusic.style.display = 'block';
        }
        circle.style.left = '0px';
        audio[2].play();
        flag[2] = 1;
        // 初始音量设为70%，如果刚刚在播放别的歌曲则继承当前音量
        if (isPlaying == true) {
            audio[2].volume = audio[index].volume;
        }
        else {
            audio[2].volume = 0.6;
        }
        bar_left_Xcoordinate = progress_bar.getBoundingClientRect().left;
        volume_bar_bottom_Ycoordinate = volume_box.getBoundingClientRect().bottom;
        volume_bar_top_Ycoordinate = volume_box.getBoundingClientRect().top;
    }
    plays[3].onclick = function () {
        player.style.display = 'block';
        song_name_display.innerHTML = song_names[3].textContent;
        for (var i = 0; i < song_names.length; i++) {
            if (flag[i] == 1) {
                flag[i] = 0;
                audio[i].pause();
                audio[i].currentTime = 0;
                isPlaying = true;
                index = i;
            }
        }
        if (playmusic.style.display == 'block') {
            playmusic.style.display = 'none';
            pausemusic.style.display = 'block';
        }
        circle.style.left = '0px';
        audio[3].play();
        flag[3] = 1;
        if (isPlaying == true) {
            audio[3].volume = audio[index].volume;
        }
        else {
            audio[3].volume = 0.6;
        }
        bar_left_Xcoordinate = progress_bar.getBoundingClientRect().left;
        volume_bar_bottom_Ycoordinate = volume_box.getBoundingClientRect().bottom;
        volume_bar_top_Ycoordinate = volume_box.getBoundingClientRect().top;
    }
    plays[4].onclick = function () {
        player.style.display = 'block';
        song_name_display.innerHTML = song_names[4].textContent;
        for (var i = 0; i < song_names.length; i++) {
            if (flag[i] == 1) {
                flag[i] = 0;
                audio[i].pause();
                audio[i].currentTime = 0;
                isPlaying = true;
                index = i;
            }
        }
        if (playmusic.style.display == 'block') {
            playmusic.style.display = 'none';
            pausemusic.style.display = 'block';
        }
        circle.style.left = '0px';
        audio[4].play();
        flag[4] = 1;
        if (isPlaying == true) {
            audio[4].volume = audio[index].volume;
        }
        else {
            audio[4].volume = 0.6;
        }
        bar_left_Xcoordinate = progress_bar.getBoundingClientRect().left;
        volume_bar_bottom_Ycoordinate = volume_box.getBoundingClientRect().bottom;
        volume_bar_top_Ycoordinate = volume_box.getBoundingClientRect().top;
    }
    plays[5].onclick = function () {
        player.style.display = 'block';
        song_name_display.innerHTML = song_names[5].textContent;
        for (var i = 0; i < song_names.length; i++) {
            if (flag[i] == 1) {
                flag[i] = 0;
                audio[i].pause();
                audio[i].currentTime = 0;
                isPlaying = true;
                index = i;
            }
        }
        if (playmusic.style.display == 'block') {
            playmusic.style.display = 'none';
            pausemusic.style.display = 'block';
        }
        circle.style.left = '0px';
        audio[5].play();
        flag[5] = 1;
        if (isPlaying == true) {
            audio[5].volume = audio[index].volume;
        }
        else {
            audio[5].volume = 0.6;
        }
        bar_left_Xcoordinate = progress_bar.getBoundingClientRect().left;
        volume_bar_bottom_Ycoordinate = volume_box.getBoundingClientRect().bottom;
        volume_bar_top_Ycoordinate = volume_box.getBoundingClientRect().top;
    }
    plays[6].onclick = function () {
        player.style.display = 'block';
        song_name_display.innerHTML = song_names[6].textContent;
        for (var i = 0; i < song_names.length; i++) {
            if (flag[i] == 1) {
                flag[i] = 0;
                audio[i].pause();
                audio[i].currentTime = 0;
                isPlaying = true;
                index = i;
            }
        }
        if (playmusic.style.display == 'block') {
            playmusic.style.display = 'none';
            pausemusic.style.display = 'block';
        }
        circle.style.left = '0px';
        audio[6].play();
        flag[6] = 1;
        if (isPlaying == true) {
            audio[6].volume = audio[index].volume;
        }
        else {
            audio[6].volume = 0.6;
        }
        bar_left_Xcoordinate = progress_bar.getBoundingClientRect().left;
        volume_bar_bottom_Ycoordinate = volume_box.getBoundingClientRect().bottom;
        volume_bar_top_Ycoordinate = volume_box.getBoundingClientRect().top;
    }
    plays[7].onclick = function () {
        player.style.display = 'block';
        song_name_display.innerHTML = song_names[7].textContent;
        for (var i = 0; i < song_names.length; i++) {
            if (flag[i] == 1) {
                flag[i] = 0;
                audio[i].pause();
                audio[i].currentTime = 0;
                isPlaying = true;
                index = i;
            }
        }
        if (playmusic.style.display == 'block') {
            playmusic.style.display = 'none';
            pausemusic.style.display = 'block';
        }
        circle.style.left = '0px';
        audio[7].play();
        flag[7] = 1;
        if (isPlaying == true) {
            audio[7].volume = audio[index].volume;
        }
        else {
            audio[7].volume = 0.6;
        }
        bar_left_Xcoordinate = progress_bar.getBoundingClientRect().left;
        volume_bar_bottom_Ycoordinate = volume_box.getBoundingClientRect().bottom;
        volume_bar_top_Ycoordinate = volume_box.getBoundingClientRect().top;
    }
}

// 播放和暂停的点击事件
{
    pausemusic.onclick = function () {
        pausemusic.style.display = 'none';
        playmusic.style.display = 'block';
        var index = findThePlayingSong();
        audio[index].pause();
    }
    playmusic.onclick = function () {
        playmusic.style.display = 'none';
        pausemusic.style.display = 'block';
        var index = findThePlayingSong();
        audio[index].play();
    }
}

// 上一首和下一首的点击事件
{
    backward.onclick = function () {
        var index = findThePlayingSong();
        audio[(index - 1 + 8) % song_names.length].play();
        plays[(index - 1 + 8) % song_names.length].onclick();
        audio[(index - 1 + 8) % song_names.length].volume = audio[index].volume;
    }
    forward.onclick = function () {
        var index = findThePlayingSong();
        audio[(index + 1) % song_names.length].play();
        plays[(index + 1) % song_names.length].onclick();
        audio[(index + 1) % song_names.length].volume = audio[index].volume;
    }
}

// 歌曲结束事件
for (var i = 0; i < song_names.length; i++) {
    audio[i].addEventListener('ended', function () {
        flag[i] = 0;
        var index = findThePlayingSong();
        audio[(index + 1) % song_names.length].play();
        plays[(index + 1) % song_names.length].onclick();
        audio[(index + 1) % song_names.length].volume = audio[index].volume;
    })
}

// 进度条跳转事件
document.addEventListener('mousemove', function (e) {
    // 鼠标当前悬停x坐标在进度条上的位置：鼠标在整个页面上的x坐标 - 进度条最左端的x坐标
    hover_bar_pos = e.clientX - bar_left_Xcoordinate;
    // 找到现在正在播放的歌
    var index = findThePlayingSong();
    // 鼠标当前悬停x坐标在进度条上的位置对应的时间：音频总时长 * （鼠标当前悬停x坐标在进度条上的位置 / 进度条总长度）
    hover_bar_time = audio[index].duration * (hover_bar_pos / progress_bar.getBoundingClientRect().width);

    // 点击进度条上某一位置后跳至对应的时间
    progress_bar.onclick = function () {
        // 跳转时间
        audio[index].currentTime = hover_bar_time;
        // 进度圆圈移动
        circle.style.left = (hover_bar_pos / 16) + 'rem';
    }

    circle.onmousedown = function () {
        circle.style.left = e.clientX;
    }
})

// 播放时保持进度条圆圈移动
setInterval(function () {
    for (var i = 0; i < song_names.length; i++) {
        if (flag[i] == 1) {
            circle.style.left = (audio[i].currentTime / audio[i].duration) * progress_bar.getBoundingClientRect().width + 'px';
        }
    }
}, 5);

// 显示歌曲总时长和实时已播放时长
setInterval(function () {
    var index = findThePlayingSong();
    current_min = Math.floor(audio[index].currentTime / 60);
    current_sec = parseInt(audio[index].currentTime % 60);
    total_min = Math.floor(audio[index].duration / 60);
    total_sec = parseInt(audio[index].duration % 60);

    if (current_sec < 10) {
        current_time.innerHTML = '0' + current_min + ':' + '0' + current_sec;
    }
    else {
        current_time.innerHTML = '0' + current_min + ':' + current_sec;
    }

    if (total_sec < 10) {
        total_time.innerHTML = '0' + total_min + ':' + '0' + total_sec;
    }
    else {
        total_time.innerHTML = '0' + total_min + ':' + total_sec;
    }
}, 100)

// 喇叭按钮点击事件——>弹出/隐藏音量条
speaker.onclick = function () {
    if (volume_box.style.opacity == 0) {
        volume_box.style.opacity = 1;
    }
    else if (volume_box.style.opacity == 1) {
        volume_box.style.opacity = 0;
    }
}

// 音量条控制事件
document.addEventListener('mousemove', function (e) {
    var index = findThePlayingSong();
    volume_box.onclick = function () {
        audio[index].volume = (volume_bar_bottom_Ycoordinate - e.clientY) / (volume_bar_bottom_Ycoordinate - volume_bar_top_Ycoordinate);
        volume_bar.style.height = (volume_bar_bottom_Ycoordinate - e.clientY) / (volume_bar_bottom_Ycoordinate - volume_bar_top_Ycoordinate) * 100 + '%'
    }
})

// 函数：找到目前正在播放（下标==1）的歌
var findThePlayingSong = function () {
    for (var i = 0; i < song_names.length; i++) {
        if (flag[i] == 1) {
            return i;
        }
    }
}