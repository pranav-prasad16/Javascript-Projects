// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// select DOM items
const toggleBtn = document.querySelector('.nav-toggle');
const navList = document.querySelector('.links');

toggleBtn.addEventListener('click', () => {
    navList.classList.toggle('show-links');
});