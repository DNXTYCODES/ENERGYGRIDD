import express from "express";
import {
  createAuthor,
  getAllAuthors,
  getAuthor,
  updateAuthor,
  deleteAuthor,
} from "../controllers/authorController.js";

const router = express.Router();

// Create a new author
router.post("/", createAuthor);

// Get all authors
router.get("/", getAllAuthors);

// Get a specific author by ID
router.get("/:id", getAuthor);

// Update an author by ID
router.put("/:id", updateAuthor);

// Delete an author by ID
router.delete("/:id", deleteAuthor);

export default router;
