const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
    {
        path: 'mus/bcd.mp3',
        displayName: 'Position',
        cover: 'https://th.bing.com/th/id/R.aaa8913a89d918957f73e26a658aa7d2?rik=EWEwWFfFx9pkCQ&riu=http%3a%2f%2fcdn.images.dailystar.co.uk%2fdynamic%2f140%2fphotos%2f518000%2fariana-grande-952518.jpg&ehk=TmuDV%2fpsky58jx1cGc4gw4CV0V1KASKu%2bM9s0zQ9Otk%3d&risl=&pid=ImgRaw&r=0',
        artist: 'Arina Grande',
    },
    {
        path: 'mus/cd.mp3',
        displayName: ' Yes',
        cover: 'https://i.pinimg.com/originals/19/10/eb/1910eb3765d9f65853afdc9316c2d8e4.jpg',
        artist: 'Arina Grande',
    },
    {
         path: 'mus/d.mp3',
        displayName: 'We Dont talk anymore',
        cover: 'https://wallpapercave.com/wp/wp4859309.jpg',
        artist: 'Charlie Puth',
    
    },{
        path: 'mus/Dandelions.mp3',
        displayName: 'Dandalion',
        cover: 'https://i.ytimg.com/vi/xIUoXhX0VCo/maxresdefault.jpg',
        artist: 'Ruth.B',
    },
    {
        path: 'mus/Dua Lipa - New Rules (Official Music Video) (320 kbps).mp3',
        displayName: 'New Rules',
        cover: 'https://th.bing.com/th/id/OIP.G51kAWAcER0yo5_DfTqRMwHaHa?rs=1&pid=ImgDetMain',
        artist: 'Dua Lipa',
    },{
        path: 'mus/FIFTY FIFTY.mp3',
        displayName: 'FIFTY FIFTY',
        cover: 'https://www.j-14.com/wp-content/uploads/2023/04/FIFTY-FIFTY-K-POP.jpg?fit=800%2C1000&quality=86&strip=all',
        artist: 'Cupid',
    },
    {
        path: 'mus/Heat Waves-Glass Animals(lyrics video) (320 kbps).mp3',
        displayName: 'Heat Waves',
        cover: 'https://th.bing.com/th/id/OIP.sx_Xh2bgLSJFPAs5_-DhKAHaEK?rs=1&pid=ImgDetMain',
        artist: 'Glass Animals',
    },
    {
        path: 'mus/Maroon 5 - Animals (Lyrics) (320 kbps).mp3',
        displayName: 'Animal',
        cover: 'https://th.bing.com/th/id/OIP.Nw4FOmW4STHKBzigmS0NhQHaEK?rs=1&pid=ImgDetMain',
        artist: 'Maroon',
    }, {
        path: 'mus/Stephen Sanchez - Until I Found You, The Weeknd - Die For You (Lyrics) (320 kbps).mp3',
        displayName: 'Untill I Found You',
        cover: 'https://th.bing.com/th/id/OIP.lCagFoJy2S4YMzhlWu2jSAHaHa?rs=1&pid=ImgDetMain',
        artist: 'Stephen Sanchez',
    }, {
        path: 'mus/The Chainsmokers - Closer (320 kbps).mp3',
        displayName: 'Closer',
        cover: 'https://wallpapercave.com/wp/wp4606692.jpg',
        artist: 'The Chainsmokers',
    }, {
        path: 'mus/The Weeknd - Reminder (Lyrics) (320 kbps).mp3',
        displayName: 'Reminder',
        cover: 'https://th.bing.com/th/id/OIP.ZZde1hI7RV0Lub9ZnmT7SgHaEK?rs=1&pid=ImgDetMain',
        artist: 'The Weeknd',
    },   
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    isPlaying = true;
    // Change play button icon
    playBtn.classList.replace('fa-play', 'fa-pause');
    // Set button hover title
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    // Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');
    // Set button hover title
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);