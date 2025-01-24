import express from "express";
import {
  createPublication,
  getAllPublications,
  getPublication,
  updatePublication,
  deletePublication,
} from "../controllers/publicationController.js";

const router = express.Router();

// Create a new publication
router.post("/", createPublication);

// Get all publications
router.get("/", getAllPublications);

// Get a specific publication by ID
router.get("/:id", getPublication);

// Update a publication by ID
router.put("/:id", updatePublication);

// Delete a publication by ID
router.delete("/:id", deletePublication);

export default router;
