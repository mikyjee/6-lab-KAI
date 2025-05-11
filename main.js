const car = [
    { name: 'BMW-M2-Coupe', price: '40000', img: 'BMW-M2-Coupe.jpg' },
    { name: 'Audi-A8-Edition-21', price: '30000', img: 'Audi-A8-Edition-21.jpg' },
    { name: 'bentley-continental-gt-speed-black-edition', price: '20000', img: 'bentley-continental-gt-speed-black-edition.jpg' },
    { name: 'mercedes-benz-coupe', price: '10000', img: 'mercedes-benz-coupe.jpg' }
]
function createCard(car) {
    return `
    <div class="card">
    <div class="card-img">
        <img src="${car.img}" alt="${car.name}">
        </div>
            <h3>${car.name}</h3>
              <p>${car.price}</p>
        </div>
    `
}
const templates = car.map(car => createCard(car))
const html = templates.join(' ')
document.querySelector('.list').innerHTML = html