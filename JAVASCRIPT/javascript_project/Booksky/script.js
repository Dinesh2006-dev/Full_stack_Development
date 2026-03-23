var popupOverlay = document.querySelector(".popup-overlay")
var popupBox = document.querySelector(".popup-box")
var addPopupBtn = document.getElementById("add-popup-button")

addPopupBtn.addEventListener("click", function () {
    popupOverlay.style.display = "block"
    popupBox.style.display = "block"
})

var cancelPopup = document.getElementById("cancel-popup")

cancelPopup.addEventListener("click", function (event) {
    event.preventDefault()
    popupOverlay.style.display = "none"
    popupBox.style.display = "none"
})

var container = document.querySelector(".container")
var addBook = document.getElementById("add-book")
var bookTitleInput = document.getElementById("book-title-input")
var bookAuthorInput = document.getElementById("book-author-input")
var bookDescriptionInput = document.getElementById("book-des-input")

addBook.addEventListener("click", function (event) {
    event.preventDefault()

    if (
        bookTitleInput.value !== "" &&
        bookAuthorInput.value !== "" &&
        bookDescriptionInput.value !== ""
    ) {
        var div = document.createElement("div")
        div.setAttribute("class", "book-container")

        div.innerHTML = `
            <h2>${bookTitleInput.value}</h2>
            <h5>${bookAuthorInput.value}</h5>
            <p>${bookDescriptionInput.value}</p>
            <button onclick="deletebook(event)">Delete</button>
        `

        container.append(div)

        popupOverlay.style.display = "none"
        popupBox.style.display = "none"

        bookTitleInput.value = ""
        bookAuthorInput.value = ""
        bookDescriptionInput.value = ""
    } else {
        alert("Please fill all the fields")
    }
})

function deletebook(event) {
    event.target.parentElement.remove()
}
