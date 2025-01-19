import express from "express";
import {
  createAuthor,
  getAllAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
} from "../controllers/authorController.js";

import {
  createPublication,
  getAllPublications,
  getPublicationById,
  updatePublication,
  deletePublication,
} from "../controllers/publicationController.js";

const router = express.Router();

// Author Routes
router.post("/authors", createAuthor);
router.get("/authors", getAllAuthors);
router.get("/authors/:id", getAuthorById);
router.put("/authors/:id", updateAuthor);
router.delete("/authors/:id", deleteAuthor);

// Publication Routes
router.post("/publications", createPublication);
router.get("/publications", getAllPublications);
router.get("/publications/:id", getPublicationById);
router.put("/publications/:id", updatePublication);
router.delete("/publications/:id", deletePublication);

export default router;















// const express = require("express");
// const publicationController = require("./controllers/publicationController");
// const authorController = require("./controllers/authorController");

// const router = express.Router();

// // Publication routes
// router.get("/publications", publicationController.getAllPublications);
// router.post("/publications", publicationController.createPublication);

// // Author routes
// router.get("/authors", authorController.getAllAuthors);
// router.post("/authors", authorController.createAuthor);

// module.exports = router;
