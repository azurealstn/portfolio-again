/**
 * Header에 페이지 아래로 스크롤시 다크 스타일링 적용
 */
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', (e) => {
  const scrollY = window.scrollY;

  if (scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});


/**
 * 스크롤링이 되면 Home 섹션이 점진적으로 투명하게 적용
 */
const homeContainer = document.querySelector('.home__container');

const homeHeight = homeContainer.offsetHeight;

document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  homeContainer.style.opacity = 1 - scrollY / homeHeight;
});
