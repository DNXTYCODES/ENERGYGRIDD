// JSX Form for Author Management
import React, { useState, useEffect } from "react";
import { createAuthor, updateAuthor, fetchAuthorById } from "../../utils/api";
import { toast } from "react-toastify";

const AuthorForm = ({ authorId, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    about: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (authorId) {
        await updateAuthor(authorId, formData);
        toast.success("Author updated successfully!");
      } else {
        await createAuthor(formData);
        toast.success("Author created successfully!");
      }
      onSuccess && onSuccess();
    } catch (error) {
      toast.error("Failed to save author details.");
    }
  };

  useEffect(() => {
    const fetchAuthor = async () => {
      if (authorId) {
        try {
          const author = await fetchAuthorById(authorId);
          setFormData(author);
        } catch (error) {
          toast.error("Failed to fetch author details.");
        }
      }
    };
    fetchAuthor();
  }, [authorId]);

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px", margin: "0 auto" }}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
        required
      />
      <input
        type="text"
        name="role"
        placeholder="Role"
        value={formData.role}
        onChange={handleChange}
        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
        required
      />
      <textarea
        name="about"
        placeholder="About"
        value={formData.about}
        onChange={handleChange}
        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", minHeight: "100px" }}
        required
      ></textarea>
      <input
        type="number"
        name="experience"
        placeholder="Experience (years)"
        value={formData.experience}
        onChange={handleChange}
        style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
        required
      />
      <button type="submit" style={{ padding: "10px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
        {authorId ? "Update Author" : "Create Author"}
      </button>
    </form>
  );
};

export default AuthorForm;

// Utility Module for API Service Management

// export const fetchAuthors = async () => {
//   try {
//     const response = await api.get("/authors");
//     return response.data;
//   } catch (error) {
//     handleApiError(error, "Failed to fetch authors");
//   }
// };

// export const fetchAuthorById = async (id) => {
//   try {
//     const response = await api.get(`/authors/${id}`);
//     return response.data;
//   } catch (error) {
//     handleApiError(error, "Failed to fetch author details");
//   }
// };

// export const createAuthor = async (authorData) => {
//   try {
//     const response = await api.post("/authors", authorData);
//     toast.success("Author created successfully!");
//     return response.data;
//   } catch (error) {
//     handleApiError(error, "Failed to create author");
//   }
// };

// export const updateAuthor = async (id, authorData) => {
//   try {
//     const response = await api.put(`/authors/${id}`, authorData);
//     toast.success("Author updated successfully!");
//     return response.data;
//   } catch (error) {
//     handleApiError(error, "Failed to update author");
//   }
// };

// export const deleteAuthor = async (id) => {
//   try {
//     const response = await api.delete(`/authors/${id}`);
//     toast.success("Author deleted successfully!");
//     return response.data;
//   } catch (error) {
//     handleApiError(error, "Failed to delete author");
//   }
// };
