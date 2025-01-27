import express from "express";
import { createPublication, getPublications, updatePublication, deletePublication } from "../controllers/publicationController.js";

const router = express.Router();

router.post("/", createPublication);
router.get("/", getPublications);
router.put("/:id", updatePublication);
router.delete("/:id", deletePublication);

export default router;
