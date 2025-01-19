import Publication from "../models/publication.js";

// Create Publication
export const createPublication = async (req, res) => {
  try {
    const publication = new Publication(req.body);
    const savedPublication = await publication.save();
    res.status(201).json(savedPublication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Publications
export const getAllPublications = async (req, res) => {
  try {
    const publications = await Publication.find();
    res.status(200).json(publications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Single Publication
export const getPublicationById = async (req, res) => {
  try {
    const publication = await Publication.findById(req.params.id);
    if (!publication) {
      return res.status(404).json({ message: "Publication not found" });
    }
    res.status(200).json(publication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Publication
export const updatePublication = async (req, res) => {
  try {
    const updatedPublication = await Publication.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedPublication) {
      return res.status(404).json({ message: "Publication not found" });
    }
    res.status(200).json(updatedPublication);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Publication
export const deletePublication = async (req, res) => {
  try {
    const deletedPublication = await Publication.findByIdAndDelete(req.params.id);
    if (!deletedPublication) {
      return res.status(404).json({ message: "Publication not found" });
    }
    res.status(200).json({ message: "Publication deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};








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
