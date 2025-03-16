//your code here
// Add interactive features to the table
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effect to table rows
    const tableRows = document.querySelectorAll('tbody tr');
    
    tableRows.forEach(row => {
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = '#f9f9f9';
        });
        
        row.addEventListener('mouseout', () => {
            row.style.backgroundColor = '';
        });
    });

    // Add media event listeners
    const mediaElements = {
        image: document.querySelector('img'),
        video: document.querySelector('video'),
        audio: document.querySelector('audio')
    };

    // Log media loading status
    Object.entries(mediaElements).forEach(([type, element]) => {
        element.addEventListener('loadeddata', () => {
            console.log(`${type} loaded successfully`);
        });
        
        element.addEventListener('error', (err) => {
            console.error(`Error loading ${type}:`, err);
        });
    });
});