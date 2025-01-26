import express from "express";
import { createAuthor, getAuthors } from "../controllers/authorController.js";

const router = express.Router();

router.post("/", createAuthor);
router.get("/", getAuthors);

export default router;








// import express from "express";
// import {
//   getAllAuthors,
//   getAuthor,
//   createAuthor,
//   updateAuthor,
//   deleteAuthor,
// } from "../controllers/authorController.js";

// const router = express.Router();

// // Routes
// router.get("/", getAllAuthors);
// router.get("/:id", getAuthor);
// router.post("/", createAuthor);
// router.put("/:id", updateAuthor);
// router.delete("/:id", deleteAuthor);

// export default router;
