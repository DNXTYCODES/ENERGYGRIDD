import express from "express";
import {
  createResidency,
  getAllResidencies,
  getResidency,
  updateResidency,
  deleteResidency,
} from "../controllers/resdCntrl.js";
import jwtCheck from "../config/auth0Config.js";
const router = express.Router();

router.post("/create", createResidency);
router.get("/allresd", getAllResidencies);
router.get("/:id", getResidency);
router.put("/:id", updateResidency); // Update a product
router.delete("/:id", deleteResidency); // Delete a product

export { router as residencyRoute };
