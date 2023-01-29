const $ = (selectName) => {
  return document.querySelector(selectName);
};
const $a = (selectName) => {
  return document.querySelectoAll(selectName);
};

function createElement  (tagName, className, content)  {
  const newEelement = document.createElement(tagName);
  if (className) {
    newEelement.setAttribute("class", className);
  }
  if (content) {
    newEelement.innerHTML = content;
  }
  return newEelement;
};
