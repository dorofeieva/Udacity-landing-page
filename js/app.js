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

// Navigation menu
    //Where is the navigation placed
const navList = document.querySelector('#navbar__list');





// Detect Viewport


var sec1 = document.querySelector('#section1');
var sec2 = document.querySelector('#section2');







/**
 * End Global Variables
 * 
 * Start Helper Functions
 * 
*/

let buildNavItem = () => {

}
// detect if element is in the viewport/closest to the top
const isInViewport = function (elem) {
    let bounding = elem.getBoundingClientRect();
    
    // if (bounding.top < window.innerHeight && bounding.bottom > 0)
    return (
        bounding.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        (bounding.top >= 0 || bounding.bottom > (window.innerHeight/2) )
    );
};

const removeCurrentActiveClass = (elem) => {
    const currentActive = elem.parentNode.getElementsByClassName("your-active-class");
    if (currentActive.length > 0) { 
        currentActive[0].classList.remove("your-active-class");
          }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildNavMenu = () => {
    //  loop to detect all sections and compile into #navbar__list
    for (const _section of allsections) {
        const navLi = document.createElement('li');
        // const nav_a = document.createElement('a');
        // nav_a.setAttribute('href', '#'+sect_id);
        // navLi.appendChild(nav_a);
        const sect_id = _section.getAttribute('id');
        const sect_title = _section.getAttribute('data-nav');
        navLi.setAttribute('id', 'nav-'+sect_id);
        navLi.setAttribute('data-anchor', sect_id);
        navLi.textContent = sect_title;
        navList.appendChild(navLi);
    }
     // console.log('buildNavMenu func loaded');
}


// Add class 'active' to section when near top of viewport 

const setasActive = () => {

    for (const section_ of allsections) {
        
        if (isInViewport(section_)) {
            const nav_of_section = navList.querySelector('#nav-'+section_.id);

            // remove previous active class 
            removeCurrentActiveClass(nav_of_section);
            removeCurrentActiveClass(section_);
            return (
                nav_of_section.classList.add("your-active-class"),
                section_.classList.add("your-active-class")
            );
        }
    }
}


// Scroll to anchor ID using scrollTO event

function scrollTO(evt) {
    const idToScroll = evt.target.getAttribute('data-anchor');
    const elmnt = document.getElementById(idToScroll);
    elmnt.scrollIntoView({behavior: "smooth"});
    // console.log('scrollTO func loaded');
}





/**
 * End Main Functions
 * Begin Events
 * 
*/

document.addEventListener("DOMContentLoaded", function() {
    
    // Build menu 
    buildNavMenu();

    // Scroll to section on link click
    navList.addEventListener("click", scrollTO);

 
    // Set sections as active
    window.addEventListener('scroll', setasActive);



});










