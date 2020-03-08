const express = require('express');

const { handleValidateErrors } = require("../../middleware/validate-body")
const { validateBodyRequest } = require("./utils")

const {
    deleteBooks,
    deleteBooksById,
    getBooks,
    getBooksById,
    postBooks,
    putBooksById
 } = require("./books.controller");

const router = express.Router();

router.delete("", deleteBooks);
router.delete("/:bookId", deleteBooksById);

router.get("", getBooks);
router.get("/:bookId", getBooksById);

router.post(
    "",
    validateBodyRequest,
    handleValidateErrors,
    postBooks
);

router.put(
    "/:bookId",
    validateBodyRequest,
    handleValidateErrors,
    putBooksById
);

module.exports = {
    booksRouter: router
}
