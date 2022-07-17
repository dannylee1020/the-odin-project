let Genre = require("../models/genre");
let Book = require("../models/book");
let async = require("async");
const { body, validationResult } = require("express-validator");

// Display list of all Genre.
exports.genre_list = function (req, res) {
    Genre.find()
        .sort([["name", "ascending"]])
        .exec(function (err, list_genre) {
            res.render("genre_list", {
                title: "Genre List",
                genre_list: list_genre,
            });
        });
};

// Display detail page for a specific Genre.
exports.genre_detail = function (req, res) {
    async.parallel(
        {
            genre: function (callback) {
                Genre.findById(req.params.id).exec(callback);
            },

            genre_books: function (callback) {
                Book.find({ genre: req.params.id }).exec(callback);
            },
        },
        function (err, results) {
            if (err) {
                return next(err);
            }
            if (results.genre == null) {
                var err = new Error("Genre not found");
                err.status = 404;
                return next(err);
            }

            res.render("genre_detail", {
                title: "Genre Detail",
                genre: results.genre,
                genre_books: results.genre_books,
            });
        }
    );
};

// Display Genre create form on GET.
exports.genre_create_get = function (req, res) {
    res.render("genre_form", { title: "Create Genre" });
};

// Handle Genre create on POST.
exports.genre_create_post = [
    // sanitize request input
    body("name", "Genre name required").trim().isLength({ min: 1 }).escape(),
    (req, res, next) => {
        // run validation to see any errors
        const errors = validationResult(req);

        // create genre with name param
        let genre = new Genre({
            name: req.body.name,
        });

        // if error is found, handle it
        if (!errors.isEmpty()) {
            res.render("genre_form", {
                title: "Create Genre",
                genre: genre,
                errors: errors.array(),
            });
            return;
        } else {
            // check if the genre inputted already exists
            Genre.findOne({ name: req.body.name }).exec(function (
                err,
                found_genre
            ) {
                if (err) {
                    return next(err);
                }

                // if exists, redirect to url
                if (found_genre) {
                    res.redirect(found_genre.url);
                } else {
                    // if new, save it and redirect to url
                    genre.save(function (err) {
                        if (err) {
                            return next(err);
                        }

                        res.redirect(genre.url);
                    });
                }
            });
        }
    },
];

// Display Genre delete form on GET.
exports.genre_delete_get = function (req, res) {
    res.send("NOT IMPLEMENTED: Genre delete GET");
};

// Handle Genre delete on POST.
exports.genre_delete_post = function (req, res) {
    res.send("NOT IMPLEMENTED: Genre delete POST");
};

// Display Genre update form on GET.
exports.genre_update_get = function (req, res) {
    res.send("NOT IMPLEMENTED: Genre update GET");
};

// Handle Genre update on POST.
exports.genre_update_post = function (req, res) {
    res.send("NOT IMPLEMENTED: Genre update POST");
};
