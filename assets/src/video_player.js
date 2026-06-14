let player;

const videoID = 'XDK7ETd3uPQ'

// This function is automatically called by the YouTube API script
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: videoID, // REPLACE WITH YOUR YOUTUBE VIDEO ID
        playerVars: {
            'autoplay': 1,
            'controls': 0,        // Hide player controls
            'rel': 0,             // Don't show related videos
            'showinfo': 0,        // Hide video title (deprecated but good practice)
            'modestbranding': 1,  // Hide YouTube logo
            'loop': 1,            // Standard loop request
            'fs': 0,              // Disable fullscreen button
            'cc_load_policy': 0,  // Turn off closed captions
            'iv_load_policy': 3,  // Hide video annotations
            'autohide': 0
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.mute(); // REQUIRED for autoplay to work in modern browsers
    event.target.playVideo();
}

// Forces a seamless loop if YouTube's built-in loop fails
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        player.playVideo();
    }
}