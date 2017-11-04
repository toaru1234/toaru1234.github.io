var lyricsData = [
{ e: "I heard that you're settled down", k: "당신이 정착했다는 얘기를 들었어요", time: 150, end: 0, a: 0 },
{ e: "That you found a girl and you're _______ ___", k: "한 여자를 만나서 결혼했다는 얘기를", time: 220, end: 295, a: "That you found a girl and you're married now" },
{ e: "I heard that your dreams came true", k: "당신의 꿈이 이뤄졌다는 얘기를 들었어요", time: 305, end: 0, a: 0 },
{ e: "_____ ___ ____ ___ ______ I didn't give to you", k: "내가 당신에게 주지 못한 걸 그 여자가 줬나 보네요", time: 360, end: 420, a: "Guess she gave you things I didn't give to you" },
{ e: "Old friend, why are you so shy?", k: "오래된 친구여, 왜 그렇게 겁을 먹나요?", time: 430, end: 0, a: 0 },
{ e: "Ain't like you to hold back or hide from the light.", k: "억제하려고 하거나 숨으려고 하는 건 당신답지 않아요", time: 490, end: 0, a: 0 },
{ e: "I hate to turn up out of the blue uninvited", k: "느닷없이 불청객으로 나타나는 걸 좋아하진 않아요", time: 570, end: 0, a: 0 },
{ e: "___ ______'_ ____ ____, I couldn't fight it", k: "하지만 찾아오지 않을 수 없었어요, 참을 수가 없었어요", time: 605, end: 630, a: "But I couldn't stay away, I couldn't fight it"},
{ e: "I had hoped you'd see my face and that you'd be reminded", k: "당신이 내 얼굴을 보고 떠올리길 바랐어요", time: 640, end: 0, a: 0 },
{ e: "That for me it ___'_ ____", k: "나는 아직 끝나지 않았다는 걸", time: 675, end: 725, a: "That for me it isn't over" },
{ e: "Never mind, I'll find someone like you", k: "신경 쓰지 마세요, 당신 같은 사람을 찾을 거예요", time: 735, end: 0, a: 0 },
{ e: "I wish nothing but the best for you too", k: "(저도) 당신에게 좋을 일만 일어나길 바라요", time: 795, end: 0, a: 0 },
{ e: "Don't forget me, _ ___", k: "날 잊지 마세요, 애원해요", time: 865, end: 905, a: "Don't forget me, I beg" },
{ e: "I remember you said", k: "당신이 말했던 걸 기억해요", time: 910, end: 0, a: 0 },
{ e: "Sometimes it lasts in love but sometimes __ _____ ______,", k: "때로는 추억이 사랑 속에 영원하기도 하지만, 아픔을 주기도 한다는 걸", time: 945, end: 1010, a: "Sometimes it lasts in love but sometimes it hurts instead," },
{ e: 'Sometimes it lasts in love but sometimes it hurts instead', k: "때로는 추억이 사랑 속에 영원하기도 하지만, 아픔을 주기도 한다는 걸", time: 1015, end: 0, a: 0 },
{ e: "", k: "", time: 0 , end: 0}];

var number = 0;
var tick = 0;
var interval = 0;
var flag = 1;

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('frame', {
        height: '440',        
        width: '860',    
        videoId: 'hLQl3WQQoQ0',
        playerVars: {         
            controls: '2'
        },
        events: {
        }
    });
}

var playerState;

function start()
{
    player.playVideo();
    interval = setInterval(function () {
        if (flag == 1) {
            tick += 1;
            if (tick == lyricsData[number].time) {
                document.getElementById("E_lyrics").innerHTML = lyricsData[number].e;
                document.getElementById("K_lyrics").innerHTML = lyricsData[number].k;
                number++;
            }
            if (lyricsData[number - 1].end != 0) {
                if (tick == lyricsData[number - 1].end) {
                    flag = 0;
                    player.pauseVideo();
                }
            }
        }
    }, 100)
}

function wait()
{
    player.pauseVideo();
}

function answer()
{
    if (flag == 0) {
        tick = lyricsData[number - 1].time;
        lyricsData[number - 1].end = 0;
        document.getElementById("E_lyrics").innerHTML = lyricsData[number - 1].a;
        player.playVideo();
        player.seekTo(tick / 10, true);
        flag = 1;
    }
}

function restart()
{
    if (flag == 0) {
        tick = lyricsData[number-1].time;
        player.playVideo();
        player.seekTo(tick / 10, true);
        flag = 1;
    }
}
