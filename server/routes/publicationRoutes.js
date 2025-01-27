import express from "express";
import { createPublication, getPublications, updatePublication, deletePublication } from "../controllers/publicationController.js";

const router = express.Router();

router.post("/", createPublication);
router.get("/", getPublications);
router.get("/:id", updatePublication);
router.get("/:id", deletePublication);

export default router;
