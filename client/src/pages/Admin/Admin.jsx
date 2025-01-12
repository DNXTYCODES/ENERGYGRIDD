import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import AddPropertyModal from "../../components/AddPropertyModal/AddPropertyModal";
import {
  getAllProperties,
  updateResidency,
  deleteResidency,
} from "../../utils/api"; // Importing API functions
import "./Admin.css";

const Admin = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch products using the getAllProperties API function
  const fetchProducts = async () => {
    try {
      const data = await getAllProperties(); // Fetch data from API
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Delete product using deleteResidency API function
  const handleDeleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await deleteResidency(id, token); // Use token for authorization
        setProducts(products.filter((product) => product.id !== id));
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  // Edit product - Open form with selected product data
  const handleEditProduct = (product) => {
    setSelectedProduct(product);
  };

  // Update product using updateResidency API function
  const handleUpdateProduct = async () => {
    try {
      await updateResidency(selectedProduct.id, selectedProduct, token); // Use token for authorization
      toast.success("Product updated successfully");
      setProducts((prev) =>
        prev.map((prod) =>
          prod.id === selectedProduct.id ? selectedProduct : prod
        )
      );
      setSelectedProduct(null);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Handle input changes for editing
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct({
      ...selectedProduct,
      [name]: value,
    });
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>

      <div className="actions">
        <button onClick={() => setModalOpened(true)} className="add-product-button">
          Add Product
        </button>
      </div>

      <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} />

      <section className="products-grid">
        <h2>Manage Products</h2>
        <div className="grid-container">
          {products.length > 0 ? (
            products.map((product) => (
              <div className="product-card" key={product.id}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>
                  <strong>Price:</strong> ${product.price}
                </p>
                <div className="card-actions">
                  <button
                    className="edit-button"
                    onClick={() => handleEditProduct(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </section>

      {selectedProduct && (
        <section className="edit-product">
          <h3>Edit Product</h3>
          <form className="edit-product-form">
            <input
              type="text"
              name="title"
              value={selectedProduct.title}
              onChange={handleChange}
              placeholder="Product Title"
            />
            <textarea
              name="description"
              value={selectedProduct.description}
              onChange={handleChange}
              placeholder="Product Description"
            />
            <input
              type="number"
              name="price"
              value={selectedProduct.price}
              onChange={handleChange}
              placeholder="Price"
            />
            <div className="form-buttons">
              <button type="button" onClick={handleUpdateProduct}>
                Update
              </button>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="cancel-button"
              >
                Cancel
              </button>
            </div>
          </form>
        </section>
      )}
    </div>
  );
};

export default Admin;
