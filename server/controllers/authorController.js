import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaConfig.js";

// Helper function for structured error responses
const createErrorResponse = (res, statusCode, message, error = null) => {
  if (error) {
    console.error("Error:", error); // Log the error to the console
  }
  res.status(statusCode).json({ error: message });
};

// Create a new author
export const createAuthor = asyncHandler(async (req, res) => {
  const {
    image,
    author_idCode,
    name,
    role,
    linkedIn,
    phoneNumber,
    about,
    awards,
    experience,
    publications,
  } = req.body?.data || {};

  if (!author_idCode || !name) {
    return createErrorResponse(res, 400, "Author ID code and name are required.");
  }

  try {
    const author = await prisma.author.create({
      data: {
        image,
        author_idCode,
        name,
        role,
        linkedIn,
        phoneNumber,
        about,
        awards,
        experience,
        publications,
      },
    });
    res.status(201).json({ message: "Author created successfully", author });
  } catch (err) {
    if (err.code === "P2002") {
      return createErrorResponse(
        res,
        409,
        "An author with this author_idCode already exists.",
        err
      );
    }
    return createErrorResponse(res, 500, "Internal server error.", err);
  }
});

// export const createAuthor = asyncHandler(async (req, res) => {
//   const {
//     image,
//     author_idCode,
//     name,
//     role,
//     linkedIn,
//     phoneNumber,
//     about,
//     awards,
//     experience,
//     publications,
//   } = req.body; // Access directly from req.body

//   if (!author_idCode || !name) {
//     return createErrorResponse(res, 400, "Author ID code and name are required.");
//   }

//   try {
//     const author = await prisma.author.create({
//       data: {
//         image,
//         author_idCode,
//         name,
//         role,
//         linkedIn,
//         phoneNumber,
//         about,
//         awards,
//         experience,
//         publications,
//       },
//     });
//     res.status(201).json({ message: "Author created successfully", author });
//   } catch (err) {
//     if (err.code === "P2002") {
//       return createErrorResponse(
//         res,
//         409,
//         "An author with this author_idCode already exists.",
//         err
//       );
//     }
//     return createErrorResponse(res, 500, "Internal server error.", err);
//   }
// });


// Get all authors
export const getAllAuthors = asyncHandler(async (req, res) => {
  try {
    const authors = await prisma.author.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json(authors);
  } catch (err) {
    return createErrorResponse(res, 500, "Failed to fetch authors.", err);
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
      return createErrorResponse(res, 404, "Author not found.");
    }

    res.status(200).json(author);
  } catch (err) {
    return createErrorResponse(res, 500, "Failed to fetch the author.", err);
  }
});

// Update an author
export const updateAuthor = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    image,
    name,
    role,
    linkedIn,
    phoneNumber,
    about,
    awards,
    experience,
    publications,
  } = req.body?.data || {};

  if (!id || !name) {
    return createErrorResponse(res, 400, "Author ID and name are required.");
  }

  try {
    const updatedAuthor = await prisma.author.update({
      where: { id },
      data: {
        image,
        name,
        role,
        linkedIn,
        phoneNumber,
        about,
        awards,
        experience,
        publications,
      },
    });
    res.status(200).json({ message: "Author updated successfully", updatedAuthor });
  } catch (err) {
    if (err.code === "P2025") {
      return createErrorResponse(res, 404, "Author not found.", err);
    }
    return createErrorResponse(res, 500, "Internal server error.", err);
  }
});

// Delete an author
export const deleteAuthor = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return createErrorResponse(res, 400, "Author ID is required.");
  }

  try {
    await prisma.author.delete({
      where: { id },
    });
    res.status(200).json({ message: "Author deleted successfully" });
  } catch (err) {
    if (err.code === "P2025") {
      return createErrorResponse(res, 404, "Author not found.", err);
    }
    return createErrorResponse(res, 500, "Internal server error.", err);
  }
});



















// import asyncHandler from "express-async-handler";
// import { prisma } from "../config/prismaConfig.js";

// // Create a new author
// export const createAuthor = asyncHandler(async (req, res) => {
//   const {
//     image,
//     author_idCode,
//     name,
//     role,
//     linkedInUrl,
//     phoneNumber,
//     about,
//     awards,
//     experience,
//     publications,
//   } = req.body.data;

//   try {
//     const author = await prisma.author.create({
//       data: {
//         image,
//         author_idCode,
//         name,
//         role,
//         linkedInUrl,
//         phoneNumber,
//         about,
//         awards,
//         experience,
//         publications,
//       },
//     });

//     res.send({ message: "Author created successfully", author });
//   } catch (err) {
//     if (err.code === "P2002") {
//       throw new Error("An author with this author_idCode already exists");
//     }
//     throw new Error(err.message);
//   }
// });

// // Get all authors
// export const getAllAuthors = asyncHandler(async (req, res) => {
//   try {
//     const authors = await prisma.author.findMany({
//       orderBy: {
//         createdAt: "desc",
//       },
//     });
//     res.send(authors);
//   } catch (err) {
//     throw new Error(err.message);
//   }
// });

// // Get a specific author
// export const getAuthor = asyncHandler(async (req, res) => {
//   const { id } = req.params;

//   try {
//     const author = await prisma.author.findUnique({
//       where: { id },
//     });

//     if (!author) {
//       res.status(404);
//       throw new Error("Author not found");
//     }

//     res.send(author);
//   } catch (err) {
//     throw new Error(err.message);
//   }
// });

// // Update an author
// export const updateAuthor = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   const {
//     image,
//     name,
//     role,
//     linkedInUrl,
//     phoneNumber,
//     about,
//     awards,
//     experience,
//     publications,
//   } = req.body.data;

//   try {
//     const updatedAuthor = await prisma.author.update({
//       where: { id },
//       data: {
//         image,
//         name,
//         role,
//         linkedInUrl,
//         phoneNumber,
//         about,
//         awards,
//         experience,
//         publications,
//       },
//     });

//     res.send({ message: "Author updated successfully", updatedAuthor });
//   } catch (err) {
//     if (err.code === "P2025") {
//       res.status(404);
//       throw new Error("Author not found");
//     }
//     throw new Error(err.message);
//   }
// });

// // Delete an author
// export const deleteAuthor = asyncHandler(async (req, res) => {
//   const { id } = req.params;

//   try {
//     await prisma.author.delete({
//       where: { id },
//     });

//     res.send({ message: "Author deleted successfully" });
//   } catch (err) {
//     if (err.code === "P2025") {
//       res.status(404);
//       throw new Error("Author not found");
//     }
//     throw new Error(err.message);
//   }
// });

