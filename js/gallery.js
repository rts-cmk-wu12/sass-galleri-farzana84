document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const imageFolder = 'gallery-images/';
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg','image4.jpg', 'image5.jpg', 'image6.jpg','image7.jpg', 'image8.jpg', 'image9.jpg','image1.jpg', 'image2.jpg', 'image3.jpg','image4.jpg', 'image5.jpg']; 


    images.forEach(image => {
        const imageName = image.split('.')[0]; 
        console.log(imageName);
    });

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = `${imageFolder}${image}`;
        imgElement.alt = image;
        gallery.appendChild(imgElement);
    });
});

/*document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const navLinks = document.querySelectorAll('nav ul li a');
    const searchBar = document.getElementById('search-bar');
    let images = [];

    // Fetch images from JSON file
    fetch('images.json')
        .then(response => response.json())
        .then(data => {
            images = data.images;
            displayImages(images);
        })
        .catch(error => console.error('Error fetching images:', error));

    // Display images
    function displayImages(images) {
        gallery.innerHTML = '';
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = `images/${image.name}`;
            imgElement.alt = image.category;
            gallery.appendChild(imgElement);
        });
    }

    // Filter images by category
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            const filteredImages = category === 'all' ? images : images.filter(image => image.category === category);
            displayImages(filteredImages);
        });
    });

    // Filter images by search term
    searchBar.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const filteredImages = images.filter(image => image.name.toLowerCase().includes(searchTerm));
        displayImages(filteredImages);
    });
});
*/
