let container = document.querySelector(".container");
let loader__container = document.querySelector(".loader__container");

setTimeout( () => {
  container.style.cssText = `
  display: grid;
  opacity: 1;
  visibility: visible;
  transform: translate3d(0 ,0 ,0);
  width: 100%;
  height: 100%;
`; 
  loader__container.style.cssText = `
    opacity: 0;
    z-index: -1;
    display: none;
  `;
}, 1000);
