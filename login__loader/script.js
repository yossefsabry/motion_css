const button = document.querySelector("button");
const massage = document.querySelector("button .massage");
const loader = document.querySelector("button .loading");

button.addEventListener("click", () => {
  massage.style.cssText = ` display: none !important;`;
  loader.style.cssText = `
  visibility: visible;
  opacity: 1;
  position: relative;
  `;
  setTimeout(() => {
    massage.innerHTML = "Login Success";
    massage.style.cssText = ` display: block !important;`;
    button.style.background = "#3bdb90";
    loader.style.cssText = `
      visibility: hidden;
      position: absolute;
      opacity: 0;
  `;
  }, 3000);
});
