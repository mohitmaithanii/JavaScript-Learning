const parent = document.querySelector(".parent")

console.log(parent);
console.log(parent.children);
console.log(parent.children[1].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTML);
}

parent.children[1].style.color = "orange"
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const dayOne = document.querySelector(".day")
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);

console.log("NODES: ", parent.childNodes);

// create new element

const div = document.createElement("div")
console.log(div);

// Add a class name, id, title attribute, background color, padding, and inner text to the div element
div.className = "main"
div.id = Math.round(Math.random() * 10 + 1)
div.setAttribute("title", "generated title")
div.style.backgroundColor = "orange"
div.style.padding = "10px"
div.innerText = "Chai aur code"

const addText = document.createTextNode("Chai aur code")
// Append the text node to the div element
div.appendChild(addText)
// Append the div element to the body element
document.body.appendChild(div)