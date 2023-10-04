const quotes = [
    {
        text: 'IF YOU DON’T LIKE THE HAND THAT FATE’S DEALT YOU WITH, FIGHT FOR A NEW ONE.',
        source: 'Наруто',
        id: 1
    }, 

    {
        text: 'FAILING DOESN’T GIVE YOU A REASON TO GIVE UP, AS LONG AS YOU BELIEVE.',
        source: 'Наруто',
        id: 2,
        episode: 12
    },

    {
        text: 'Не важно, что за тьма ждет впереди. Я не сойду с этого пути! Я обрету силу, несмотря ни на что!',
        id: 3,
        source: 'Наруто',
        episode: 12
    },

    {
        text: 'За моею спиной крылья, имя которым настойчивость! Порою настойчивость может принять форму крыльев и сделать даже невозможное возможным!',
        source: 'Наруто',
        id: 4,
        episode: 12
    },

    {
        text: 'За моею спиной крылья, имя которым настойчивость! Порою настойчивость может принять форму крыльев и сделать даже невозможное возможным!',
        source: 'Наруто',
        id: 4,
        episode: 12
    }


]

const quote = document.querySelector('.quotes__content-text');
const source = document.querySelector('.quotes__content-source');
const quoteBtn = document.querySelector('.quotes__content-btn');

quote.innerHTML = quotes[0].text;
source.innerHTML = quotes[0].source;


function removeClass(item, className) {
    if (item.classList.contains(className)) {
        item.classList.remove(className)
    }
}

function getRandom() {
    quote.classList.add('animated');
    let random = Math.floor(Math.random() * quotes.length);
    let text = quotes[random].text;
    let source = quotes[random].source;
    quote.innerHTML = text;
    source.innerHTML = source;
    
}


quoteBtn.addEventListener('click', getRandom);






//timer and clocks

function setTime() {
    const hourId = document.querySelector('.clock__hours');
    const minutesId = document.querySelector('.clock__minutes');
    const secondsId = document.querySelector('.clock__seconds');

    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hourId.innerHTML = hours < 9 ? `0${hours}` : hours;
    minutesId.innerHTML = minutes < 9 ? `0${minutes}` : minutes;
    secondsId.innerHTML = seconds < 9 ? `0${seconds}` : seconds;
}

setInterval(setTime, 1000);

function setTimer() {
    const hourId = document.querySelector('.timer__hours');
    const minutesId = document.querySelector('.timer__minutes');
    const secondsId = document.querySelector('.timer__seconds');

    const start = document.querySelector('.play');

    start.addEventListener('click', () => {
        const timerTime = new Date();
        console.log(timerTime);
        
    })
}




//spotify
window.onSpotifyWebPlaybackSDKReady = () => {
    const token = '[My access token]';
    const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(token); },
        volume: 0.5
    });

    // Ready
    player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
    });

    player.addListener('initialization_error', ({ message }) => {
        console.error(message);
    });

    player.addListener('authentication_error', ({ message }) => {
        console.error(message);
    });

    player.addListener('account_error', ({ message }) => {
        console.error(message);
    });

    document.getElementById('togglePlay').onclick = function() {
      player.togglePlay();
    };

    player.connect();
}