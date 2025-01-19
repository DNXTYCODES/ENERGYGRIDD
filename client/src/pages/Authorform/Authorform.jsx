import React, { useState } from "react";
import { createAuthor } from "../../utils/api"; // Import the API call
import "./AuthorForm.css"

const AuthorForm = () => {
  const [formData, setFormData] = useState({
    image: "",
    author_idCode: "",
    name: "",
    role: "",
    linkedIn: "",
    phoneNumber: "",
    email: "",
    about: "",
    awards: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAuthor(formData);
      alert("Author created successfully!");
      setFormData({
        image: "",
        author_idCode: "",
        name: "",
        role: "",
        linkedIn: "",
        phoneNumber: "",
        email: "",
        about: "",
        awards: "",
        experience: "",
      });
    } catch (error) {
      alert("Failed to create author. Please try again.");
      console.error("Error creating author:", error);
    }
  };

  return (
    <form className="author-form" onSubmit={handleSubmit}>
      <h2>Add Author</h2>
      <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
      <input type="text" name="author_idCode" placeholder="Author ID Code" value={formData.author_idCode} onChange={handleChange} required />
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="text" name="role" placeholder="Role" value={formData.role} onChange={handleChange} required />
      <input type="url" name="linkedIn" placeholder="LinkedIn URL" value={formData.linkedIn} onChange={handleChange} required />
      <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <textarea name="about" placeholder="About" value={formData.about} onChange={handleChange} />
      <textarea name="awards" placeholder="Awards" value={formData.awards} onChange={handleChange} />
      <textarea name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AuthorForm;
