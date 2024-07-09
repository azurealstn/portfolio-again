'use strict';

const sectionIds = ['#home', '#about', '#skills', '#work', '#testimonials', '#contact'];
const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[href="${id}"]`));
const visibleSections = sectionIds.map(() => false);

const options = {

};
const observer = new IntersectionObserver(observerCallback, options);

sections.forEach(section => observer.observe(section));

function observerCallback(entries) {
  let selectLastOne;
  entries.forEach(entry => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;
    if (index === sectionIds.length - 1 && 
        entry.isIntersecting && 
        entry.IntersectionRadio >= 0.99) {
      selectLastOne = true;
    }
  });

  const navIndex = selectLastOne ? sectionIds.length - 1 : findFirstIntersecting(visibleSections);

  console.log(navIndex);
}

function findFirstIntersecting(intersections) {
  const index = intersections.indexOf(true);
  return index >= 0 ? index : 0;
}