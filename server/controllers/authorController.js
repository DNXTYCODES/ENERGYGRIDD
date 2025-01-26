import { prisma } from "../config/prismaConfig.js";

// Create an author
export const createAuthor = async (req, res, next) => {
  try {
    const { name, role, about, experience } = req.body;
    const author = await prisma.author.create({
      data: { name, role, about, experience },
    });
    res.status(201).json(author);
  } catch (err) {
    next(err);
  }
};

// Get all authors with their publications
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
