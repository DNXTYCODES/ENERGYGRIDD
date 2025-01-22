import { prisma } from "../config/prismaConfig.js";

// Get all tests
export const getTests = async (req, res) => {
  try {
    const tests = await prisma.test.findMany();
    res.status(200).json(tests);
  } catch (err) {
    res.status(500).json({ message: "Error fetching tests", error: err.message });
  }
};

// Get test by ID
export const getTestById = async (req, res) => {
  const { id } = req.params;
  try {
    const test = await prisma.test.findUnique({ where: { id } });
    if (!test) return res.status(404).json({ message: "Test not found" });
    res.status(200).json(test);
  } catch (err) {
    res.status(500).json({ message: "Error fetching test", error: err.message });
  }
};

// Create a new test
export const createTest = async (req, res) => {
  const { name } = req.body;
  try {
    const newTest = await prisma.test.create({
      data: { name },
    });
    res.status(201).json(newTest);
  } catch (err) {
    res.status(500).json({ message: "Error creating test", error: err.message });
  }
};

// Update a test
export const updateTest = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedTest = await prisma.test.update({
      where: { id },
      data: { name },
    });
    res.status(200).json(updatedTest);
  } catch (err) {
    res.status(500).json({ message: "Error updating test", error: err.message });
  }
};

// Delete a test
export const deleteTest = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.test.delete({ where: { id } });
    res.status(200).json({ message: "Test deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting test", error: err.message });
  }
};
