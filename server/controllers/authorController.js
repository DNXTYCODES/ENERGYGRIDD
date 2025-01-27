import { prisma } from "../config/prismaConfig.js";

// Create an author
export const createAuthor = async (req, res, next) => {
  try {
    const { writerId, image, name, role, about, email, linkedIn, phone, experience } = req.body;

    // Check uniqueness of writerId
    const existingAuthor = await prisma.author.findUnique({ where: { writerId } });
    if (existingAuthor) {
      return res.status(400).json({ error: "writerId already exists. Please choose another." });
    }

    const author = await prisma.author.create({
      data: { writerId, image, name, role, about, email, linkedIn, phone, experience },
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

// Update an author
export const updateAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { writerId, image, name, role, about, email, linkedIn, phone, experience } = req.body;

    // Update author
    const updatedAuthor = await prisma.author.update({
      where: { id },
      data: { writerId, image, name, role, about, email, linkedIn, phone, experience },
    });

    res.status(200).json(updatedAuthor);
  } catch (err) {
    next(err);
  }
};

export const deleteAuthor = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Delete all related records in AuthorPublication
    await prisma.authorPublication.deleteMany({
      where: { authorId: id },
    });

    // Delete the author
    await prisma.author.delete({
      where: { id },
    });

    res.status(204).send(); // No content
  } catch (err) {
    next(err);
  }
};


// // Delete an author
// export const deleteAuthor = async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     // Delete author
//     await prisma.author.delete({ where: { id } });
//     res.status(204).send();
//   } catch (err) {
//     next(err);
//   }
// };













// import { prisma } from "../config/prismaConfig.js";

// // Create an author with a unique writerId
// export const createAuthor = async (req, res, next) => {
//   try {
//     const { writerId, image, name, role, about, email, linkedIn, phone, experience } = req.body;

//     // Validate uniqueness of writerId
//     const existingAuthor = await prisma.author.findUnique({ where: { writerId } });
//     if (existingAuthor) {
//       return res.status(400).json({ error: "writerId already exists. Please choose another." });
//     }

//     const author = await prisma.author.create({
//       data: { writerId, image, name, role, about, email, linkedIn, phone,  experience },
//     });
//     res.status(201).json(author);
//   } catch (err) {
//     next(err);
//   }
// };

// // Get all authors
// export const getAuthors = async (req, res, next) => {
//   try {
//     const authors = await prisma.author.findMany({
//       include: { publications: { include: { publication: true } } },
//     });
//     res.status(200).json(authors);
//   } catch (err) {
//     next(err);
//   }
// };