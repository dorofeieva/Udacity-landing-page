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

// Navigation menu
    //Where is the navigation placed
const navList = document.querySelector('#navbar__list');
const header_nav = document.querySelector(".page__header");


// Detect Viewport
const allsections = document.querySelectorAll('section');

//Buttons
const btnCollapse = document.querySelectorAll(".btn-collapse");
const btnScrollUp = document.querySelector('.btn-scrollup');




/**
 * End Global Variables
 * 
 * Start Helper Functions
 * 
*/

// Set the absolute value for the height property to animate collapsable sections ( "transition" works when the property changes)
const setHeightOfContent = () => {
    const sectionsContent = document.querySelectorAll(".content");
    for (content of sectionsContent) {
        content.style.height = content.scrollHeight + "px";
        // console.log('Set Height of content:', content.parentNode.parentNode.getAttribute("id"));
    }
    // console.log('Set Height of content');
}


// detect if element is in the viewport/closest to the top
const isInViewport = function (elem) {
    let bounding = elem.getBoundingClientRect();
    
    // if (bounding.top < window.innerHeight && bounding.bottom > 0)
    return (
        bounding.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        (bounding.top >= 0 || bounding.bottom > (window.innerHeight/2 || document.documentElement.clientHeight/2) )
    );
};

// Remove previous active class of section to make active the one in viewport
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

// build the navigation bar
const buildNavbar = () => {
    //  loop to detect all sections and compile into #navbar__list
    for (const section of allsections) {
        const navLi = document.createElement('li');
        const sect_id = section.getAttribute('id');
        const sect_title = section.getAttribute('data-nav');
        navLi.setAttribute('id', 'nav-'+sect_id);
        navLi.setAttribute('data-anchor', sect_id);
        navLi.textContent = sect_title;
        navList.appendChild(navLi);
    }
    //  console.log('buildNavMenu func loaded');
}

// Hide fixed navigation bar while not scrolling (it should still be present on page load).
// Hint: setTimeout can be used to check when the user is no longer scrolling.

const showNavbar = () => {

// appear navigation bar on scroll event
    header_nav.style.opacity = "1";

// hide navigation bar while not scrolling with setTimeout
    setTimeout(function() { 
       header_nav.style.opacity = "0";
    }, 2000);
};

// Add class 'active' to section and navigation menu item when near top of viewport 

const setasActive = () => {
    // console.log('setasActive');
    for (const section_ of allsections) {
        if (isInViewport(section_)) {
            const nav_of_section = navList.querySelector('#nav-'+section_.id);

            // Remove previous active class of navigation menu item 
            removeCurrentActiveClass(nav_of_section);
            // Remove previous active class of section
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
// scroll to top on the page on button click,
const scrollUp = () => window.scrollTo({ top: 0, left: 0 });

// that’s only visible when the user scrolls below the fold of the page.
const buttonUpAppear = () => {

    const buttonInViewport = () =>  (document.body.scrollTop > (window.innerHeight || document.documentElement.clientHeight)*1.5 || 
    document.documentElement.scrollTop > (window.innerHeight || document.documentElement.clientHeight)*1.5);

    if (buttonInViewport()) {
        // opacity here to make slowly 
        btnScrollUp.style.opacity = '1';
        // visibility remove button from the flow, otherwise we can accidentally click on button
        btnScrollUp.style.visibility = 'visible';
    }
    else {
        btnScrollUp.style.opacity = '0';
        btnScrollUp.style.visibility = 'hidden';

    }
}

//  Make sections collapsible: Event Listener on click works only for target buttons to avoid loops

const collapseSection = (e) => {
    // to get the next to button element which is ".content"
    const content = e.target.nextElementSibling;
  
    if (e.target && e.target.matches("button.btn-collapse")) {
        e.target.classList.toggle("collapsed");

        if (content.isCollapsed) {
            content.style.height = content.scrollHeight + "px";
            content.isCollapsed = false;
        } else {
            content.style.height = "0px";
            content.isCollapsed = true;
        }
    }
  
}

/**
 * End Main Functions
 * Begin Events
 * 
*/



window.addEventListener("load", function() {

    // Build menu 
    buildNavbar();

    // Set absolute height of collapsable sections of content to make slow transition
    setHeightOfContent();

    // Scroll to section on link click
    navList.addEventListener("click", scrollTO);

    // window.addEventListener('scroll', function() {
    //     showNavbar(); 
    //     setasActive();
    //     buttonUpAppear();
    // });

    // Set sections and navbar items as active
    window.addEventListener('scroll', setasActive);

    // Hide fixed navigation bar while not scrolling and show on scroll 
    window.addEventListener('scroll', showNavbar);

    // // button only visible when the user scrolls below the fold of the page.
    window.addEventListener('scroll', buttonUpAppear);

 
    //  Make sections collapsible
    document.addEventListener("click", collapseSection);


    //  scrolls to top of the page 
    btnScrollUp.addEventListener("click", scrollUp);
});

