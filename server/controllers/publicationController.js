import { prisma } from "../config/prismaConfig.js";

// Create a publication with associated authors
export const createPublication = async (req, res, next) => {
  try {
    const { title, content, writerIds } = req.body;

    // Validate that all provided writerIds exist
    const authors = await prisma.author.findMany({ where: { writerId: { in: writerIds } } });
    const foundWriterIds = authors.map((author) => author.writerId);

    const invalidWriterIds = writerIds.filter((id) => !foundWriterIds.includes(id));
    if (invalidWriterIds.length > 0) {
      return res.status(400).json({
        error: `The following writerIds do not exist: ${invalidWriterIds.join(", ")}`,
      });
    }

    const publication = await prisma.publication.create({
      data: {
        title,
        content,
        authors: {
          create: authors.map((author) => ({ authorId: author.id })),
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












// // Create a publication with associated authors
// export const createPublication = async (req, res, next) => {
//   try {
//     const { title, content, authorIds } = req.body;
//     const publication = await prisma.publication.create({
//       data: {
//         title,
//         content,
//         authors: {
//           create: authorIds.map((authorId) => ({ authorId })),
//         },
//       },
//     });
//     res.status(201).json(publication);
//   } catch (err) {
//     next(err);
//   }
// };

// // Get all publications with their authors
// export const getPublications = async (req, res, next) => {
//   try {
//     const publications = await prisma.publication.findMany({
//       include: { authors: { include: { author: true } } },
//     });
//     res.status(200).json(publications);
//   } catch (err) {
//     next(err);
//   }
// };
