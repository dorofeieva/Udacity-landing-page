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
const header_nav = document.querySelector(".page__header");


// Detect Viewport


const btnCollapse = document.querySelectorAll(".btn-collapse")





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
    console.log('Set Height of content');
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
    for (const section of allsections) {
        const navLi = document.createElement('li');
        const sect_id = section.getAttribute('id');
        const sect_title = section.getAttribute('data-nav');
        navLi.setAttribute('id', 'nav-'+sect_id);
        navLi.setAttribute('data-anchor', sect_id);
        navLi.textContent = sect_title;
        navList.appendChild(navLi);
    }
     console.log('buildNavMenu func loaded');
}
// Hide fixed navigation bar while not scrolling (it should still be present on page load).
// Hint: setTimeout can be used to check when the user is no longer scrolling.
const hideNavMenu = () => {
    setTimeout(function() { 
        header_nav.style.visibility = "hidden";
        // alert("Hello"); 
    }, 4000);
};
const noHideNavMenu = () => {
    header_nav.style.visibility = "visible";
    // navList.style.display = "block";
};
const appearNavMenu = () => {
    noHideNavMenu();
    hideNavMenu();
    // if(navList.mouseIsOver) {
    //     navList.style.display = "block";
    // }
};

// Add class 'active' to section when near top of viewport 

const setasActive = () => {
    console.log('setasActive');
    for (const section_ of allsections) {
        
        if (isInViewport(section_)) {
            const nav_of_section = navList.querySelector('#nav-'+section_.id);
            // console.log('setasActive:', section_.getAttribute('id'));
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
    console.log('scrollTO func loaded');
}

const collapseSection = (e) => {
    const content = e.target.nextElementSibling;
  
    if (e.target && e.target.matches("button.btn-collapse")) {
        e.target.classList.toggle("active");

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
    buildNavMenu();

    // set absolute height of collapsable sections of content to make slow transition
    setHeightOfContent();

    // Scroll to section on link click
    navList.addEventListener("click", scrollTO);

    //  Make sections collapsible
    document.addEventListener("click", collapseSection);

 
    // Set sections as active
    window.addEventListener('scroll', setasActive);
    window.addEventListener('scroll', appearNavMenu);
    window.addEventListener('mouseover', noHideNavMenu);
});
