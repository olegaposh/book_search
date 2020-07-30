const axios = require("axios");
const router = require("express").Router();

router.get("/books", (req, res) => {

  const KEY = "&key=AIzaSyBBDI72URfG1rPc9K9I78POLK_XGoh_nQ0";
  const URL = "https://www.googleapis.com/books/v1/volumes?q="
  axios
    .get(URL, { params: req.query }, KEY)
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;







// const router = require("express").Router();
// const booksController = require("../../controllers/booksController");

// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

// module.exports = router;
