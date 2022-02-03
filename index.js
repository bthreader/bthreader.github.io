const about_nav = document.getElementById('about_nav');
const title_div = document.getElementsByClassName('title')[0];
const about_div = document.getElementsByClassName('about')[0];
const story_nav = document.getElementById("story_nav");
const story_div = document.getElementById("story-box");

about_clicks = 0;

about_nav.addEventListener('click', function () {
    about_clicks += 1;
    story_div.style.display = "none";
    story_clicks = 0;

    // Open
    if (about_clicks < 2) {
        about_div.style.display = "block";
        title_div.style.display = "none";
    }

    // Close
    else {
        about_div.className = "about fadeout";
        
        // After the animation is finished
        setTimeout(function () {
            about_div.style.display = "none";
            title_div.style.display = "block";
            about_div.className = "about fadein";
        },500);
        
        // Reset clicks
        about_clicks = 0;
    }
})

story_clicks = 0;

story_nav.addEventListener('click', function(){
    story_clicks += 1;
    about_div.style.display = "none";
    about_clicks = 0;
    
    // Open
    if (story_clicks < 2) {
        story_div.style.display = "block";
        title_div.style.display = "none";
    }

    // Close
    else {
        story_div.className = "fadeout";
    
        setTimeout(function () {
            story_div.style.display = "none";
            title_div.style.display = "block";
            story_div.className = "fadein";
        },500);

        story_clicks = 0;
    }
})