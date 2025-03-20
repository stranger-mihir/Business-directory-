// Search functionality for index.html
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.search-bar button');
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const searchTerm = document.querySelector('.search-bar input:first-child').value;
            const location = document.querySelector('.search-bar input:nth-child(2)').value;
            console.log(`Searching for ${searchTerm} in ${location}`);
            // Add actual search logic here with backend integration
        });
    }
});