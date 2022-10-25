// variable that contain the navigation bar.
let nav = document.querySelector('#navbar__list');


// first create list item elements.
let firstItem = document.createElement('li');
let secondItem = document.createElement('li');
let thirdItem = document.createElement('li');
let fourthItem = document.createElement('li');


//second append child to every item.
nav.appendChild(firstItem);
nav.appendChild(secondItem);
nav.appendChild(thirdItem);
nav.appendChild(fourthItem);



//third naming the list items.
firstItem.textContent = 'Section 1';
secondItem.textContent = 'Section 2';
thirdItem.textContent = 'Section 3';
fourthItem.textContent = 'Section 4';


// then giving them the same class name for manipulation
firstItem.className = 'navItems';
secondItem.className = 'navItems';
thirdItem.className = 'navItems';
fourthItem.className = 'navItems';


//styling the navigation bar using css.
nav.style.cssText = 'background-color:blue; height: 70px;';


//collecting in one class.
let navItems = document.querySelectorAll('.navItems');
let secContainer = document.querySelectorAll('.secContainer');

//give styles to navigation bar items and give them the events and what shoud happen when every event happened.
for (let i = 0; i < navItems.length; i++) {
  navItems[i].style.cssText = 'color:white; margin: 15px; height: 20px; text-align:center; margin-top: 9px; padding: 13px; ';

  navItems[i].addEventListener('click', function (event) {
    event.preventDefault();
    secContainer[i].scrollIntoView({ behavior: 'smooth' });
    navItems[i].style.cssText += 'background-color: white;  cursor: pointer;';
  });

  navItems[i].addEventListener('mouseover', function () {
    navItems[i].style.cssText += 'background-color: purple; color: white; cursor: pointer; border-radius:35%;';
  });

  navItems[i].addEventListener('mouseleave', function () {
    navItems[i].style.cssText += 'background-color: blue; color: white; cursor: auto;';
  });
}

// controlling the section that will be active
window.addEventListener('scroll', function () {
  for (let i = 0; i < secContainer.length; i++) {
    let windowHeight = window.innerHeight;
    let sectionTop = secContainer[i].getBoundingClientRect().top;
    let sectionBottom = secContainer[i].getBoundingClientRect().bottom;

    if (sectionTop > 0 && sectionTop < windowHeight && sectionBottom < windowHeight || sectionBottom > windowHeight && sectionTop < windowHeight) {
      secContainer[i].classList.add('active');
      navItems[i].style.cssText += 'color:black; background-color: white; border-radius:30%;';
    }
    else if
      (sectionTop <= 0 || sectionBottom <= 0 || sectionTop > windowHeight || sectionBottom > windowHeight || sectionTop < windowHeight || sectionBottom < windowHeight) {
      secContainer[i].classList.remove('active');
      navItems[i].style.cssText += 'color: white; background-color: blue; cursor: auto; border-radius:30%;';
    }
  }
});





