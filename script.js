let playlistSongs = document.getElementById("playlist-songs");
let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");
let nextButton = document.getElementById("next");
let previousButton = document.getElementById("previous");
let shuffleButton = document.getElementById("shuffle");

let allSongs = [
  {
    id: 0,
    title: "Hey!",
    artist: "Benjamin Tissot",
    duration: "2:52",
    src: "audio/hey.mp3",
  },
  {
    id: 1,
    title: "By My Side",
    artist: "Marcus P",
    duration: "2:21",
    src: "audio/bymyside.mp3",
  },
  {
    id: 2,
    title: "Unbreakable Resolve",
    artist: "Lunar Years",
    duration: "2:04",
    src: "audio/unbreakableresolve.mp3",
  },
  {
    id: 3,
    title: "On Repeat",
    artist: "Marcus P",
    duration: "2:16",
    src: "audio/onrepeat.mp3",
  },
  {
    id: 4,
    title: "Love",
    artist: "Benjamin Tissot",
    duration: "5:35",
    src: "audio/love.mp3",
  },
  {
    id: 5,
    title: "Memories",
    artist: "Benjamin Tissot",
    duration: "3:50",
    src: "audio/memories.mp3",
  },
  {
    id: 6,
    title: "A Day To Remember",
    artist: "Benjamin Tissot",
    duration: "3:15",
    src: "audio/adaytoremember.mp3",
  },
];

const audio = new Audio();
let userData = {
  songs: [...allSongs],
  currentSong: null,
  songCurrentTime: 0,
};

const playSong = (id) => {
  const song = userData?.songs.find((song) => song.id === id);
  audio.src = song.src;
  audio.title = song.title;

  if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
    audio.currentTime = 0;
  } else {
    audio.currentTime = userData?.songCurrentTime;
  }
  userData.currentSong = song;
  playButton.classList.add("playing");

  audio.play();
  highlightCurrentSong();
};

const pauseSong = () => {
  userData.songCurrentTime = audio.currentTime;
  playButton.classList.remove("playing");
  audio.pause();
};

const playNextSong = () => {
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    const currentSongIndex = getCurrentSongIndex();
    const nextSong = userData?.songs[currentSongIndex + 1];
    playSong(nextSong.id);
  }
};

const playPreviousSong = () => {
  if (userData?.currentSong === null) {
    return;
  } else {
    const currentSongIndex = getCurrentSongIndex();
    const previousSong = userData?.songs[currentSongIndex - 1];
    playSong(previousSong.id);
  }
};

const highlightCurrentSong = () => {
  const playlistSongElements = document.querySelectorAll(".playlist-song");
  const songToHighlight = document.getElementById(
    `song-${userData?.currentSong?.id}`
  );
  playlistSongElements.forEach((songEl) => {
    songEl.removeAttribute("aria-current");
  });
  if (songToHighlight) {
    songToHighlight.setAttribute("aria-current", "true");
  }
};

const renderSongs = (array) => {
  const songsHTML = array
    .map((song) => {
      return `<li id="song-${song.id}" class="playlist-song"></li>
<button onclick= "playSong(${song.id})" class = "playlist-song-info"><span class ="playlist-song-title">${song.title}
</span><span class = "playlist-song-artist">${song.artist}</span>
<span class="playlist-song-duration">${song.duration}</span>
</button>
<button class = "playlist-song-delete" aria-label = "Delete ${song.title}"><svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg></button>`;
    })
    .join("");

  playlistSongs.innerHTML = songsHTML;
};

const getCurrentSongIndex = () => {
  return userData?.songs.indexOf(userData?.currentSong);
};

playButton.addEventListener("click", () => {
  if (userData?.currentSong === null) {
    playSong(userData?.songs[0].id);
  } else {
    playSong(userData?.currentSong.id);
  }
});
pauseButton.addEventListener("click", pauseSong);
nextButton.addEventListener("click", playNextSong);
previousButton.addEventListener("click", playPreviousSong);

const sortSongs = () => {
  userData?.songs.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
  return userData?.songs;
};
renderSongs(sortSongs());
