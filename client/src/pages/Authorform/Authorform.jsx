import React, { useState, useEffect } from "react";
import {
  createAuthor,
  getAuthors,
  updateAuthor,
  deleteAuthor,
} from "../../utils/api";

const AuthorForm = () => {
  const [authors, setAuthors] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    writerId: "",
    image: "",
    name: "",
    role: "",
    about: "",
    email: "",
    linkedIn: "",
    phone: "",
    experience: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fetchAuthors = async () => {
    try {
      setLoading(true);
      const data = await getAuthors();
      setAuthors(data);
    } catch (error) {
      console.error("Error fetching authors:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isEditing) {
        await updateAuthor(formData.id, formData);
        setMessage("Author updated successfully!");
      } else {
        await createAuthor(formData);
        setMessage("Author added successfully!");
      }
      setFormData({
        id: "",
        writerId: "",
        image: "",
        name: "",
        role: "",
        about: "",
        email: "",
        linkedIn: "",
        phone: "",
        experience: "",
      });
      setIsEditing(false);
      fetchAuthors();
    } catch (error) {
      setMessage("Error submitting the form.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (author) => {
    setFormData(author);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this author?")) return;
    setLoading(true);
    try {
      await deleteAuthor(id);
      setMessage("Author deleted successfully!");
      fetchAuthors();
    } catch (error) {
      setMessage("Error deleting the author.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: "#f7f7f7", padding: "20px", borderRadius: "10px" }}>
      <h1 style={{ color: "#333" }}>{isEditing ? "Edit Author" : "Add Author"}</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="writerId"
          placeholder="Writer ID"
          value={formData.writerId}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
        />
        <input
          type="text"
          name="about"
          placeholder="About"
          value={formData.about}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="linkedIn"
          placeholder="LinkedIn Profile"
          value={formData.linkedIn}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
        />
        <input
          type="url"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          {isEditing ? "Update Author" : "Add Author"}
        </button>
      </form>

      {message && <p>{message}</p>}

      <h2>Author List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {authors.map((author) => (
            <li key={author.id}>
              {author.name} ({author.writerId})
              <button onClick={() => handleEdit(author)}>Edit</button>
              <button onClick={() => handleDelete(author.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AuthorForm;





















// import React, { useState, useEffect } from "react";
// import {
//   createAuthor,
//   getAuthors,
//   updateAuthor,
//   deleteAuthor,
// } from "../../utils/api";

// const AuthorForm = () => {
//   const [authors, setAuthors] = useState([]);
//   const [formData, setFormData] = useState({
//     id: "",
//     writerId: "",
//     image: "",
//     name: "",
//     role: "",
//     about: "",
//     email: "",
//     linkedIn: "",
//     phone: "",
//     experience: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);

//   // Fetch all authors
//   const fetchAuthors = async () => {
//     try {
//       const data = await getAuthors();
//       setAuthors(data);
//     } catch (error) {
//       console.error("Error fetching authors:", error);
//     }
//   };

//   useEffect(() => {
//     fetchAuthors();
//   }, []);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission for add/edit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (isEditing) {
//         await updateAuthor(formData.id, formData);
//       } else {
//         await createAuthor(formData);
//       }
//       setFormData({
//         id: "",
//         writerId: "",
//         image: "",
//         name: "",
//         role: "",
//         about: "",
//         email: "",
//         linkedIn: "",
//         phone: "",
//         experience: "",
//       });
//       setIsEditing(false);
//       fetchAuthors();
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   // Handle edit action
//   const handleEdit = (author) => {
//     setFormData(author);
//     setIsEditing(true);
//   };

//   // Handle delete action
//   const handleDelete = async (id) => {
//     try {
//       await deleteAuthor(id);
//       fetchAuthors();
//     } catch (error) {
//       console.error("Error deleting author:", error);
//     }
//   };

//   return (
//     <div style={{ backgroundColor: "gray" }}>
//       <h1>{isEditing ? "Edit Author" : "Add Author"}</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="writerId"
//           placeholder="Writer ID"
//           value={formData.writerId}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="role"
//           placeholder="Role"
//           value={formData.role}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="about"
//           placeholder="About"
//           value={formData.about}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <input
//           type="url"
//           name="linkedIn"
//           placeholder="LinkedIn Profile"
//           value={formData.linkedIn}
//           onChange={handleChange}
//         />
//         <input
//           type="tel"
//           name="phone"
//           placeholder="Phone"
//           value={formData.phone}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="experience"
//           placeholder="Experience"
//           value={formData.experience}
//           onChange={handleChange}
//         />
//         <input
//           type="url"
//           name="image"
//           placeholder="Image URL"
//           value={formData.image}
//           onChange={handleChange}
//         />
//         <button type="submit">{isEditing ? "Update Author" : "Add Author"}</button>
//       </form>


//       <h2>Author List</h2>
//       <ul>
//         {authors.map((author) => (
//           <li key={author.id}>
//             {author.name} ({author.writerId})
//             <button onClick={() => handleEdit(author)}>Edit</button>
//             <button onClick={() => handleDelete(author.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AuthorForm;















// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const AuthorForm = () => {
//   const [authors, setAuthors] = useState([]);
//   const [formData, setFormData] = useState({
//     id: "",
//     writerId: "",
//     image: "",
//     name: "",
//     role: "",
//     about: "",
//     email: "",
//     linkedIn: "",
//     phone: "",
//     experience: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);

//   // Fetch all authors
//   const fetchAuthors = async () => {
//     try {
//       const response = await axios.get("/api/authors");
//       setAuthors(response.data);
//     } catch (error) {
//       console.error("Error fetching authors:", error);
//     }
//   };

//   useEffect(() => {
//     fetchAuthors();
//   }, []);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission for add/edit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (isEditing) {
//         // Update author
//         await axios.put(`/api/authors/${formData.id}`, formData);
//       } else {
//         // Add new author
//         await axios.post("/api/authors", formData);
//       }
//       setFormData({
//         id: "",
//         writerId: "",
//         image: "",
//         name: "",
//         role: "",
//         about: "",
//         email: "",
//         linkedIn: "",
//         phone: "",
//         experience: "",
//       });
//       setIsEditing(false);
//       fetchAuthors();
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   // Handle edit action
//   const handleEdit = (author) => {
//     setFormData(author);
//     setIsEditing(true);
//   };

//   // Handle delete action
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/api/authors/${id}`);
//       fetchAuthors();
//     } catch (error) {
//       console.error("Error deleting author:", error);
//     }
//   };

//   return (
//     <div style={{backgroundColor: "gray"}}>
//       <h1>{isEditing ? "Edit Author" : "Add Author"}</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="writerId"
//           placeholder="Writer ID"
//           value={formData.writerId}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="role"
//           placeholder="Role"
//           value={formData.role}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="about"
//           placeholder="About"
//           value={formData.about}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <input
//           type="url"
//           name="linkedIn"
//           placeholder="LinkedIn Profile"
//           value={formData.linkedIn}
//           onChange={handleChange}
//         />
//         <input
//           type="tel"
//           name="phone"
//           placeholder="Phone"
//           value={formData.phone}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="experience"
//           placeholder="Experience"
//           value={formData.experience}
//           onChange={handleChange}
//         />
//         <input
//           type="url"
//           name="image"
//           placeholder="Image URL"
//           value={formData.image}
//           onChange={handleChange}
//         />
//         <button type="submit">{isEditing ? "Update Author" : "Add Author"}</button>
//       </form>

//       <h2>Author List</h2>
//       <ul>
//         {authors.map((author) => (
//           <li key={author.id}>
//             {author.name} ({author.writerId})
//             <button onClick={() => handleEdit(author)}>Edit</button>
//             <button onClick={() => handleDelete(author.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AuthorForm;












// // JSX Form for Author Management
// import React, { useState, useEffect } from "react";
// import { createAuthor, updateAuthor, fetchAuthorById } from "../../utils/api";
// import { toast } from "react-toastify";

// const AuthorForm = ({ authorId, onSuccess }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     role: "",
//     about: "",
//     experience: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (authorId) {
//         await updateAuthor(authorId, formData);
//         toast.success("Author updated successfully!");
//       } else {
//         await createAuthor(formData);
//         toast.success("Author created successfully!");
//       }
//       onSuccess && onSuccess();
//     } catch (error) {
//       toast.error("Failed to save author details.");
//     }
//   };

//   useEffect(() => {
//     const fetchAuthor = async () => {
//       if (authorId) {
//         try {
//           const author = await fetchAuthorById(authorId);
//           setFormData(author);
//         } catch (error) {
//           toast.error("Failed to fetch author details.");
//         }
//       }
//     };
//     fetchAuthor();
//   }, [authorId]);

//   return (
//     <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "400px", margin: "0 auto" }}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         value={formData.name}
//         onChange={handleChange}
//         style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
//         required
//       />
//       <input
//         type="text"
//         name="role"
//         placeholder="Role"
//         value={formData.role}
//         onChange={handleChange}
//         style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
//         required
//       />
//       <textarea
//         name="about"
//         placeholder="About"
//         value={formData.about}
//         onChange={handleChange}
//         style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px", minHeight: "100px" }}
//         required
//       ></textarea>
//       <input
//         type="number"
//         name="experience"
//         placeholder="Experience (years)"
//         value={formData.experience}
//         onChange={handleChange}
//         style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
//         required
//       />
//       <button type="submit" style={{ padding: "10px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
//         {authorId ? "Update Author" : "Create Author"}
//       </button>
//     </form>
//   );
// };

// export default AuthorForm;

// // Utility Module for API Service Management

// // export const fetchAuthors = async () => {
// //   try {
// //     const response = await api.get("/authors");
// //     return response.data;
// //   } catch (error) {
// //     handleApiError(error, "Failed to fetch authors");
// //   }
// // };

// // export const fetchAuthorById = async (id) => {
// //   try {
// //     const response = await api.get(`/authors/${id}`);
// //     return response.data;
// //   } catch (error) {
// //     handleApiError(error, "Failed to fetch author details");
// //   }`
// // };

// // export const createAuthor = async (authorData) => {
// //   try {
// //     const response = await api.post("/authors", authorData);
// //     toast.success("Author created successfully!");
// //     return response.data;
// //   } catch (error) {
// //     handleApiError(error, "Failed to create author");
// //   }
// // };

// // export const updateAuthor = async (id, authorData) => {
// //   try {
// //     const response = await api.put(`/authors/${id}`, authorData);
// //     toast.success("Author updated successfully!");
// //     return response.data;
// //   } catch (error) {
// //     handleApiError(error, "Failed to update author");
// //   }
// // };

// // export const deleteAuthor = async (id) => {
// //   try {
// //     const response = await api.delete(`/authors/${id}`);
// //     toast.success("Author deleted successfully!");
// //     return response.data;
// //   } catch (error) {
// //     handleApiError(error, "Failed to delete author");
// //   }
// // };
