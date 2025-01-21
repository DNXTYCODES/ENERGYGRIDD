import React, { useState } from "react";

const PublicationForm = () => {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    writeup: "",
    author_idCode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle API call here
    console.log(formData);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Add Publication</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Writeup</label>
          <textarea
            name="writeup"
            value={formData.writeup}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Author ID Code</label>
          <input
            type="text"
            name="author_idCode"
            value={formData.author_idCode}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PublicationForm;
















// import React, { useState } from "react";
// import { createPublication } from "../../utils/api"; // Import the API call
// import "./Publicationform.css"

// const PublicationForm = () => {
//   const [formData, setFormData] = useState({
//     image: "",
//     title: "",
//     writeup: "",
//     authorId: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createPublication(formData);
//       alert("Publication created successfully!");
//       setFormData({
//         image: "",
//         title: "",
//         writeup: "",
//         authorId: "",
//       });
//     } catch (error) {
//       alert("Failed to create publication. Please try again.");
//       console.error("Error creating publication:", error);
//     }
//   };

//   return (
//     <form className="publication-form" onSubmit={handleSubmit}>
//       <h2>Add Publication</h2>
//       <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
//       <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
//       <textarea name="writeup" placeholder="Writeup" value={formData.writeup} onChange={handleChange} required />
//       <input type="text" name="authorId" placeholder="Author ID (Optional)" value={formData.authorId} onChange={handleChange} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default PublicationForm;
