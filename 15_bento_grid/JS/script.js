const BASE_URL = "http://nodejs1.dszcbaross.edu.hu:21003"
const APP_URL = "http://nodejs1.dszcbaross.edu.hu:21003/api/allPictures"

window.addEventListener('DOMContentLoaded', fetchPictures())

async function fetchPictures() {
    const gallery = document.querySelector('#gallery')
    gallery.innerHTML = ""

    try {
        const res = await fetch(APP_URL)
        const image = await res.json()
        renderImages(image, gallery)
    } catch (error) {
        console.log(error);
        const p = document.createElement('p')
        p.textContent = `Nem sikerült betölteni a képeket (${error})`
        gallery.append(p)
    }
}

function renderImages(image, gallery) {
    image.forEach(image => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.id = image.id
        gallery.append(card)

        const img = document.createElement('img')
        img.src = `${BASE_URL}${image.img}`
        img.alt = image.name
        img.title = image.name
        image.loading = 'lazy'
        card.append(img)
    });
}