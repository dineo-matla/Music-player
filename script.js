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
    src: "https://www.bensound.com/royalty-free-music/track/hey-happy-cheerful",
  },
  {
    id: 1,
    title: "By My Side",
    artist: "Marcus P",
    duration: "2:21",
    src: "https://www.bensound.com/royalty-free-music/track/by-my-side-joyful-party",
  },
  {
    id: 2,
    title: "Unbreakable Resolve",
    artist: "Lunar Years",
    duration: "2:04",
    src: "https://www.bensound.com/royalty-free-music/track/unbreakable-resolve-hopeful-epic",
  },
  {
    id: 3,
    title: "On Repeat",
    artist: "Marcus P",
    duration: "2:16",
    src: "https://www.bensound.com/royalty-free-music/track/on-repeat-shiny-uplifting",
  },
  {
    id: 4,
    title: "Love",
    artist: "Benjamin Tissot",
    duration: "5:35",
    src: "https://www.bensound.com/royalty-free-music/track/love",
  },
  {
    id: 5,
    title: "Memories",
    artist: "Benjamin Tissot",
    duration: "3:50",
    src: "https://www.bensound.com/royalty-free-music/track/memories",
  },
  {
    id: 6,
    title: "A Day To Remember",
    artist: "Benjamin Tissot",
    duration: "3:15",
    src: "https://www.bensound.com/royalty-free-music/track/a-day-to-remember-wedding-music",
  },
];

const audio = new Audio();
let userData = {
  songs: [...allSongs],
  currentSong: null,
  songCurrentTime: 0,
};
