// variable that contain the navigation bar.
let nav = document.querySelector('#navbar__list');

//the old code:

// // first create list item elements.
// let firstItem = document.createElement('li');
// let secondItem = document.createElement('li');
// let thirdItem = document.createElement('li');
// let fourthItem = document.createElement('li');
// //second append child to every item.
// nav.appendChild(firstItem);
// nav.appendChild(secondItem);
// nav.appendChild(thirdItem);
// nav.appendChild(fourthItem);
// //third naming the list items.
// firstItem.textContent = 'Section 1';
// secondItem.textContent = 'Section 2';
// thirdItem.textContent = 'Section 3';
// fourthItem.textContent = 'Section 4';
// // then giving them the same class name
// firstItem.className = 'navItems';
// secondItem.className = 'navItems';
// thirdItem.className = 'navItems';
// fourthItem.className = 'navItems';


//the new code to make it dynamic
const sectionNumber= document.querySelectorAll('.secContainer')

//give every section his properties in dynamic form
for(const section of sectionNumber ){
  const navItem = document.createElement('li');
  nav.appendChild(navItem);
  navItem.textContent = section.getAttribute('data-nav');
  navItem.className = 'navItems';
}


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
    let viewHeight = window.innerHeight;
    let contentTop = secContainer[i].getBoundingClientRect().top;
    let contentbottom = secContainer[i].getBoundingClientRect().bottom;

    if (contentTop > 0 && contentTop < viewHeight && contentbottom < viewHeight || contentbottom > viewHeight && contentTop < viewHeight) {
      secContainer[i].classList.add('active-right-now');
      navItems[i].style.cssText += 'color:black; background-color: white; border-radius:30%;';
    }
    else if
      (contentTop <= 0 || contentbottom <= 0 || contentTop > viewHeight || contentbottom > viewHeight || contentTop < viewHeight || contentbottom < viewHeight) {
      secContainer[i].classList.remove('active-right-now');
      navItems[i].style.cssText += 'color: white; background-color: blue; cursor: auto; border-radius:30%;';
    }
  }
});




