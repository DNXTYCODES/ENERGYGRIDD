import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

// Create a new author
export const createAuthor = asyncHandler(async (req, res) => {
  const {
    image,
    author_idCode,
    name,
    role,
    linkedInUrl,
    contactDetails,
    about,
    awards,
    experience,
    publications,
  } = req.body.data;

  try {
    const author = await prisma.author.create({
      data: {
        image,
        author_idCode,
        name,
        role,
        linkedInUrl,
        contactDetails,
        about,
        awards,
        experience,
        publications,
      },
    });

    res.send({ message: "Author created successfully", author });
  } catch (err) {
    if (err.code === "P2002") {
      throw new Error("An author with this author_idCode already exists");
    }
    throw new Error(err.message);
  }
});

// Get all authors
export const getAllAuthors = asyncHandler(async (req, res) => {
  try {
    const authors = await prisma.author.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.send(authors);
  } catch (err) {
    throw new Error(err.message);
  }
});

// Get a specific author
export const getAuthor = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const author = await prisma.author.findUnique({
      where: { id },
    });

    if (!author) {
      res.status(404);
      throw new Error("Author not found");
    }

    res.send(author);
  } catch (err) {
    throw new Error(err.message);
  }
});

// Update an author
export const updateAuthor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    image,
    name,
    role,
    linkedInUrl,
    contactDetails,
    about,
    awards,
    experience,
    publications,
  } = req.body.data;

  try {
    const updatedAuthor = await prisma.author.update({
      where: { id },
      data: {
        image,
        name,
        role,
        linkedInUrl,
        contactDetails,
        about,
        awards,
        experience,
        publications,
      },
    });

    res.send({ message: "Author updated successfully", updatedAuthor });
  } catch (err) {
    if (err.code === "P2025") {
      res.status(404);
      throw new Error("Author not found");
    }
    throw new Error(err.message);
  }
});

// Delete an author
export const deleteAuthor = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.author.delete({
      where: { id },
    });

    res.send({ message: "Author deleted successfully" });
  } catch (err) {
    if (err.code === "P2025") {
      res.status(404);
      throw new Error("Author not found");
    }
    throw new Error(err.message);
  }
});














// exports.getAllAuthors = async (req, res) => {
//   try {
//     const authors = await prismaClient.author.findMany({
//       include: { publications: true },
//     });
//     res.status(200).json(authors);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.createAuthor = async (req, res) => {
//   try {
//     const {
//       image,
//       author_idCode,
//       name,
//       role,
//       linkedIn,
//       phoneNumber,
//       email,
//       about,
//       awards,
//       experience,
//     } = req.body;

//     const newAuthor = await prismaClient.author.create({
//       data: {
//         image,
//         author_idCode,
//         name,
//         role,
//         linkedIn,
//         phoneNumber,
//         email,
//         about,
//         awards,
//         experience,
//       },
//     });
//     res.status(201).json(newAuthor);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
