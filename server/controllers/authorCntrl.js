exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await prismaClient.author.findMany({
      include: { publications: true },
    });
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createAuthor = async (req, res) => {
  try {
    const {
      image,
      author_idCode,
      name,
      role,
      linkedIn,
      phoneNumber,
      email,
      about,
      awards,
      experience,
    } = req.body;

    const newAuthor = await prismaClient.author.create({
      data: {
        image,
        author_idCode,
        name,
        role,
        linkedIn,
        phoneNumber,
        email,
        about,
        awards,
        experience,
      },
    });
    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
