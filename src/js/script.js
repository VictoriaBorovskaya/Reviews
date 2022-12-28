import reviews from "./data.js"

export function renderReviews(reviews, index) {
    const reviewContainer = document.getElementById("reviews-container")
    reviewContainer.innerHTML = ""
    reviewContainer.innerHTML += `
            <div class="review">
                <button class="review__button"><img src="images/icon-left.png" id="button-left-${reviews[index]}"></button>
                <div class="content_container">
                    <div class="review__image_container">
                        <div>
                            <img src="images/icon-review.png" class="icon" />
                        </div>
                        <img src="${reviews[index].image}" class="image" />
                    </div>
                    <div class="review__name_container">
                        <p class="name">${reviews[index].name}</p>
                        <p class="profession">${reviews[index].profession}</p>
                    </div>
                    <div>
                        <p class="review__text">${reviews[index].text}</p>
                    </div>
                    <button class="review__button_surprise" id="button_surprise-${reviews[index]}">Случайный отзыв</button>
                </div>
                <button class="review__button"><img src="images/icon-right.png" id="button-right-${reviews[index]}"></button>
            </div>
        `
    forEachRightButton(reviews, index)
    forEachLeftButton(reviews, index)
    forEachSurpriseButton(reviews, index)
}

renderReviews(reviews, 0)

//функция прокрутки отзывов вперед (вправо)
function scrollRight(reviews, index) {
    let reviewIndex = reviews.indexOf(reviews[index])
    if (reviewIndex === reviews.length - 1) {
        return renderReviews(reviews, 0)
    } else if (reviewIndex < reviews.length) {
        let nextIndex = reviewIndex + 1
        renderReviews(reviews, nextIndex)
    }
}

function forEachRightButton(reviews, index) {
    document
        .getElementById(`button-right-${reviews[index]}`)
        .addEventListener("click", () => {
            scrollRight(reviews, index)
        })
}

// функция прокрутки отзывов назад (влево)
function scrollLeft(reviews, index) {
    let reviewIndex = reviews.indexOf(reviews[index])
    if (reviewIndex === 0) {
        return renderReviews(reviews, reviews.length - 1)
    } else if (reviewIndex > 0 && reviewIndex <= reviews.length) {
        let nextIndex = reviewIndex - 1
        renderReviews(reviews, nextIndex)
    }
}

function forEachLeftButton(reviews, index) {
    document
        .getElementById(`button-left-${reviews[index]}`)
        .addEventListener("click", () => {
            scrollLeft(reviews, index)
        })
}

// функция генерирования случайного отзыва
function renderRandomReview(reviews) {
    let randomIndex = Math.floor(Math.random() * reviews.length)
    renderReviews(reviews, randomIndex)
}

function forEachSurpriseButton(reviews, index) {
    document
        .getElementById(`button_surprise-${reviews[index]}`)
        .addEventListener("click", () => {
            renderRandomReview(reviews)
        })
}

renderReviews(reviews, 0)
