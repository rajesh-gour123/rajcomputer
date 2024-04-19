document.addEventListener('DOMContentLoaded', function() {
    const videoSection = document.getElementById('videoSection');

    // Sample video data
    const videos = [
        {
            thumbnail: 'https://via.placeholder.com/300x200',
            description: 'Description for Video 1'
        },
        {
            thumbnail: 'https://via.placeholder.com/300x200',
            description: 'Description for Video 2'
        },
        {
            thumbnail: 'https://via.placeholder.com/300x200',
            description: 'Description for Video 3'
        }
    ];

    // Function to display videos
    function displayVideos() {
        videoSection.innerHTML = ''; // Clear previous videos

        videos.forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.classList.add('video-item');

            videoItem.innerHTML = `
                <img src="${video.thumbnail}" alt="YouTube Thumbnail">
                <p>${video.description}</p>
            `;

            videoSection.appendChild(videoItem);
        });
    }

    // Initial display
    displayVideos();
});