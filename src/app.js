const reviews = [
    {
        id: 1,
        name: "Bill Anderson",
        profession: "THE BOSS",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
    },
    {
        id: 2,
        name: "Susan Smith",
        profession: "WEB DEVELOPER",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
    },
    {
        id: 3,
        name: "Anna Johnson",
        profession: "WEB DESIGNER",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg"
    },
    {
        id: 4,
        name: "Peter Jones",
        profession: "INTERN",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
        image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
    }
]

function renderReviews(arr) {
    const reviewContainer = document.getElementById("reviews")
    reviewContainer.innerHTML = ""
    arr.forEach((review) => {
        reviewContainer.innerHTML += `
            <div class="review">
                <div class="review__image_container">
                    <div>
                        <img src="images/icon-review.png" class="icon" />
                    </div>
                    <img src="${review.image}" class="image" />
                </div>
                <div class="review__name_container">
                    <p class="name">${review.name}</p>
                    <p class="profession">${review.profession}</p>
                </div>
                <div>
                    <p class="review__text">${review.text}</p>
                </div>
                <div>
                    <button class="review__button"><img src="images/icon-left.png" id="button-left-${review.id}"></button>
                    <button class="review__button"><img src="images/icon-right.png" id="button-right-${review.id}"></button>
                </div>
                <button class="review__button_surprise">Surprise Me</button>
            </div>
        `
    })
    forEachRightButton(arr)
    forEachLeftButton(arr)
}

renderReviews(reviews.filter((review) => review.id == 1))

// функция прокрутки отзывов вперед (вправо)
function scrollRight(id) {
    if (id < reviews.length) {
        let nextId = id + 1
        let nextReview = reviews.filter((review) => review.id == nextId)
        renderReviews(nextReview)
    } else if ((id = reviews.length)) {
        let nextId = 1
        let nextReview = reviews.filter((review) => review.id == nextId)
        renderReviews(nextReview)
    }
}

function forEachRightButton(arr) {
    arr.forEach((review) => {
        document
            .getElementById(`button-right-${review.id}`)
            .addEventListener("click", () => {
                scrollRight(review.id)
            })
    })
}

// функция прокрутки отзывов назад (влево)
function scrollLeft(id) {
    if (id == 1) {
        let nextId = reviews.length
        let nextReview = reviews.filter((review) => review.id == nextId)
        renderReviews(nextReview)
    } else if (id <= reviews.length) {
        let nextId = id - 1
        let nextReview = reviews.filter((review) => review.id == nextId)
        renderReviews(nextReview)
    }
}

function forEachLeftButton(arr) {
    arr.forEach((review) => {
        document
            .getElementById(`button-left-${review.id}`)
            .addEventListener("click", () => {
                scrollLeft(review.id)
            })
    })
}

// найти более универсальный вариант, чтобы не было проблем, если id будут идти не +1 например
