import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

// Create a new publication
export const createPublication = asyncHandler(async (req, res) => {
  const { image, title, writeup, author_idCode } = req.body.data;

  try {
    const publication = await prisma.publication.create({
      data: {
        image,
        title,
        writeup,
        author: author_idCode
          ? { connect: { author_idCode } } // Connects to an existing author by author_idCode if provided
          : undefined,
      },
    });

    res.send({ message: "Publication created successfully", publication });
  } catch (err) {
    throw new Error(err.message);
  }
});

// Get all publications
export const getAllPublications = asyncHandler(async (req, res) => {
  try {
    const publications = await prisma.publication.findMany({
      include: {
        author: true, // Includes author details if connected
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.send(publications);
  } catch (err) {
    throw new Error(err.message);
  }
});

// Get a specific publication
export const getPublication = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const publication = await prisma.publication.findUnique({
      where: { id },
      include: {
        author: true, // Includes author details if connected
      },
    });

    if (!publication) {
      res.status(404);
      throw new Error("Publication not found");
    }

    res.send(publication);
  } catch (err) {
    throw new Error(err.message);
  }
});

// Update a publication
export const updatePublication = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { image, title, writeup, author_idCode } = req.body.data;

  try {
    const updatedPublication = await prisma.publication.update({
      where: { id },
      data: {
        image,
        title,
        writeup,
        author: author_idCode
          ? { connect: { author_idCode } } // Connects to a new author by author_idCode if provided
          : undefined,
      },
    });

    res.send({ message: "Publication updated successfully", updatedPublication });
  } catch (err) {
    if (err.code === "P2025") {
      res.status(404);
      throw new Error("Publication not found");
    }
    throw new Error(err.message);
  }
});

// Delete a publication
export const deletePublication = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.publication.delete({
      where: { id },
    });

    res.send({ message: "Publication deleted successfully" });
  } catch (err) {
    if (err.code === "P2025") {
      res.status(404);
      throw new Error("Publication not found");
    }
    throw new Error(err.message);
  }
});
