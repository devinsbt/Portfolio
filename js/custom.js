const headerIconLinkDOM = document.querySelector('.header-icon a');
const headerIconDOM = headerIconLinkDOM.children[0];
var str = headerIconDOM.offsetWidth + 'px';
headerIconLinkDOM.style.width = str;

const mainNav = document.getElementById('mainNav');

function shrinkingNavBar() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mainNav.style.backgroundColor = '#060b10ef';
    mainNav.style.padding = '0rem 1rem';

    mainNav.classList.add('material');
  } else {
    mainNav.style.backgroundColor = 'rgba(0,0,0,0)';
    mainNav.style.padding = '2rem 1rem';

    mainNav.classList.remove('material');
  }
}

window.onscroll = function() {
  shrinkingNavBar();
};
