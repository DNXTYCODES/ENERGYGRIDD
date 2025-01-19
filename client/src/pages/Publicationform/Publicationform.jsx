import React, { useState } from "react";
import { createPublication } from "../../utils/api"; // Import the API call
import "./Publicationform.css"

const PublicationForm = () => {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    writeup: "",
    authorId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPublication(formData);
      alert("Publication created successfully!");
      setFormData({
        image: "",
        title: "",
        writeup: "",
        authorId: "",
      });
    } catch (error) {
      alert("Failed to create publication. Please try again.");
      console.error("Error creating publication:", error);
    }
  };

  return (
    <form className="publication-form" onSubmit={handleSubmit}>
      <h2>Add Publication</h2>
      <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
      <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
      <textarea name="writeup" placeholder="Writeup" value={formData.writeup} onChange={handleChange} required />
      <input type="text" name="authorId" placeholder="Author ID (Optional)" value={formData.authorId} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PublicationForm;
