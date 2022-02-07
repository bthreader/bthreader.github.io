const about_nav = document.getElementById('about_nav');
const title_div = document.getElementById('title');
const about_div = document.getElementById('about');
const click = document.getElementById('click');
const main = document.getElementById('main');

about_clicks = 0;

about_nav.addEventListener('click', function () {
    about_clicks += 1;

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

rotation = 0;
backgrounds = ['black','pink'];
fonts = ['white','darkslateblue'];

click.addEventListener('click', function () {
    rotation += 1;
    
    // Restart the rotation
    if (rotation > 1) {
        rotation = 0;
    }
    
    // Change the body font colour
    document.getElementsByTagName("body")[0].style.color = fonts[rotation];
    
    // Change a:link, a:visited, a:active font colour
    var sheet = document.styleSheets[0];
    var rules = sheet.cssRules;
    rules[4].style.color = fonts[rotation];

    // Change the background colour
    main.style.background = backgrounds[rotation];
})