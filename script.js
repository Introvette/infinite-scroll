
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 15;
const apiKey = 'idt9E-ruMMS2N8-H8amic8pYo7Jvbk0l6FVsHbeMmcs';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`


// Create Elements for Links & Photos, add to DOM
function displayPhotos() {
    // run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to unpslash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // Create <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        // Put <img> inside <a> element, and put both inside our
        // image container element
        item.appendChild(img);
        imageContainer.appendChild(item);
});

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // Catch error here
    }
}

// On load
getPhotos();
}
