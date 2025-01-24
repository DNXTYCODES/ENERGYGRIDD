import { prisma } from "../config/prismaConfig.js";

// Get all authors
export const getAuthors = async (req, res) => {
  try {
    const authors = await prisma.author.findMany();
    res.status(200).json(authors);
  } catch (err) {
    res.status(500).json({ message: "Error fetching authors", error: err.message });
  }
};

// Get author by ID
export const getAuthorById = async (req, res) => {
  const { id } = req.params;
  try {
    0
    const author = await prisma.author.findUnique({ where: { id } });
    if (!author) return res.status(404).json({ message: "Author not found" });
    res.status(200).json(author);
  } catch (err) {
    res.status(500).json({ message: "Error fetching author", error: err.message });
  }
};

// Create a new author
export const createAuthor = async (req, res) => {
  const { image, uniqueId, name, role, phone, email, about, awards, experience } = req.body;
  try {
    const newAuthor = await prisma.author.create({
      data: {
        image,
        uniqueId,
        name,
        role,
        phone,
        email,
        about,
        awards,
        experience,
      },
    });
    res.status(201).json(newAuthor);
  } catch (err) {
    res.status(500).json({ message: "Error creating author", error: err.message });
  }
};

// Update an author by ID
export const updateAuthor = async (req, res) => {
  const { id } = req.params;
  const { image, uniqueId, name, role, phone, email, about, awards, experience } = req.body;
  try {
    const updatedAuthor = await prisma.author.update({
      where: { id },
      data: {
        image,
        uniqueId,
        name,
        role,
        phone,
        email,
        about,
        awards,
        experience,
      },
    });
    res.status(200).json(updatedAuthor);
  } catch (err) {
    res.status(500).json({ message: "Error updating author", error: err.message });
  }
};

// Delete an author by ID
export const deleteAuthor = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.author.delete({ where: { id } });
    res.status(200).json({ message: "Author deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting author", error: err.message });
  }
};