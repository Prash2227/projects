const express = require('express');
const router = express.Router();

const authorController = require("../controller/authorController")
const blogController = require('../controller/blogController')

router.post("/blogs", blogController.createBlogs)

router.post('/authors', authorController.createAuthor)


module.exports = router;