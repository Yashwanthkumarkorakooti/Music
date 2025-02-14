const moodPlaylists = {
    happy: [
        "https://www.bensound.com/bensound-music/bensound-funnysong.mp3",
        "https://www.bensound.com/bensound-music/bensound-buddy.mp3"
    ],
    sad: [
        "https://www.bensound.com/bensound-music/bensound-slowmotion.mp3",
        "https://www.bensound.com/bensound-music/bensound-memories.mp3"
    ],
    relaxed: [
        "https://www.bensound.com/bensound-music/bensound-tomorrow.mp3",
        "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3"
    ],
    energetic: [
        "https://www.bensound.com/bensound-music/bensound-hey.mp3",
        "https://www.bensound.com/bensound-music/bensound-epic.mp3"
    ]
};
let currentPlaylist = [];
let currentSongIndex = 0;
const audioPlayer = document.getElementById("audioPlayer");

function setMood(mood) {
    currentPlaylist = moodPlaylists[mood];
    currentSongIndex = 0;
    playSong();
}
function playSong() {
    if (currentPlaylist.length > 0) {
        audioPlayer.src = currentPlaylist[currentSongIndex];
        audioPlayer.play();
    }
}
audioPlayer.addEventListener("ended", () => {
    currentSongIndex = (currentSongIndex + 1) % currentPlaylist.length;
    playSong();
});