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

// Global variable to store all sections
const sections = document.querySelectorAll('section');

// Global variable to retrieve ul element
const ul = document.getElementById('navbar__list');

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

//Looping over all sections

for (let i = 0; i < sections.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = "<a class = 'menu__link' href = ''>" + sections[i].getAttribute("data-nav") + "</a>";
    ul.appendChild(li);

};


// Function to add active class to currently active menu item 
const sec = document.querySelectorAll(".menu__link");
function setActive () {
    for (let i = 0; i < sec.length; i++)
        
        // remove the acive class
        sec[i].classList.remove('active');
    // Add the active class to the current section
    this.classList.add('active');

};

  // Set sections as active
  for (let i = 0; i < sec.length; i++)
    sec[i].addEventListener('click', setActive);


// Function to check if section is visible in the Viewport
function sectionInViewPort(element) {
    let rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    
};

// Function to add active class to the current section (highlight it)
function setActiveClass() {
    for (const section of sections) {
        // Set sections as active
        if(sectionInViewPort(section)){
            if (!section.classList.contains('your-active-class')){
                //Then add "your-active-class"
                section.classList.add('your-active-class');
                //Add section background-color 
                section.style.cssText = "background-color:#FF7C80;border:3px dashed yellow";
            }

        }else{ // Remove "your-active-class"
        section.classList.remove('your-active-class');
        // remove section background-color 
        section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
        };
    };
};

document.addEventListener('scroll', setActiveClass);


// Function to scroll to section  
const links = document.querySelectorAll(".menu__link");
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (event) => {
        event.preventDefault();
        let index = i + 1;
        let scrolled_section = document.getElementById("section" + index);
        scrolled_section.scrollIntoView({behavior: "smooth", block: "center"});
     

    });
};


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


