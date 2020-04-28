# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.



## Plan

- Build menu 
- Scroll to section on link click
- Set sections as active

func // build the nav
func // Add class 'active' to section when near top of viewport
func // Scroll to anchor ID using scrollTO event

# Events: 
- on page download build nav list ;
- onclick nav item jump to section;
- when near top of viewport add class 'active' to section;


# Functions:
- select all "section"  and add to nav item as <li id="nav_section"></li> with unique id and <a></a> and title inside;
- add class "active" to viewed section;
- add item to nav, wenn new section added;

     
     
<nav class="navbar__menu">
      <!-- Navigation starts as empty UL that will be populated with JS -->
    
  <ul id="navbar__list">
    <li id="nav_section_id"> <a href="#section_id" id="nav_section_id_link"> data-nav->"Section 1"</a> </li>
  </ul>
</nav>



