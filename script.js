const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 30;
const apiKey = 'idt9E-ruMMS2N8-H8amic8pYo7Jvbk0l6FVsHbeMmcs';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Check if all images were loaded
function imageLoaded() {
    console.log('Image loaded');
}


function setAttribute(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
}
}

// Create Elements for Links & Photos, add to DOM
function displayPhotos() {
    // run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to unpslash
        const item = document.createElement('a');
        setAttribute(item, {
            href: photo.links.html,
            target: '_blank',
        });
        // Create <img> for photo
        const img = document.createElement('img');
        // Put <img> inside <a> element, and put both inside our
        // image container element
        setAttribute(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        });
        // Event listener, check when each is finished loading
        imageContainer.addEventListener('loaded', imageLoaded);
        item.appendChild(img);
        imageContainer.appendChild(item);
});
}

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

// Check to see if scrolling near bottom of page, Load more photos
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
        getPhotos();
    }
});


// On load
getPhotos();
