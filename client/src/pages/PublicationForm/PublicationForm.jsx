import React, { useState, useEffect } from "react";
import {
  createPublication,
  getPublications,
  updatePublication,
  deletePublication,
  getAuthors,
} from "../../utils/api";

const PublicationForm = () => {
  const [publications, setPublications] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    content: "",
    category: "",
    image: "",
    writerIds: [],
  });
  const [isEditing, setIsEditing] = useState(false);

  // Fetch publications and authors
  const fetchPublications = async () => {
    try {
      const data = await getPublications();
      setPublications(data);
    } catch (error) {
      console.error("Error fetching publications:", error);
    }
  };

  const fetchAuthors = async () => {
    try {
      const data = await getAuthors();
      setAuthors(data);
    } catch (error) {
      console.error("Error fetching authors:", error);
    }
  };

  useEffect(() => {
    fetchPublications();
    fetchAuthors();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMultiSelectChange = (e) => {
    const options = e.target.options;
    const selected = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) selected.push(options[i].value);
    }
    setFormData({ ...formData, writerIds: selected });
  };

  // Handle form submission for add/edit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await updatePublication(formData.id, formData);
      } else {
        await createPublication(formData);
      }
      setFormData({ id: "", title: "", content: "", category: "", image: "", writerIds: [] });
      setIsEditing(false);
      fetchPublications();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Handle edit action
  const handleEdit = (publication) => {
    setFormData(publication);
    setIsEditing(true);
  };

  // Handle delete action
  const handleDelete = async (id) => {
    try {
      await deletePublication(id);
      fetchPublications();
    } catch (error) {
      console.error("Error deleting publication:", error);
    }
  };

  return (
    <div style={{ backgroundColor: "gray" }}>
      <h1>{isEditing ? "Edit Publication" : "Add Publication"}</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        {/* Same form fields as in your original code */}
      </form>

      <h2>Publication List</h2>
      <ul>
        {publications.map((publication) => (
          <li key={publication.id}>
            {publication.title} ({publication.category})
            <button onClick={() => handleEdit(publication)}>Edit</button>
            <button onClick={() => handleDelete(publication.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PublicationForm;












// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const PublicationForm = () => {
//   const [publications, setPublications] = useState([]);
//   const [authors, setAuthors] = useState([]);
//   const [formData, setFormData] = useState({
//     id: "",
//     title: "",
//     content: "",
//     category: "",
//     image: "",
//     writerIds: [],
//   });
//   const [isEditing, setIsEditing] = useState(false);

//   // Fetch publications and authors
//   const fetchPublications = async () => {
//     try {
//       const response = await axios.get("/api/publications");
//       setPublications(response.data);
//     } catch (error) {
//       console.error("Error fetching publications:", error);
//     }
//   };

//   const fetchAuthors = async () => {
//     try {
//       const response = await axios.get("/api/authors");
//       setAuthors(response.data);
//     } catch (error) {
//       console.error("Error fetching authors:", error);
//     }
//   };

//   useEffect(() => {
//     fetchPublications();
//     fetchAuthors();
//   }, []);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleMultiSelectChange = (e) => {
//     const options = e.target.options;
//     const selected = [];
//     for (let i = 0; i < options.length; i++) {
//       if (options[i].selected) selected.push(options[i].value);
//     }
//     setFormData({ ...formData, writerIds: selected });
//   };

//   // Handle form submission for add/edit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (isEditing) {
//         // Update publication
//         await axios.put(`/api/publications/${formData.id}`, formData);
//       } else {
//         // Add new publication
//         await axios.post("/api/publications", formData);
//       }
//       setFormData({ id: "", title: "", content: "", category: "", image: "", writerIds: [] });
//       setIsEditing(false);
//       fetchPublications();
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   // Handle edit action
//   const handleEdit = (publication) => {
//     setFormData(publication);
//     setIsEditing(true);
//   };

//   // Handle delete action
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/api/publications/${id}`);
//       fetchPublications();
//     } catch (error) {
//       console.error("Error deleting publication:", error);
//     }
//   };

//   return (
//     <div style={{backgroundColor: "gray"}}>
//       <h1>{isEditing ? "Edit Publication" : "Add Publication"}</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           value={formData.title}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="content"
//           placeholder="Content"
//           value={formData.content}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="category"
//           placeholder="Category"
//           value={formData.category}
//           onChange={handleChange}
//         />
//         <input
//           type="url"
//           name="image"
//           placeholder="Image URL"
//           value={formData.image}
//           onChange={handleChange}
//         />
//         <label>Select Authors:</label>
//         <select multiple value={formData.writerIds} onChange={handleMultiSelectChange}>
//           {authors.map((author) => (
//             <option key={author.writerId} value={author.writerId}>
//               {author.name} ({author.writerId})
//             </option>
//           ))}
//         </select>
//         <button type="submit">{isEditing ? "Update Publication" : "Add Publication"}</button>
//       </form>

//       <h2>Publication List</h2>
//       <ul>
//         {publications.map((publication) => (
//           <li key={publication.id}>
//             {publication.title} ({publication.category})
//             <button onClick={() => handleEdit(publication)}>Edit</button>
//             <button onClick={() => handleDelete(publication.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PublicationForm;
