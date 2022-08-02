const board = document.querySelector('.board');
const sname = document.querySelector('.name-display h4');
const lyrics = document.querySelector('.lyrics p');
const close = document.querySelector('.close');

var Hel = document.getElementById('Hel');
var NONAME = document.getElementById('NONAME');
var NONAME_2 = document.getElementById('NONAME_2');
var ware = document.getElementById('ware');
var SummerDream = document.getElementById('SummerDream');
var iyvrlu = document.getElementById('iyvrlu');
var ni = document.getElementById('ni');
var OneDotFour = document.getElementById('001.100');

close.onclick = function () {
    board.style.display = 'none';
}

Hel.onclick = function () {
    board.style.display = 'block';
    sname.innerHTML = 'Hel';
    lyrics.innerHTML = 'Seems like I was poisoned<br>Looking for the antidote<br>The world&acute;s turned upside down<br>I can&acutet find my way';
}

NONAME.onclick = function () {
    board.style.display = 'block';
    sname.innerHTML = 'NONAME';
    lyrics.innerHTML = '部屋にいる<br>（待在房间里）<br>何か聞きたい<br>（想听点什么）<br>だからCDを取り出した<br>（所以把CD拿了出来）<br>昨日のニュースを思い出す<br>（想起了昨天的新闻）<br>あの人は誰かを殺した<br>（那个人把某人杀了）<br>お金があるならいい<br>（如果有钱的话就好了）<br>僕はそう思う<br>（我这样想到）<br>君は僕を見詰めている<br>（你凝视着我）<br>何か消えた<br>（似乎有什么消失了）<br>空が再び黒くなる<br>（天空再次迎来黑暗）<br>もう一回<br>（再一次）<br>あの夜に戻る<br>（回到那个夜晚）<br>好きなだけ踊りましょう<br>（随心所欲地起舞吧）<br>月に、夢があるだろう<br>（或许月亮上藏着梦吧）<br>遠い星でも届くよ<br>（即便是遥远的星星也能触碰得到）<br>歌う 歌う 歌う だけ<br>（只是不断地歌唱）<br>どうか、起こさないでよ<br>（还请不要将我唤醒）';
}

NONAME_2.onclick = function () {
    board.style.display = 'block';
    sname.innerHTML = 'NONAME_2';
    lyrics.innerHTML = '散らかった部屋で<br>（在凌乱的房间里）<br>私、空を見て<br>（我看着天空）<br>街と混ざり合った海の匂いがする<br>（闻到了城镇和海水结合的味道）<br>今日のランチはまだ三百円のパン<br>（今天的午餐也是三百块的面包）<br>美味しくないけどもう慣れた<br>（虽然不好吃但也习惯了）<br>父さんはいつも<br>（父亲一直在工作）<br>働いて 働いて 働いて 働いて<br>（工作着、工作着...）<br>いつ私大人になる<br>（我什么时候才能长大）<br>長い長いよ<br>（还有好久好久）<br>すべていつも通り<br>（一切都跟往常一样）<br>つまらない日々<br>（无聊的日子）<br>早く終わって<br>（快结束吧）';
}

ware.onclick = function () {
    board.style.display = 'block';
    sname.innerHTML = 'ware';
    lyrics.innerHTML = '今日は何もしなかった<br>（今天什么也没做）<br>でも夕食は美味しいかったよ<br>（但晚饭很好吃）<br>あすは何をすべきか<br>（明天该干什么呢）<br>考えるも辞めた<br>（已经不想思考了）<br>社交なんて嫌いよ <br>（讨厌社交）<br>家にいたいよ<br>（只想待在家里）<br>明かり消しましょう<br>（把灯关上吧）<br>目を閉じて<br>（闭上眼睛）<br>おやすみ<br>（晚安）';
}

ni.onclick = function () {
    board.style.display = 'block';
    sname.innerHTML = '匿';
    lyrics.innerHTML = '风起雨落<br>任凭岁月雕塑<br>才发现世事原来都可量度<br>昨日的我<br>仍看着发光的荧幕<br>缓慢随时间漂泊<br>年少不知事的错<br>还缠绕着我<br>又是理性的错落<br>浮现出谁的轮廓<br>多希望哪天我们都能看得清楚<br>再梦见你';
}

SummerDream.onclick = function () {
    board.style.display = 'block';
    sname.innerHTML = 'Summer Dream';
    lyrics.innerHTML = 'I wanna see how summer ends before I leave<br>In a perfect night with a chill<br>I saw nothing in my dream<br>The sky looks so grey<br>It&acute;s going to rain soon<br>I&acute;m standing foolishly<br>Looking for yesterday<br>I guess I have to walk away for a while<br>Something is pushing me<br>Spring goes so fast and comes too slow<br>I just wanna hear the sound of the wind far away<br>I wanna sing a song on the way home<br>like before<br>When I close my eyes<br>the stars shine<br>Take me back in time<br>Yesterday I burned under the sunlight<br>The twinkles in my eyes were iginted<br>Yesterday I waited until the sundown<br>But no one ever called my name<br>It&acute;s like a summer dream<br>It&acute;s a summer dream<br>It&acute;s like a summer dream<br>It&acute;s a summer dream<br>Without me';
}

iyvrlu.onclick = function () {
    board.style.display = 'block';
    sname.innerHTML = 'iyvrlu';
    lyrics.innerHTML = 'I feel like I&acute;m diving<br>From where I used to know<br>It&acute;s such a shame to be noticed who I am<br>I won&acute;t be back tonight <br>Don&acute;t tell me the truth<br>I feel the same way with you<br>Let us have a dance on the moon<br>Won&acute;t take too long';
}

OneDotFour.onclick = function () {
    board.style.display = 'block';
    sname.innerHTML = '001.100';
    lyrics.innerHTML = '纯音乐，无歌词';
}
