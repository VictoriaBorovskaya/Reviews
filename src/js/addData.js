import reviews from "./data.js"
import { renderReviews } from "./script.js"

// функция добавления отзыва
function clearInput() {
    document.getElementById("name").value = ""
    document.getElementById("profession").value = ""
    document.getElementById("text").value = ""
    document.getElementById("file-input").value = ""
}

const addModal = document.getElementById("add-modal")
const openModal = () => (addModal.style.display = "flex")
const closeModal = () => {
    addModal.style.display = "none"
    clearInput()
}

const closeModalClick = (event) => {
    if (event.target === addModal) return (addModal.style.display = "none")
}
addModal.addEventListener("click", closeModalClick)

// для нажатия на кнопку Escape
document.addEventListener("keyup", function (event) {
    if (event.code === "Escape") {
        closeModal()
        closeThanks()
    }
})

document.getElementById("close-button").addEventListener("click", closeModal)
document
    .getElementById("add-review-button")
    .addEventListener("click", openModal)

const addModalThanks = document.getElementById("add-modal-thanks")
const thanks = () => (addModalThanks.style.display = "flex")
const closeThanks = () => (addModalThanks.style.display = "none")

const closeModalThanks = (event) => {
    if (event.target === addModalThanks)
        return (addModalThanks.style.display = "none")
}
addModalThanks.addEventListener("click", closeModalThanks)
document.getElementById("ok-button").addEventListener("click", closeThanks)

function addReview() {
    let nameValue = document.getElementById("name").value
    let professionValue = document.getElementById("profession").value
    let textValue = document.getElementById("text").value
    let imageValue = document.getElementById("file-input").value

    if (imageValue.length === 0) {
        imageValue = "https://okeygeek.ru/wp-content/uploads/2016/07/images.png"
    }

    if (professionValue.length === 0) {
        professionValue = "Клиент"
    }

    if (nameValue.length > 0 && textValue.length > 0) {
        const newReview = {
            name: nameValue,
            profession: professionValue,
            text: textValue,
            image: imageValue
        }

        reviews.push(newReview)

        renderReviews(reviews, reviews.length - 1)
        closeModal()
        thanks()
        clearInput()
    } else if (nameValue.length === 0) {
        document.getElementById("name").focus()
    } else if (professionValue.length === 0) {
        professionValue = "Клиент"
    } else if (textValue.length === 0) {
        document.getElementById("text").focus()
    }
}

document.getElementById("add-button").addEventListener("click", addReview)

// для нажатия на кнопку Enter
document.addEventListener("keyup", function (event) {
    if (event.code === "Enter") {
        addReview()
    }
})
