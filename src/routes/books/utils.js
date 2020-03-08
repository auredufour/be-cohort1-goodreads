const { check } = require("express-validator");

const getErrorMessage = (id = null, title=null, status=404) => {
    let error = "The book doesn't exist"
    if (id || id === 0) {
        error = `The book with the id: ${id} doesn't exist`
    }
    if (status === 404 && title) {
        error = `The book with the title: ${title} doesn't exist`
    }
    if (status === 409 && title) {
        error = `The book with the title: ${title} already exist`
    }
    return error;
}

const validateBodyRequest = [
    check("title")
        .isString()
        .trim()
        .not()
        .isEmpty(),
    check("authors")
        .isString()
        .trim()
        .not()
        .isEmpty(),
    check("average_rating")
        .not()
        .isEmpty(),
    check("isbn")
        .not()
        .isEmpty(),
    check("isbn13")
        .isISBN('13')
        .not()
        .isEmpty(),
    check("language_code")
        .isString()
        .not()
        .isEmpty(),
    check("# num_pages")
        .not()
        .isEmpty(),
    check("ratings_count")
        .not()
        .isEmpty(),
    check("text_reviews_count")
        .not()
        .isEmpty()
]

module.exports = {
    getErrorMessage,
    validateBodyRequest,
}
