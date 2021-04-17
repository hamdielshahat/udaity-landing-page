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

const nav = document.getElementById("navbar__list");
const main = document.querySelector("main");
let sections = document.getElementsByTagName("section");
let sectionsDefaultNumber = sections.length;
let newSectionNo = sections.length + 1;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
const createMenu = () => {
  sectionsNo = sections.length;

  // next condition to check it's full menu ( which is default sections number in HTML ) or it's a new item
  if (sectionsNo === sectionsDefaultNumber) {
    for (let i = 1; i <= sectionsNo; i++) {
      createOneItem(i);
    }
  } else {
    createOneItem(newSectionNo);
  }

  // newLi.innerHTML = `<a href="#${id}" data-nav-item="${id}" class="menu__link">${secName}</a>`;
};

const createOneItem = (itemNo) => {
  const newLi = document.createElement("li");
  newLi.innerHTML = `<a href="#section${itemNo}" data-nav-item="section${itemNo}" class="menu__link">Section ${itemNo}</a>`;
  nav.appendChild(newLi);
};

const isInViewport = (element) => {
  const sectionPosition = element.getBoundingClientRect();
  if (
    window.document.documentElement.clientHeight / 2 > sectionPosition.top &&
    document.documentElement.clientHeight / 2 < sectionPosition.bottom

    // sectionPosition.top >= 0 &&
    // sectionPosition.left >= 0 &&
    // sectionPosition.right <=
    //   (window.innerWidth || document.documentElement.clientWidth) &&
    // sectionPosition.bottom <=
    //   (window.innerHeight || document.documentElement.clientHeight)
  ) {
    return true;
  } else {
    return false;
  }
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
/*
  // Add class 'active' to section when near top of viewport
  //to remove old active nav
  // Set sections as active
*/
const toggleActiveSection = () => {
  for (section of sections) {
    const activeNav = document.querySelector(`a[data-nav-item=${section.id}]`);
    if (isInViewport(section)) {
      // add active nav
      if (activeNav) activeNav.classList.add("active-nav");
      // add active section if not added
      if (!section.classList.contains("your-active-class")) {
        section.classList.add("your-active-class");
      }
    } else {
      // remove active classes from unshown sections
      section.classList.remove("your-active-class");
      if (activeNav) activeNav.classList.remove("active-nav");
    }
  }
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
createMenu();

document.addEventListener("scroll", toggleActiveSection);

// Create New Section

document.getElementById("add-new-section").addEventListener("click", () => {
  if (newSectionNo <= 10) {
    htmlSectionText = `<section id="section${newSectionNo}" data-nav="Section ${newSectionNo}"><div class="landing__container"><h2>Section ${newSectionNo}</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
  fermentum metus faucibus lectus pharetra dapibus. Suspendisse
  potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
  lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
  convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
  eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam
  nunc eu augue.</p></div></section>`;
    main.insertAdjacentHTML("beforeend", htmlSectionText);
    sections = document.getElementsByTagName("section");
    createMenu();
    newSectionNo++;
  } else {
    alert("You Cannot add more than 10");
  }
});
