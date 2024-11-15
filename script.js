document.addEventListener("DOMContentLoaded", () => {
    // Infinite scroll
    window.addEventListener("scroll", () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            // Trigger Tumblr's infinite scroll function
            window.Tumblr.AutoPaginate && window.Tumblr.AutoPaginate();
        }
    });

    // Twitter Feed Embed
    const twitterFeed = document.getElementById("twitter-feed");
    twitterFeed.innerHTML = `
        <a class="twitter-timeline" 
           href="https://x.com/yourusername"
           data-theme="dark">Tweets by Double Greyhound</a>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    `;
});
