import axios from "axios";
import { toast } from "react-toastify";

// Set up Axios instance with the base URL
export const api = axios.create({
  baseURL: "https://energygridd.onrender.com/api", // Replace with your backend URL
});

// Utility function to handle API errors
const handleApiError = (error, customMessage) => {
  const message =
    error.response?.data?.message || customMessage || "Something went wrong!";
  toast.error(message);
  throw error;
};

// Get all authors
export const getAllAuthors = async () => {
  try {
    const response = await api.get("/authors");
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to fetch authors");
  }
};

// Get all publications
export const getAllPublications = async () => {
  try {
    const response = await api.get("/publications");
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to fetch publications");
  }
};

// Create a new author
export const createAuthor = async (data) => {
  try {
    const response = await api.post("/authors", data);
    toast.success("Author created successfully");
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to create author");
  }
};

// Create a new publication
export const createPublication = async (data) => {
  try {
    const response = await api.post("/publications", data);
    toast.success("Publication created successfully");
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to create publication");
  }
};

// Get a single author by ID
export const getAuthorById = async (id) => {
  try {
    const response = await api.get(`/authors/${id}`);
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to fetch author details");
  }
};

// Get a single publication by ID
export const getPublicationById = async (id) => {
  try {
    const response = await api.get(`/publications/${id}`);
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to fetch publication details");
  }
};

// Update an author by ID
export const updateAuthor = async (id, data) => {
  try {
    const response = await api.put(`/authors/${id}`, data);
    toast.success("Author updated successfully");
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to update author");
  }
};

// Update a publication by ID
export const updatePublication = async (id, data) => {
  try {
    const response = await api.put(`/publications/${id}`, data);
    toast.success("Publication updated successfully");
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to update publication");
  }
};

// Delete an author by ID
export const deleteAuthor = async (id) => {
  try {
    await api.delete(`/authors/${id}`);
    toast.success("Author deleted successfully");
  } catch (error) {
    handleApiError(error, "Failed to delete author");
  }
};

// Delete a publication by ID
export const deletePublication = async (id) => {
  try {
    await api.delete(`/publications/${id}`);
    toast.success("Publication deleted successfully");
  } catch (error) {
    handleApiError(error, "Failed to delete publication");
  }
};

















// import axios from "axios";
// import dayjs from "dayjs";
// import { toast } from "react-toastify";


// export const api = axios.create({
//   baseURL: "https://energygridd.onrender.com/api", // Replace with your backend URL
// });

// // Get all publications
// export const getAllPublications = async () => {
//   try {
//     const response = await api.get("/publications");
//     return response.data;
//   } catch (error) {
//     toast.error("Failed to fetch publications");
//     throw error;
//   }
// };

// // Get all authors
// export const getAllAuthors = async () => {
//   try {
//     const response = await api.get("/authors");
//     return response.data;
//   } catch (error) {
//     toast.error("Failed to fetch authors");
//     throw error;
//   }
// };

// // Create a publication
// export const createPublication = async (data) => {
//   try {
//     const response = await api.post("/publications", data);
//     toast.success("Publication created successfully");
//     return response.data;
//   } catch (error) {
//     toast.error("Failed to create publication");
//     throw error;
//   }
// };

// // Create an author
// export const createAuthor = async (data) => {
//   try {
//     const response = await api.post("/authors", data);
//     toast.success("Author created successfully");
//     return response.data;
//   } catch (error) {
//     toast.error("Failed to create author");
//     throw error;
//   }
// };





















// // export const api = axios.create({
// //   baseURL: "https://dnxtsolarprojectttbackend.onrender.com/api", // Adjusted baseURL
// // });

// Get all properties
export const getAllProperties = async () => {
  try {
    const response = await api.get("/residency/allresd", { timeout: 10 * 1000 });
    return response.data;
  } catch (error) {
    // toast.error("Failed to fetch properties");
    toast.error("you are seeing this message because the backend server is currently free and the loading time of the free server is slow");
    throw error;
  }
};

// Get a specific property by ID
export const getProperty = async (id) => {
  try {
    const response = await api.get(`/residency/${id}`, { timeout: 10 * 1000 });
    return response.data;
  } catch (error) {
    toast.error("Failed to fetch property details");
    throw error;
  }
};

// Create a new user
export const createUser = async (email, token) => {
  try {
    await api.post(
      `/user/register`,
      { email },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (error) {
    toast.error("Failed to create user. Please try again.");
    throw error;
  }
};

// Book a visit to a property
export const bookVisit = async (date, propertyId, email, token) => {
  try {
    await api.post(
      `/user/bookVisit/${propertyId}`,
      {
        email,
        id: propertyId,
        date: dayjs(date).format("DD/MM/YYYY"),
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (error) {
    toast.error("Failed to book visit. Please try again.");
    throw error;
  }
};

// Remove a booking
export const removeBooking = async (id, email, token) => {
  try {
    await api.post(
      `/user/removeBooking/${id}`,
      { email },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (error) {
    toast.error("Failed to remove booking. Please try again.");
    throw error;
  }
};

// Add a property to favorites
export const toFav = async (id, email, token) => {
  try {
    await api.post(
      `/user/toFav/${id}`,
      { email },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  } catch (error) {
    toast.error("Failed to add to favorites.");
    throw error;
  }
};

// Get all favorite properties
export const getAllFav = async (email, token) => {
  if (!token) return;
  try {
    const res = await api.post(
      `/user/allFav`,
      { email },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data.favResidenciesID;
  } catch (error) {
    toast.error("Failed to fetch favorites");
    throw error;
  }
};

// Get all bookings
export const getAllBookings = async (email, token) => {
  if (!token) return;
  try {
    const res = await api.post(
      `/user/allBookings`,
      { email },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data.bookedVisits;
  } catch (error) {
    toast.error("Failed to fetch bookings");
    throw error;
  }
};

// Create a residency
export const createResidency = async (residencyData, token) => {
  try {
    const res = await api.post(
      `/residency/create`,
      residencyData, // Sending as a flat object
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data;
  } catch (error) {
    toast.error("Failed to create residency. Please try again.");
    throw error;
  }
};



// added code for updating and deleting products

// Update a residency
export const updateResidency = async (id, residencyData, token) => {
  try {
    const res = await api.put(`/residency/${id}`, residencyData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    toast.error("Failed to update residency. Please try again.");
    throw error;
  }
};

// Delete a residency
export const deleteResidency = async (id, token) => {
  try {
    await api.delete(`/residency/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    toast.success("Residency deleted successfully.");
  } catch (error) {
    toast.error("Failed to delete residency. Please try again.");
    throw error;
  }
};
