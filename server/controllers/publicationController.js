import { prisma } from "../config/prismaConfig.js";


// Create a publication with associated authors
export const createPublication = async (req, res, next) => {
  try {
    const { title, content, authorIds } = req.body;
    const publication = await prisma.publication.create({
      data: {
        title,
        content,
        authors: {
          create: authorIds.map((authorId) => ({ authorId })),
        },
      },
    });
    res.status(201).json(publication);
  } catch (err) {
    next(err);
  }
};

// Get all publications with their authors
export const getPublications = async (req, res, next) => {
  try {
    const publications = await prisma.publication.findMany({
      include: { authors: { include: { author: true } } },
    });
    res.status(200).json(publications);
  } catch (err) {
    next(err);
  }
};
