var number = 0;
var tick = 0;
var interval = 0;
var flag = 1;
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('frame', {
        height: '630',
        width: '1130',
        videoId: 'hLQl3WQQoQ0',
        playerVars: {
            controls: '0'
        },
        events: {
        }
    });
}
function start() {
    player.playVideo();
    interval = setInterval(function () {
        if (flag == 1) {
            tick += 1;
            if (tick == lyricsData[number].time) {
                var $toastContent = $('<p id="E_lyrics" style="color: white; font-weight: bold; font-size: 25px; font-family: 돋움">' + lyricsData[number].e + '</p>');
                Materialize.toast($toastContent, (lyricsData[number + 1].time - lyricsData[number].time - 5) * 100 + lyricsData[number].end * 1000000);
                var $toastContent = $('<p id="K_lyrics" style="color: white; font-weight: bold; font-size: 20px; font-family: 돋움">' + lyricsData[number].k + '</p>');
                Materialize.toast($toastContent, (lyricsData[number + 1].time - lyricsData[number].time - 5) * 100 + lyricsData[number].end * 1000000);
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
function wait() {

    player.pauseVideo();

}
function answer() {
    if (flag == 0) {
        tick = lyricsData[number - 1].time;
        lyricsData[number - 1].end = 0;
        Materialize.Toast.removeAll();
        var $toastContent = $('<p id="E_lyrics" style="color: white; font-weight: bold; font-size: 25px; font-family: 돋움">' + lyricsData[number - 1].a + '</p>');
        Materialize.toast($toastContent, (lyricsData[number].time - lyricsData[number - 1].time - 5) * 100);
        var $toastContent = $('<p id="K_lyrics" style="color: white; font-weight: bold; font-size: 20px; font-family: 돋움">' + lyricsData[number - 1].k + '</p>');
        Materialize.toast($toastContent, (lyricsData[number].time - lyricsData[number - 1].time - 5) * 100);
        player.playVideo();
        player.seekTo(tick / 10, true);
        flag = 1;
    }
}
function restart() {
    if (flag == 0) {
        tick = lyricsData[number - 1].time;
        player.playVideo();
        player.seekTo(tick / 10, true);
        flag = 1;
    }
}
