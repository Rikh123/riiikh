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
        path: 'assets/1.mp3',
        displayName: 'Insinluba Twdana',
        cover: 'assets/1.jpg',
        artist: 'Aj Maisnam, Thaja Chanu',
    },
    {
        path: 'assets/2.mp3',
        displayName: 'Koinare Koinare',
        cover: 'assets/2.jpg',
        artist: 'Ak yanggon,Linda',
    },
    {
        path: 'assets/3.mp3',
        displayName: 'Lapthokkhro',
        cover: 'assets/3.jpg',
        artist: 'Innocent Eyes',
    
    },{
        path: 'assets/4.mp3',
        displayName: 'Liklaiba',
        cover: 'assets/4.jpg',
        artist: 'Pretty Yumnam',
    },
    {
        path: 'assets/5.mp3',
        displayName: 'Lonthoktabi',
        cover: 'assets/5.jpg',
        artist: 'Amarjeet, Pusparani',
    },{
        path: 'assets/6.mp3',
        displayName: 'Magun Leina',
        cover: 'assets/6.jpg',
        artist: 'Amarjeet, Pusparani',
    },
    {
        path: 'assets/7.mp3',
        displayName: 'Naitom Satpi',
        cover: 'assets/7.jpg',
        artist: 'Malemleima Talem',
    },
    {
        path: 'assets/8.mp3',
        displayName: 'Nijage',
        cover: 'assets/8.jpg',
        artist: 'Kaiku Yumnam, Emarel',
    }, {
        path: 'assets/9.mp3',
        displayName: 'Apaiba Leichel',
        cover: 'assets/9.jpg',
        artist: 'Seihum',
    }, {
        path: 'assets/10.mp3',
        displayName: 'Tahallone',
        cover: 'assets/10.jpg',
        artist: 'Hitler, Pusparani',
    }, {
        path: 'assets/11.mp3',
        displayName: 'Thawai Anise',
        cover: 'assets/11.jpg',
        artist: 'Arbin Soibam, Pusparani',
    }, {
        path: 'assets/12.mp3',
        displayName: 'Thawai Yaodana',
        cover: 'assets/12.jpg',
        artist: 'Raj Englangbam, Surma',
    },{
        path: 'assets/13.mp3',
        displayName: 'Karigumba nangse',
        cover: 'https://a10.gaanacdn.com/images/albums/26/4994726/crop_480x480_4994726.jpg',
        artist: 'Pusparan',
    },{
        path: 'assets/14.mp3',
        displayName: 'Auk Thuna',
        cover: 'https://i.ytimg.com/vi/K_utbjHKupM/maxresdefault.jpg',
        artist: 'Sadananda , Pusparani',
    },{
        path: 'assets/15.mp3',
        displayName: 'Kari Natik',
        cover: 'https://tse1.mm.bing.net/th?&id=OVP.Oj9Sg2VHFmwP-ZSjlkS9zgEsDh&w=608&h=271&c=7&pid=1.7&rs=1',
        artist: 'Pusparani,Malem',
    },{
        path: 'assets/Kundo Leirang Mamal Naidraba Thamoi Official Movie Song Release.mp3',
        displayName: 'Kundo Leirang',
        cover: 'https://th.bing.com/th/id/OIP.tCUIy0jWbZ_cF7P3UEnHFAAAAA?rs=1&pid=ImgDetMain',
        artist: 'Pusparani',
    },{
        path: 'assets/Lao Haige Lao - Konggol Official Film Song Release.mp3',
        displayName: 'Lao Haige Lao',
        cover: 'https://a10.gaanacdn.com/images/albums/24/5860224/crop_480x480_5860224.jpg',
        artist: 'Pusparani',
    },{
        path: 'assets/Lei Lei Official Music Video Release 2020.mp3',
        displayName: 'Lei Lei ',
        cover: 'https://i.ytimg.com/vi/pmznizxX3OM/maxresdefault.jpg',
        artist: 'Pusparani',
    },{
        path: 'assets/Lonthoktabi Geet Yumnam Gepelina & Jackson Amarjit & Pushparani Official MV Release 2022.mp3',
        displayName: 'Lonthoktabi',
        cover: 'https://i.ytimg.com/vi/YSV3qJM2Hnk/maxresdefault.jpg',
        artist: 'Amarjeet, Pusparani',
    },{
        path: 'assets/Oinararo Se Themlage __ Bitan Chongtham __ Anjita Khoinaijam __ Official Music Video (320 kbps).mp3',
        displayName: 'Oinararo Se Themlage',
        cover: 'https://i.ytimg.com/vi/PdtNSSj3p7g/maxresdefault.jpg',
        artist: 'Bitan, Anzita',
    },{
        path: 'assets/Pamjana khanjaba nungcba mani mamou video song.mp3',
        displayName: 'Pamjana Khnjaba',
        cover: 'https://th.bing.com/th/id/OIP.CoTi6aTNDUdzyUNHVr3BtAAAAA?rs=1&pid=ImgDetMain',
        artist: 'Aj Maisam, Pusparani',
    },{
        path: 'assets/Phijido - Official Music Video Release.mp3',
        displayName: 'Phijido',
        cover: 'https://lh3.googleusercontent.com/proxy/qyEItisRsaNAMnAZbQxeUItxK7QxVhms64aU6n53MrwE11k3XOPMcScwArgw2mxOj8l0rrTcrd2wxY_C=w1200-h630-n-k-no-nu',
        artist: 'Aj Maisanm, Pusparani',
    },{
        path: 'assets/Taningle Bala & Jelish Umananda & Pushparani Official Music Video Release 2022.mp3',
        displayName: 'Taningle',
        cover: 'https://i.ytimg.com/vi/zmn08m6Mk0Y/maxresdefault.jpg',
        artist: 'Umananda, Pusparani',
    },{
        path: 'assets/Ukhidari Nangumba.mp3',
        displayName: 'Ukhidari Nangumba',
        cover: 'https://i.ytimg.com/vi/pWjy7Vdq44w/maxresdefault.jpg',
        artist: 'Amarjeet, Pusparani',
    },{
        path: 'assets/Waana Waana Official Music Video Release JAMZ & MAXINA Pushparani Official 2023.mp3',
        displayName: 'Waana Waana',
        cover: 'https://i.ytimg.com/vi/H5eVcIbzd4E/hqdefault.jpg',
        artist: 'Pusparani, Jit',
    },{
        path: 'assets/Wakhalgee.mp3',
        displayName: 'Wakhalgee',
        cover: 'https://i.ytimg.com/vi/z7cqAqsNLPY/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AG2CIAC0AWKAgwIABABGEcgQShyMA8=&rs=AOn4CLDqni5YIcmBplvqMr21TUIyB81kAA',
        artist: 'Pusparani, Bonium',
    },{
        path: 'assets/Yengjei Nangse __ Official Music Video Release (320 kbps).mp3',
        displayName: 'Yengjei nangse',
        cover: 'https://i.ytimg.com/vi/OnISIj4J_hA/maxresdefault.jpg',
        artist: 'Jiteshwor',
    },{
        path: 'assets/ytmp3free.cc_mamal-naidraba-thamoi-youtubemp3free.org.mp3',
        displayName: 'Mamal Naidraba',
        cover: 'https://i.ytimg.com/vi/oDMM5lVqVEQ/maxresdefault.jpg',
        artist: 'Pupsarani, Aj Maisnam',
    },{
        path: 'assets/ytmp3free.cc_ngashi-hayeng-official-samadon-movie-song-release-youtubemp3free.org.mp3',
        displayName: 'Ngasi Hyen',
        cover: 'https://i.ytimg.com/vi/lrmxHg-8RgU/hqdefault.jpg',
        artist: 'Surma',
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