/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/



/**
 * Define Global Variables
 * 
*/
const allsections = document.querySelectorAll('section');

                    


//  data structure can represent all sections for your page, so it might be a good idea to save it to a variable.

// Navigation menu

const navList = document.querySelector('#navbar__list');
// -- li : use loop to detect all sections and compile into navlist

for (const _section of allsections) {
    // console.log(_section);

    const navLi = document.createElement('li');
    // const nav_a = document.createElement('a');
    // nav_a.setAttribute('href', '#'+sect_id);
    // navLi.appendChild(nav_a);
    const sect_id = _section.getAttribute('id');
    const sect_title = _section.getAttribute('data-nav');
    // -- build menu
    navLi.setAttribute('id', 'nav-'+sect_id);
    navLi.setAttribute('data-anchor', sect_id);
    navLi.textContent = sect_title;
    navList.appendChild(navLi);

}







/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavMenu() {
    // console.log('DOM fully loaded and parsed');


    
    // console.log("Navbar is builded");
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

function scrollTO(evt) {
    const idToScroll = evt.target.getAttribute('data-anchor');
    const elmnt = document.getElementById(idToScroll);
    elmnt.scrollIntoView({behavior: "smooth"});
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener("DOMContentLoaded", buildNavMenu);

// Scroll to section on link click

navList.addEventListener("click", scrollTO);

// Set sections as active


