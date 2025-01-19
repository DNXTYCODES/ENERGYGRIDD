const prisma = require("@prisma/client").PrismaClient;
const prismaClient = new prisma();

exports.getAllPublications = async (req, res) => {
  try {
    const publications = await prismaClient.publication.findMany({
      include: { author: true },
    });
    res.status(200).json(publications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPublication = async (req, res) => {
  try {
    const { image, title, writeup, authorId } = req.body;
    const newPublication = await prismaClient.publication.create({
      data: { image, title, writeup, authorId },
    });
    res.status(201).json(newPublication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
