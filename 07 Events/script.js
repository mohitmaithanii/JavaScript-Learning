// 1:

/* document.getElementById("owl").onclick = function () {
  alert("owl clicked");
}; */

// type, timestamps, defaultPrevented
// target, toElement, sourceElement, currentTarget
// clintX, clintY, screenX, screenY
// altkey, ctrlkey, shiftkey, keycode

document.getElementById("images").addEventListener(
  "click",
  function (e) {
    console.log("click inside the url");
  },
  false
);

document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    console.log("owl clicked");
    e.stopPropagation(); // stops event from bubbling up to parent elements
  },
  false
);

document.getElementById("google").addEventListener(
  "click",
  function (e) {
    console.log("google clicked");
    e.preventDefault();
    e.stopPropagation();
  },
  false
);

// 2:

document.querySelector("#images").addEventListener(
  "click",
  function (e) {
    console.log(e.target.tagName);
    if (e.target.tagName === "IMG") {
      console.log(e.target.id);
      let removeIt = e.target.parentNode;
      removeIt.remove();
    }
    // removeIt.parentNode.removeChild(removeIt);
  },
  false
);
