

import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

// Create a residency
export const createResidency = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    // address,
    // country,
    // city,
    // facilities,
    image,
  } = req.body; // Changed from req.body.data

  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        // address,
        // country,
        // city,
        // facilities,
        image,
      },
    });

    res.send({ message: "Product created successfully", residency });
  } catch (err) {
    console.error("Error creating Product:", err.message);

    // if (err.code === "P2002") {
    //   return res.status(400).send({ message: "Residency with this address already exists" });
    // }

    res.status(500).send({ message: err.message });
  }
});

// Get all residencies
export const getAllResidencies = asyncHandler(async (req, res) => {
  try {
    const residencies = await prisma.residency.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.send(residencies);
  } catch (err) {
    res.status(500).send({ message: "Error fetching Products" });
  }
});

// Get a specific residency
export const getResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const residency = await prisma.residency.findUnique({
      where: { id },
    });

    if (!residency) {
      return res.status(404).send({ message: "Product not found" });
    }

    res.send(residency);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});


// added code for editing and deleting products

// Update a residency
export const updateResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    title,
    description,
    price,
    // address,
    // country,
    // city,
    // facilities,
    image,
  } = req.body;

  try {
    const updatedResidency = await prisma.residency.update({
      where: { id },
      data: {
        title,
        description,
        price,
        // address,
        // country,
        // city,
        // facilities,
        image,
      },
    });

    res.send({ message: "Product updated successfully", updatedResidency });
  } catch (err) {
    console.error("Error updating product:", err.message);

    if (err.code === "P2025") {
      return res.status(404).send({ message: "Product not found" });
    }

    res.status(500).send({ message: err.message });
  }
});

// Delete a residency
export const deleteResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.residency.delete({ where: { id } });
    res.send({ message: "Product deleted successfully" });
  } catch (err) {
    console.error("Error deleting product:", err.message);

    if (err.code === "P2025") {
      return res.status(404).send({ message: "Product not found" });
    }

    res.status(500).send({ message: err.message });
  }
});

