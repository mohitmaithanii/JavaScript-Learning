function addLanguage(langName) {
    const li = document.createElement("li")
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li)
}
addLanguage("python")
addLanguage("typescript")

// optimized approach:
/* addOptLanguage function is an optimized version of addLanguage function
which uses createTextNode instead of innerHTML to prevent any potential
XSS attacks */
function addOptLanguage(langName) {
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(langName))
    document.querySelector(".language").appendChild(li)
}
addOptLanguage("java")

// Edit value:
// 1: 
const secondLang = document.querySelector("li:nth-child(2")
const newLi = document.createElement("li")
newLi.textContent = "Kotlin"
secondLang.replaceWith(newLi)

// 2:
const firstLang = document.querySelector("li:first-child")
firstLang.outerHTML = "<li>Typescript</li>"

// Remove value:
const lastLang = document.querySelector("li:last-child")
lastLang.remove()
