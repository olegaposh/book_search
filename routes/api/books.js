const axios = require("axios");
const router = require("express").Router();
const db = require("../../models/book")


router.get("/", async (req, res) => {
    
  const query = req.query.q
  // const KEY = "&key=AIzaSyBBDI72URfG1rPc9K9I78POLK_XGoh_nQ0";
  const URL = "https://www.googleapis.com/books/v1/volumes?q="
  try {

    const result = await axios.get(URL + query);

    res.json(result.data);

  } catch (error) {

    console.log(error)
    res.status(500).send(error)


  }
})

// get all saved books
router.get("/savedbooks", async (req, res) => {

  try {

    const data = await db.find({});

    res.json(data);

  } catch (error) {

    console.log(error)
    res.status(500).send(error)
  }
})
// save new book to the database
router.post("/newbook", async (req, res) => {
  // console.log(req.body)
  try {

    const data = await db.create(req.body)

    res.json(data)

  } catch (error) {

    console.log(error)
    res.status(500).send(error)
  }

})
// delete book from database
router.delete("/:id", async (req, res) => {

  try {

    const id = req.params.id;

    const data = await db.findByIdAndDelete(req.params.id)

  } catch (error) {

    console.log(error)
    res.status(500).send(error)
  }
})


module.exports = router;




