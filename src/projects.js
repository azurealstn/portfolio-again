'use strict';

/**
 * 프로젝트 필터링
 */
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', (event) => {
  const categoryData = event.target.dataset.category;

  if (categoryData === undefined) {
    return;
  }

  handleActiveSelection(event);
  
  filterProjects(categoryData);
});

// Active 메뉴 재설정
function handleActiveSelection(event) {
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  event.target.classList.add('category--selected');
}

// 프로젝트 필터
function filterProjects(categoryData) {
  projects.forEach(project => {
    const typeData = project.dataset.type;
    
    if (categoryData === 'all' || categoryData === typeData) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });

  projectsContainer.classList.add('anim-out');
  setTimeout(() => {
    projectsContainer.classList.remove('anim-out');
  }, 250);
}