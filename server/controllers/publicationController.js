// import { prisma } from "../config/prismaConfig.js";

// // Create a publication
// export const createPublication = async (req, res, next) => {
//   try {
//     const { title, content, category, image, writerIds } = req.body;

//     const publication = await prisma.publication.create({
//       data: {
//         title,
//         content,
//         category,
//         image,
//         authors: {
//           create: writerIds.map((writerId) => ({
//             author: { connect: { writerId } },
//           })),
//         },
//       },
//     });
//     res.status(201).json({ data: publication });
//   } catch (err) {
//     next(err);
//   }
// };

// // Get all publications
// export const getPublications = async (req, res, next) => {
//   try {
//     const publications = await prisma.publication.findMany({
//       include: {
//         authors: {
//           include: { author: true },
//         },
//       },
//     });
//     res.status(200).json({ data: publications });
//   } catch (err) {
//     next(err);
//   }
// };

// // Update a publication
// export const updatePublication = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const { title, content, category, image, writerIds } = req.body;

//     // Update publication
//     const updatedPublication = await prisma.publication.update({
//       where: { id },
//       data: {
//         title,
//         content,
//         category,
//         image,
//         authors: {
//           deleteMany: {},
//           create: writerIds.map((writerId) => ({
//             author: { connect: { writerId } },
//           })),
//         },
//       },
//     });

//     res.status(200).json({ data: updatedPublication });
//   } catch (err) {
//     next(err);
//   }
// };

// // Delete a publication
// export const deletePublication = async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     // Delete the publication and its related records
//     await prisma.publication.delete({
//       where: { id },
//     });

//     res.status(204).send();
//   } catch (err) {
//     next(err);
//   }
// };















import { prisma } from "../config/prismaConfig.js";

// Create a publication
export const createPublication = async (req, res, next) => {
  try {
    const { image, title, content, category, writerIds } = req.body;

    // Validate writerIds
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
        image,
        title,
        content,
        category,
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

// Get all publications
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

// Update a publication
export const updatePublication = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { image, title, content, category, writerIds } = req.body;

    // Validate writerIds
    const authors = await prisma.author.findMany({ where: { writerId: { in: writerIds } } });
    const foundWriterIds = authors.map((author) => author.writerId);

    const invalidWriterIds = writerIds.filter((id) => !foundWriterIds.includes(id));
    if (invalidWriterIds.length > 0) {
      return res.status(400).json({
        error: `The following writerIds do not exist: ${invalidWriterIds.join(", ")}`,
      });
    }

    // Update publication and its authors
    const updatedPublication = await prisma.publication.update({
      where: { id },
      data: {
        image,
        title,
        content,
        category,
        authors: {
          deleteMany: {}, // Clear existing authors
          create: authors.map((author) => ({ authorId: author.id })), // Add new authors
        },
      },
    });

    res.status(200).json(updatedPublication);
  } catch (err) {
    next(err);
  }
};

// Delete a publication
export const deletePublication = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Delete publication
    await prisma.publication.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};













// import { prisma } from "../config/prismaConfig.js";

// // Create a publication with associated authors
// export const createPublication = async (req, res, next) => {
//   try {
//     const { image, title, content, category, writerIds } = req.body;

//     // Validate that all provided writerIds exist
//     const authors = await prisma.author.findMany({ where: { writerId: { in: writerIds } } });
//     const foundWriterIds = authors.map((author) => author.writerId);

//     const invalidWriterIds = writerIds.filter((id) => !foundWriterIds.includes(id));
//     if (invalidWriterIds.length > 0) {
//       return res.status(400).json({
//         error: `The following writerIds do not exist: ${invalidWriterIds.join(", ")}`,
//       });
//     }

//     const publication = await prisma.publication.create({
//       data: {
//         image,
//         title,
//         content,
//         category,
//         authors: {
//           create: authors.map((author) => ({ authorId: author.id })),
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
