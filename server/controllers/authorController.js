import { prisma } from "../config/prismaConfig.js";

// Create an author with a unique writerId
export const createAuthor = async (req, res, next) => {
  try {
    const { writerId, image, name, role, about, email, linkedIn, phone, experience } = req.body;

    // Validate uniqueness of writerId
    const existingAuthor = await prisma.author.findUnique({ where: { writerId } });
    if (existingAuthor) {
      return res.status(400).json({ error: "writerId already exists. Please choose another." });
    }

    const author = await prisma.author.create({
      data: { writerId, image, name, role, about, email, linkedIn, phone,  experience },
    });
    res.status(201).json(author);
  } catch (err) {
    next(err);
  }
};

// Get all authors
export const getAuthors = async (req, res, next) => {
  try {
    const authors = await prisma.author.findMany({
      include: { publications: { include: { publication: true } } },
    });
    res.status(200).json(authors);
  } catch (err) {
    next(err);
  }
};