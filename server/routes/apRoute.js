const express = require("express");
const publicationController = require("./controllers/publicationController");
const authorController = require("./controllers/authorController");

const router = express.Router();

// Publication routes
router.get("/publications", publicationController.getAllPublications);
router.post("/publications", publicationController.createPublication);

// Author routes
router.get("/authors", authorController.getAllAuthors);
router.post("/authors", authorController.createAuthor);

module.exports = router;
