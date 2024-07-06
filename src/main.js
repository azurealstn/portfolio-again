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

/**
 * Home 섹션의 반정도 넘어가면 화살표 아이콘 보여주기
 */
const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY >= homeHeight / 2) {
    arrowUp.style.opacity = '1';
  } else {
    arrowUp.style.opacity = '0';
  }
});

/**
 * 모바일버전 메뉴 구현
 */
const headerToggle = document.querySelector('.header__toggle');
const headerMenu = document.querySelector('.header__menu');

headerToggle.addEventListener('click', () => {
  headerMenu.classList.toggle('open');
});

/**
 * Navbar 메뉴 클릭시 메뉴를 자동으로 닫아줌
 */
headerMenu.addEventListener('click', () => {
  headerMenu.classList.remove('open');
});