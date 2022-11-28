const ITEM_LENGTH = 11;

const fetchNextDodo = async () => {
    const response = await fetch("https://faas-lon1-917a94a7.doserverless.co/api/v1/web/fn-e61fc1e4-1801-4bd5-8c0c-92857d566040/notion/fetch");
    const data = await response.json();
    return [data.next, data.event];
}

export const daysUntilNextDodo = async () => {
    const [nextDodo, event] = await fetchNextDodo();
    const today = new Date();
    const nextDodoDate = new Date(nextDodo);
    const diffTime = Math.abs(nextDodoDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return [diffDays, event];
}

export const loadCarousel = () => {
    const carrouselItemsContainer = document.querySelector('.carrousel-items');
    const carrouselItems = getItems();
    const domItems = [];
    carrouselItems.forEach(item => {
        const img = document.createElement('img');
        img.src = item;
        img.classList.add('carrousel-item');
        carrouselItemsContainer.appendChild(img);
        domItems.push(img);
    });
    let i = Math.floor(Math.random() * domItems.length);
    domItems[i].classList.add('visible');
    let beforeI = 0;
    setInterval(() => {
        domItems[beforeI].classList.remove('after');
        domItems[i].classList.remove('visible');
        // get random number between 0 and 10
        beforeI = i;
        domItems[i].classList.add('after');
        i = (i + 1) % domItems.length;
        domItems[i].classList.add('visible');
    }, 3000 + 10000 * Math.random());
}

const getItems = () => {
    const items = [];
    for (let i = 0; i < ITEM_LENGTH; i++) {
        items.push(`./assets/images/${i + 1}.jpg`)
    }
    return items;
};
