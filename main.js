const quotes = [
    {
        text: 'Быть идеальным тоже непросто. Если ты сильный, ты очень скоро остаёшься один и становишься заносчивым, даже если изначально ты давал людям всё, чего от тебя ожидали.',
        id: 1,
        episode: 12
    }, 

    {
        text: 'У того, кто свернёт с пути справедливости, нет смелости, но когда есть сильный лидер, трусости не остаётся места. Так сказал первый Хокаге.',
        id: 2,
        episode: 12
    },

    {
        text: 'Не важно, что за тьма ждет впереди. Я не сойду с этого пути! Я обрету силу, несмотря ни на что!',
        id: 2,
        episode: 12
    },

    {
        text: 'За моею спиной крылья, имя которым настойчивость! Порою настойчивость может принять форму крыльев и сделать даже невозможное возможным!',
        id: 2,
        episode: 12
    },

    {
        text: 'pupupu4',
        id: 2,
        episode: 12
    }


]

const quote = document.querySelector('.quote__content-text');
const quoteBtn = document.querySelector('.quote__content-btn');

quote.innerHTML = quotes[0].text;

quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * 10);
    quote.innerHTML = quotes[random].text;
})