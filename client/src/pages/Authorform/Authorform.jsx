import React, { useState, useEffect } from 'react';
import { createAuthor } from '../../utils/api';
import { fetchPublications } from '../../utils/api'; 

const AuthorForm = () => {
  const [authorData, setAuthorData] = useState({
    image: '',
    uniqueId: '',
    name: '',
    role: '',
    phone: '',
    email: '',
    about: '',
    awards: '',
    experience: '',
    publications: [], 
  });

  const [publications, setPublications] = useState([]); 

  useEffect(() => {
    const fetchAllPublications = async () => {
      try {
        const allPublications = await fetchPublications();
        setPublications(allPublications);
      } catch (error) {
        console.error('Error fetching publications:', error);
      }
    };
    fetchAllPublications();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthorData({ ...authorData, [name]: value });
  };

  const handlePublicationSelect = (event) => {
    const selectedPublicationId = event.target.value;
    // Check if the publication is already selected
    if (authorData.publications.includes(selectedPublicationId)) {
      // Remove the publication from the list
      setAuthorData({
        ...authorData,
        publications: authorData.publications.filter(
          (id) => id !== selectedPublicationId
        ),
      });
    } else {
      // Add the publication to the list
      setAuthorData({
        ...authorData,
        publications: [...authorData.publications, selectedPublicationId],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAuthor(authorData);
      // Handle successful submission (e.g., clear form, display success message)
      setAuthorData({
        image: '',
        uniqueId: '',
        name: '',
        role: '',
        phone: '',
        email: '',
        about: '',
        awards: '',
        experience: '',
        publications: [],
      });
      alert('Author created successfully!'); // Simple success message
    } catch (error) {
      // Handle errors (e.g., display error messages)
      console.error('Error creating author:', error);
      alert('Error creating author. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mb-4">Add Author</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input 
            type="text" 
            id="image" 
            name="image" 
            value={authorData.image} 
            onChange={handleChange} 
            className="form-control" 
            placeholder="Enter Image URL" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="uniqueId">Unique ID:</label>
          <input 
            type="text" 
            id="uniqueId" 
            name="uniqueId" 
            value={authorData.uniqueId} 
            onChange={handleChange} 
            className="form-control" 
            placeholder="Enter Unique ID" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={authorData.name} 
            onChange={handleChange} 
            className="form-control" 
            placeholder="Enter Name" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <input 
            type="text" 
            id="role" 
            name="role" 
            value={authorData.role} 
            onChange={handleChange} 
            className="form-control" 
            placeholder="Enter Role" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input 
            type="text" 
            id="phone" 
            name="phone" 
            value={authorData.phone} 
            onChange={handleChange} 
            className="form-control" 
            placeholder="Enter Phone Number" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={authorData.email} 
            onChange={handleChange} 
            className="form-control" 
            placeholder="Enter Email" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="about">About:</label>
          <textarea 
            id="about" 
            name="about" 
            value={authorData.about} 
            onChange={handleChange} 
            className="form-control" 
            placeholder="Enter About" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="awards">Awards:</label>
          <textarea 
            id="awards" 
            name="awards" 
            value={authorData.awards} 
            onChange={handleChange} 
            className="form-control" 
            placeholder="Enter Awards" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience:</label>
          <textarea 
            id="experience" 
            name="experience" 
            value={authorData.experience} 
            onChange={handleChange} 
            className="form-control" 
            placeholder="Enter Experience" 
          />
        </div>
        <div className="form-group">
          <label htmlFor="publications">Publications:</label>
          <select 
            id="publications" 
            name="publications" 
            multiple 
            onChange={handlePublicationSelect} 
            className="form-control" 
          >
            {publications.map((publication) => (
              <option key={publication.id} value={publication.id}>
                {publication.title}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Create Author</button>
      </form>
    </div>
  );
};

export default AuthorForm;