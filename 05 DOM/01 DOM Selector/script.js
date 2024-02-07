//! DOM Selectors:

// `document.getElementById("title")`: This selector is used to select an HTML element with a specific ID of "title". The `.id`, `.className`
document.getElementById("title")
document.getElementById("title").id
document.getElementById("title").className

// `.getAttribute("class")` methods are used to get the value of the ID, class, and attributes of the selected HTML element, respectively.
document.getElementById("title").getAttribute("id")
document.getElementById("title").getAttribute("class")

//  The `.setAttribute("class", "test heading")` method is used to set the value of the class attribute of the selected HTML element.
document.getElementById("title").setAttribute("class", "test heading")

const title = document.getElementById("title")
/* 
`title.style.backgroundColor = "blue"`
`title.style.padding = "15px"`
`title.style.borderRadius = "10px"`

These lines are used to change the style of the selected HTML element. The style property is used to access the CSS styles of the element, and the properties of the style object (e.g. `backgroundColor`, `padding`, `borderRadius`) are used to change the corresponding CSS styles.
*/

title.style.backgroundColor = "blue"
title.style.padding = "15px"
title.style.borderRadius = "10px"

// `textContent` gets the text content of the element.
title.textContent

// `innerText` gets the text content of the element, and strips any HTML tags
title.innerText

// `innerHTML` gets or sets the HTML content of the element, including any child elements.
title.innerHTML


// `document.getElementsByClassName("heading")`: This selector is used to select all HTML elements with the class "heading".
document.getElementsByClassName("heading")

// `document.querySelector()`: These selectors are used to select specific HTML elements using the querySelector method.
document.querySelector("h1")
document.querySelector("#title")
document.querySelector(".heading")
document.querySelector(`input[type="password"]`)
document.querySelector("ul")

const myUl = document.querySelector("ul")

myUl.querySelector("li")
const turnGreen = myUl.querySelector("li")
turnGreen.style.color = "green"
turnGreen.innerText = "Turn Green!"

// `document.querySelectorAll("li")`: This selector is used to select all <li> elements on the page. This method returns a static NodeList of all elements that match the specified selector.
document.querySelectorAll("li")
