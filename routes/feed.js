const express = require("express");

const router = express.Router();

const feedControllers = require("../controllers/feed");

///feed/posts
router.get("/posts", feedControllers.getPost);

///feed/submit
router.post("/submit", feedControllers.postForm);

module.exports = router;
