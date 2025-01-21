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

















// import Publication from "../models/publication.js";

// // Create Publication
// export const createPublication = async (req, res) => {
//   try {
//     const publication = new Publication(req.body);
//     const savedPublication = await publication.save();
//     res.status(201).json(savedPublication);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get All Publications
// export const getAllPublications = async (req, res) => {
//   try {
//     const publications = await Publication.find();
//     res.status(200).json(publications);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get Single Publication
// export const getPublicationById = async (req, res) => {
//   try {
//     const publication = await Publication.findById(req.params.id);
//     if (!publication) {
//       return res.status(404).json({ message: "Publication not found" });
//     }
//     res.status(200).json(publication);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Update Publication
// export const updatePublication = async (req, res) => {
//   try {
//     const updatedPublication = await Publication.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!updatedPublication) {
//       return res.status(404).json({ message: "Publication not found" });
//     }
//     res.status(200).json(updatedPublication);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Delete Publication
// export const deletePublication = async (req, res) => {
//   try {
//     const deletedPublication = await Publication.findByIdAndDelete(req.params.id);
//     if (!deletedPublication) {
//       return res.status(404).json({ message: "Publication not found" });
//     }
//     res.status(200).json({ message: "Publication deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };








// const prisma = require("@prisma/client").PrismaClient;
// const prismaClient = new prisma();

// exports.getAllPublications = async (req, res) => {
//   try {
//     const publications = await prismaClient.publication.findMany({
//       include: { author: true },
//     });
//     res.status(200).json(publications);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// exports.createPublication = async (req, res) => {
//   try {
//     const { image, title, writeup, authorId } = req.body;
//     const newPublication = await prismaClient.publication.create({
//       data: { image, title, writeup, authorId },
//     });
//     res.status(201).json(newPublication);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
