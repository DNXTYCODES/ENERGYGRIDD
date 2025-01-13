// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Properties.css"; // Ensure your CSS is updated
import mockData from "../../utils/publications.js"; // Import mockData
import React, { useState } from "react"; // Correctly import useState from React

const Properties = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("");
  const itemsPerPage = 10; // 2 columns * 5 items per column
  const navigate = useNavigate();

  // Filter and paginate the data
  const filteredData = mockData.filter(
    (publication) =>
      publication.title.toLowerCase().includes(filter.toLowerCase()) ||
      publication.category.toLowerCase().includes(filter.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Split paginated data into two columns
  const columnData = [paginatedData.slice(0, 5), paginatedData.slice(5)];

  return (
    <section>
      <div className="wrapper publications-wrapper">
        <div className="publications-container bg-white">
          {/* Hero Section */}
          <div className="hero-section">
            <h1>Publications</h1>
            <input
              type="text"
              placeholder="Search by Title/Category"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>

          {/* Publications Section */}
          <div className="publications-section">
            {columnData.map((column, columnIndex) => (
              <div className="publications-column" key={columnIndex}>
                {column.map((publication) => (
                  <div
                    className="publication-card"
                    key={publication.id}
                    onClick={() => navigate(`/properties/${publication.id}`)}
                  >
                    <div className="cat-time">
                      <span>{publication.category}</span>
                      <div className="seperator">|</div>
                      <div>{publication.updatedAt}</div>
                    </div>
                    <h3>{publication.title}</h3>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Pagination Section */}
          <div className="pagination-section">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={index + 1 === currentPage ? "active" : ""}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Properties.css"; // Ensure your CSS is updated
// import mockData from "../../utils/publications.js"; // Import mockData

// const Properties = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filter, setFilter] = useState("");
//   const itemsPerPage = 10;
//   const navigate = useNavigate();

//   // Filter and paginate the data
//   const filteredData = mockData.filter(
//     (publication) =>
//       publication.title.toLowerCase().includes(filter.toLowerCase()) ||
//       publication.category.toLowerCase().includes(filter.toLowerCase())
//   );

//   const paginatedData = filteredData.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);

//   return (
//     <div className="wrapper">
//       {/* Hero Section */}
//       <div className="hero-section">
//         <h1>Publications</h1>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//         />
//       </div>

//       {/* Publications Section */}
//       <div className="publications-section">
//         <div className="publications-list">
//           {paginatedData.map((publication) => (
//             <div
//               className="publication-card"
//               key={publication.id}
//               onClick={() => navigate(`/properties/${publication.id}`)}
//             >
//               <h3>{publication.title}</h3>
//               <p>{publication.updatedAt}</p>
//               <span>{publication.category}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pagination Section */}
//       <div className="pagination-section">
//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={index}
//             className={index + 1 === currentPage ? "active" : ""}
//             onClick={() => setCurrentPage(index + 1)}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Properties;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import "./Properties.css";
// import mockData from "../../utils/publications.js";

// const Properties = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filter, setFilter] = useState("");
//   const itemsPerPage = 10;
//   const navigate = useNavigate(); // Initialize navigate

//   const filteredData = mockData.filter(
//     (publication) =>
//       publication.title.toLowerCase().includes(filter.toLowerCase()) ||
//       publication.category.toLowerCase().includes(filter.toLowerCase())
//   );

//   const paginatedData = filteredData.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);

//   return (
//     <div className="wrapper">
//       {/* Hero Section */}
//       <div className="hero-section">
//         <h1>Publications</h1>
//       </div>

//       {/* Publications Section */}
//       <div className="publications-section">
//         <div className="publications-list">
//           {paginatedData.map((publication) => (
//             <div
//               className="publication-card"
//               key={publication.id}
//               onClick={() => navigate(`/propertyId/${publication.id}`)} // Navigate to property page
//             >
//               <h3>{publication.title}</h3>
//               <p>{publication.updatedAt}</p>
//               <span>{publication.category}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pagination Section */}
//       <div className="pagination-section">
//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={index}
//             className={index + 1 === currentPage ? "active" : ""}
//             onClick={() => setCurrentPage(index + 1)}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Properties;

// import React, { useState } from "react";
// import "./Properties.css"; // Update the CSS file accordingly
// import { PuffLoader } from "react-spinners";
// import mockData from "../../utils/publications.js"

// const Properties = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filter, setFilter] = useState("");
//   const itemsPerPage = 10;

//   const filteredData = mockData.filter(
//     (publication) =>
//       publication.title.toLowerCase().includes(filter.toLowerCase()) ||
//       publication.category.toLowerCase().includes(filter.toLowerCase())
//   );

//   const paginatedData = filteredData.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);

//   return (
//     <div className="wrapper">
//       {/* Hero Section */}
//       <div className="hero-section">
//         <h1>Publications</h1>
//       </div>

//       {/* Category Links Section */}
//       <div className="category-links">
//         <button>Publications</button>
//         <button>Company News</button>
//         <button>Events</button>
//         <button>Podcasts</button>
//       </div>

//       {/* Publications Section */}
//       <div className="publications-section">
//         <div className="publications-list">
//           {paginatedData.map((publication) => (
//             <div className="publication-card" key={publication.id}>
//               <h3>{publication.title}</h3>
//               <p>{publication.updatedAt}</p>
//               <span>{publication.category}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pagination Section */}
//       <div className="pagination-section">
//         {[...Array(totalPages)].map((_, index) => (
//           <button
//             key={index}
//             className={index + 1 === currentPage ? "active" : ""}
//             onClick={() => setCurrentPage(index + 1)}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Properties;

// import React, { useState } from "react";
// import SearchBar from "../../components/SearchBar/SearchBar";
// import "./Properties.css";
// import useProperties from "../../hooks/useProperties";
// import { PuffLoader } from "react-spinners";
// import PropertyCard from "../../components/PropertyCard/PropertyCard";
// const Properties = () => {
//   const { data, isError, isLoading } = useProperties();
//   const [filter, setFilter] = useState("");
//   if (isError) {
//     return (
//       <div className="wrapper">
//         <span>Error while fetching data</span>
//       </div>
//     );
//   }

//   if (isLoading) {
//     return (
//       <div className="wrapper flexCenter" style={{ height: "60vh" }}>
//         <PuffLoader
//           height="80"
//           width="80"
//           radius={1}
//           color="#4066ff"
//           aria-label="puff-loading"
//         />
//       </div>
//     );
//   }
//   return (
//     <div className="wrapper">
//       <div className="flexColCenter paddings innerWidth properties-container">
//         <SearchBar filter={filter} setFilter={setFilter} />

//         <div className="paddings flexCenter properties">
//           {
//             // data.map((card, i)=> (<PropertyCard card={card} key={i}/>))

//             data
//               .filter(
//                 (property) =>
//                   property.title.toLowerCase().includes(filter.toLowerCase()) ||
//                   property.city.toLowerCase().includes(filter.toLowerCase()) ||
//                   property.country.toLowerCase().includes(filter.toLowerCase())
//               )
//               .map((card, i) => (
//                 <PropertyCard card={card} key={i} />
//               ))
//           }
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Properties;
