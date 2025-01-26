import express from "express";
import { createPublication, getPublications } from "../controllers/publicationController.js";

const router = express.Router();

router.post("/", createPublication);
router.get("/", getPublications);

export default router;
