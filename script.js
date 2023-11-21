function getRandomCat() {
    // Using the Cat API to get random cat images
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            const catImageElement = document.getElementById('catImage');
            catImageElement.src = data[0].url;
            catImageElement.alt = 'Random Cat Image';
        })
        .catch(error => console.error('Error fetching cat image:', error));
}
