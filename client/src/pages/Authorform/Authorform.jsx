// import React, { useState } from "react";

// const AuthorForm = () => {
//   const [formData, setFormData] = useState({
//     image: "",
//     author_idCode: "",
//     name: "",
//     role: "",
//     linkedin: "",
//     phone: "",
//     email: "",
//     testimonial: "",
//     awards: "",
//     experience: "",
//     publications: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle API call here
//     console.log(formData);
//   };

//   return (
//     <div className="max-w-lg mx-auto p-8 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-4 text-center">Add Author</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-gray-700 font-semibold">Image URL</label>
//           <input
//             type="text"
//             name="image"
//             value={formData.image}
//             onChange={handleChange}
//             className="w-full border rounded-md p-2"
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 font-semibold">
//             Author ID Code
//           </label>
//           <input
//             type="text"
//             name="author_idCode"
//             value={formData.author_idCode}
//             onChange={handleChange}
//             className="w-full border rounded-md p-2"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 font-semibold">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border rounded-md p-2"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 font-semibold">Role</label>
//           <input
//             type="text"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             className="w-full border rounded-md p-2"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 font-semibold">LinkedIn URL</label>
//           <input
//             type="url"
//             name="linkedin"
//             value={formData.linkedin}
//             onChange={handleChange}
//             className="w-full border rounded-md p-2"
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 font-semibold">Phone</label>
//           <input
//             type="text"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="w-full border rounded-md p-2"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 font-semibold">Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full border rounded-md p-2"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-700 font-semibold">Testimonial</label>
//           <textarea
//             name="testimonial"
//             value={formData.testimonial}
//             onChange={handleChange}
//             className="w-full border rounded-md p-2"
//           ></textarea>
//         </div>
//         <div>
//           <label className="block text-gray-700 font-semibold">Awards</label>
//           <textarea
//             name="awards"
//             value={formData.awards}
//             onChange={handleChange}
//             className="w-full border rounded-md p-2"
//           ></textarea>
//         </div>
//         <div>
//           <label className="block text-gray-700 font-semibold">Experience</label>
//           <textarea
//             name="experience"
//             value={formData.experience}
//             onChange={handleChange}
//             className="w-full border rounded-md p-2"
//             required
//           ></textarea>
//         </div>
//         <div>
//           <label className="block text-gray-700 font-semibold">
//             Publications
//           </label>
//           <textarea
//             name="publications"
//             value={formData.publications}
//             onChange={handleChange}
//             className="w-full border rounded-md p-2"
//           ></textarea>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AuthorForm;










import React, { useState } from "react";
import { createAuthor } from "../../utils/api"; // Import the API call
import "./Authorform.css"

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
      <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange}  />
      <input type="text" name="author_idCode" placeholder="Author ID Code" value={formData.author_idCode} onChange={handleChange}  />
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange}  />
      <input type="text" name="role" placeholder="Role" value={formData.role} onChange={handleChange}  />
      <input type="url" name="linkedIn" placeholder="LinkedIn URL" value={formData.linkedIn} onChange={handleChange}  />
      <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange}  />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}  />
      <textarea name="about" placeholder="About" value={formData.about} onChange={handleChange} />
      <textarea name="awards" placeholder="Awards" value={formData.awards} onChange={handleChange} />
      <textarea name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange}  />
      <button type="submit">Submit</button>
    </form>
    // <form className="author-form" onSubmit={handleSubmit}>
    //   <h2>Add Author</h2>
    //   <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
    //   <input type="text" name="author_idCode" placeholder="Author ID Code" value={formData.author_idCode} onChange={handleChange} required />
    //   <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
    //   <input type="text" name="role" placeholder="Role" value={formData.role} onChange={handleChange} required />
    //   <input type="url" name="linkedIn" placeholder="LinkedIn URL" value={formData.linkedIn} onChange={handleChange} required />
    //   <input type="tel" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
    //   <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
    //   <textarea name="about" placeholder="About" value={formData.about} onChange={handleChange} />
    //   <textarea name="awards" placeholder="Awards" value={formData.awards} onChange={handleChange} />
    //   <textarea name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange} required />
    //   <button type="submit">Submit</button>
    // </form>
  );
};

export default AuthorForm;
