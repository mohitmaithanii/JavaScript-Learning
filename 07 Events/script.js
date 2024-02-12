// JS Events:

// 1:

/* document.getElementById("owl").onclick = function () {
  alert("owl clicked");
}; */

// type, timestamps, defaultPrevented
// target, toElement, sourceElement, currentTarget
// clintX, clintY, screenX, screenY
// altkey, ctrlkey, shiftkey, keycode


// The `addEventListener` method takes two arguments: the first is the type of event to listen for (in this case, "click"), and the second is a function to be called when the event occurs. 
// The function is passed an event object (e), which contains information about the event

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
    e.preventDefault(); // prevents the default behavior of the click (following the link)
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
      removeIt.remove(); // remove the parent node (which is the <a> element) from the DOM
    }
    // removeIt.parentNode.removeChild(removeIt);
  },
  false
);
