import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";

// Set up Axios instance with the base URL
export const api = axios.create({
  baseURL: "https://energygridd.onrender.com/api", // Replace with your backend URL
});

const baseURL = "https://energygridd.onrender.com/api";


// Utility function to handle API errors
const handleApiError = (error, customMessage) => {
  const message =
    error.response?.data?.message || customMessage || "Something went wrong!";
  toast.error(message);
  throw error;
};


















// ===== Authors =====

// Create a new author
export const createAuthor = async (authorData) => {
  try {
    const response = await axios.post(`https://energygridd.onrender.com/api/authors`, authorData);
    // return response.data.data;
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Get all authors
// export const getAuthors = async () => {
//   try {
//     const response = await axios.get(`${baseURL}/authors`);
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

export const getAuthors = async () => {
  try {
    // const response = await axios.get(`${baseURL}/authors`);
    const response = await axios.get(`https://energygridd.onrender.com/api/authors`);
    return response.data; // Access the `data` property
  } catch (error) {
    console.error("Error in getAuthors:", error);
    throw error.response?.data || error.message;
  }
};


// Update an author
export const updateAuthor = async (id, updatedData) => {
  try {
    const response = await axios.put(`${baseURL}/authors/${id}`, updatedData);
    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Delete an author
export const deleteAuthor = async (id) => {
  try {
    // await axios.delete(`${baseURL}/authors/${id}`);
    await axios.delete(`https://energygridd.onrender.com/api/authors/${id}`);
  } catch (error) {
    throw error.response.data;
  }
};












// Create a new publication
export const createPublication = async (publicationData) => {
  try {
    const response = await axios.post(`${baseURL}/publications`, publicationData);
    return response.data.data; // Extract the wrapped data
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get all publications
export const getPublications = async () => {
  try {
    const response = await axios.get(`${baseURL}/publications`);
    return response.data.data; // Extract the wrapped data
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Update a publication
export const updatePublication = async (id, updatedData) => {
  try {
    const response = await axios.put(`${baseURL}/publications/${id}`, updatedData);
    return response.data.data; // Extract the wrapped data
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Delete a publication
export const deletePublication = async (id) => {
  try {
    await axios.delete(`${baseURL}/publications/${id}`);
  } catch (error) {
    throw error.response?.data || error.message;
  }
};












// // ===== Publications =====

// // Create a new publication
// export const createPublication = async (publicationData) => {
//   try {
//     const response = await axios.post(`${baseURL}/publications`, publicationData);
//     return response.data.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

// // Get all publications
// export const getPublications = async () => {
//   try {
//     const response = await axios.get(`${baseURL}/publications`);
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

// // Update a publication
// export const updatePublication = async (id, updatedData) => {
//   try {
//     const response = await axios.put(`${baseURL}/publications/${id}`, updatedData);
//     return response.data;
//   } catch (error) {
//     throw error.response.data;
//   }
// };

// // Delete a publication
// export const deletePublication = async (id) => {
//   try {
//     await axios.delete(`${baseURL}/publications/${id}`);
//   } catch (error) {
//     throw error.response.data;
//   }
// };























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











// Fetch all tests
export const fetchTests = async () => {
  try {
    const response = await api.get("/tests");
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to fetch tests");
  }
};

// Fetch a single test by ID
export const fetchTestById = async (id) => {
  try {
    const response = await api.get(`/tests/${id}`);
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to fetch test details");
  }
};

// Create a new test
export const createTest = async (testData) => {
  try {
    const response = await api.post("/tests", testData);
    toast.success("Test created successfully!");
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to create test");
  }
};

// Update a test by ID
export const updateTest = async (id, testData) => {
  try {
    const response = await api.put(`/tests/${id}`, testData);
    toast.success("Test updated successfully!");
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to update test");
  }
};

// Delete a test by ID
export const deleteTest = async (id) => {
  try {
    const response = await api.delete(`/tests/${id}`);
    toast.success("Test deleted successfully!");
    return response.data;
  } catch (error) {
    handleApiError(error, "Failed to delete test");
  }
};





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
