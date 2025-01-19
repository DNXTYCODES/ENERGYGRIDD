import Author from "../models/author.js";

// Create Author
export const createAuthor = async (req, res) => {
  try {
    const author = new Author(req.body);
    const savedAuthor = await author.save();
    res.status(201).json(savedAuthor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Authors
export const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Single Author
export const getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }
    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Author
export const updateAuthor = async (req, res) => {
  try {
    const updatedAuthor = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedAuthor) {
      return res.status(404).json({ message: "Author not found" });
    }
    res.status(200).json(updatedAuthor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Author
export const deleteAuthor = async (req, res) => {
  try {
    const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
    if (!deletedAuthor) {
      return res.status(404).json({ message: "Author not found" });
    }
    res.status(200).json({ message: "Author deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};














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
