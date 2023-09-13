const quotes = [
    {
        text: 'Быть идеальным тоже непросто. Если ты сильный, ты очень скоро остаёшься один и становишься заносчивым, даже если изначально ты давал людям всё, чего от тебя ожидали.',
        source: 'Наруто',
        id: 1,
        episode: 12
    }, 

    {
        text: 'У того, кто свернёт с пути справедливости, нет смелости, но когда есть сильный лидер, трусости не остаётся места. Так сказал первый Хокаге.',
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
    }


]

const quote = document.querySelector('.quotes__content-text');
const source = document.querySelector('.quotes__content-source');
const quoteBtn = document.querySelector('.quotes__content-btn');

quote.innerHTML = quotes[0].text;
source.innerHTML = quotes[0].source;

quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 10);
    quote.innerHTML = quotes[random].text;
    source.innerHTML = quotes[random].source;
    quote.classList.add('animated')
})

function setTime() {
    const hourId = document.querySelector('.timer__hours');
    const minutesId = document.querySelector('.timer__minutes');
    const secondsId = document.querySelector('.timer__seconds');

    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hourId.innerHTML = hours;
    minutesId.innerHTML = minutes;
    secondsId.innerHTML = seconds;

    
}

setInterval(setTime, 1000);