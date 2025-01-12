import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import "./Property.css";
import mockData from "../../utils/publications.js"; // Import mockData


const Property = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      const property = mockData.find((publication) => publication.id === id);
      setData(property || null);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  if (isLoading) {
    return (
      <div className="wrapper publication-wrapper">
        <div className="flexCenter paddings">
          <PuffLoader />
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="wrapper publication-wrapper">
        <div className="flexCenter paddings">
          <span>Property not found.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper publication-wrapper">
    <div className="publication-container bg-white">
      {/* Hero Image Section */}
      <div className="hero-image">
        <div className="overlay"></div>
        <div className="hero-text">
          <h2 className="title">{data.title}</h2>
        </div>
        <img src={data.image || "/default-image.jpg"} alt="property" />
      </div>

      {/* Bottom Section */}
      <div className="details-container">
        {/* Blue Section */}
        <div className="blue-section">
          <p className="update-time">{data.updatedAt}</p>
          <div className="description">
            {data.description?.split("\n").map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>

        {/* Green Section */}
        {data.authors && (
          <div className="green-section">
            {data.authors.map((author, index) => (
              <div className="author" key={index}>
                <img src={author.image} alt={author.name} />
                <div className="author-details">
                  <p className="name">{author.name}</p>
                  <p className="role">{author.role}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
      
      </div>
  );
};

export default Property;























// import React, { useState } from "react";
// import { useParams } from "react-router-dom"; // Import useParams
// import mockData from "../../utils/publications.js"; // Import mock data
// import { PuffLoader } from "react-spinners";
// import "./Property.css";

// const Property = () => {
//   const { id } = useParams(); // Get the id from the URL
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   // Find the property data
//   const data = mockData.find((publication) => publication.id === id);

//   if (isLoading) {
//     return (
//       <div className="wrapper">
//         <div className="flexCenter paddings">
//           <PuffLoader />
//         </div>
//       </div>
//     );
//   }

//   if (isError || !data) {
//     return (
//       <div className="wrapper">
//         <div className="flexCenter paddings">
//           <span>Error while fetching the property details</span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="wrapper">
//       {/* Hero Image Section */}
//       <div className="hero-image">
//         <div className="overlay"></div>
//         <div className="hero-text">
//           <h2 className="title">{data.title}</h2>
//         </div>
//         <img src={data.image || "/default-image.jpg"} alt="property" />
//       </div>

//       {/* Details Section */}
//       <div className="details-container">
//         <div className="blue-section">
//           <p className="update-time">{data.updatedAt}</p>
//           <div className="description">
//             {data.description?.split("\n").map((line, index) => (
//               <p key={index}>{line}</p>
//             ))}
//           </div>
//         </div>

//         <div className="green-section">
//           {data.authors?.map((author, index) => (
//             <div className="author" key={index}>
//               <img src={author.image} alt={author.name} />
//               <div className="author-details">
//                 <p className="name">{author.name}</p>
//                 <p className="role">{author.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Property;



























// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { PuffLoader } from "react-spinners";
// import "./Property.css";

// const Property = () => {
//   const { pathname } = useLocation();
//   const id = pathname.split("/").slice(-1)[0];

//   // Mock data directly in the code
//   const mockData = {
//     id: "123",
//     image: "/Partners-BDM-February-Retreat.jpg",
//     title: "Establishment of the Chartered Institue of Restructuring and Insolvency Practioners",
//     updatedAt: "January 24, 2025",
//     description:
//       "A beautiful luxury apartment located in the heart of the city.\nIncludes modern amenities, spacious rooms, and a scenic view.\nPerfect for families or individuals seeking comfort and elegance. A beautiful luxury apartment located in the heart of the city.\nIncludes modern amenities, spacious rooms, and a scenic view.\nPerfect for families or individuals seeking comfort and elegance.A beautiful luxury apartment located in the heart of the city.\nIncludes modern amenities, spacious rooms, and a scenic view.\nPerfect for families or individuals seeking comfort and elegance.A beautiful luxury apartment located in the heart of the city.\nIncludes modern amenities, spacious rooms, and a scenic view.\nPerfect for families or individuals seeking comfort and elegance.A beautiful luxury apartment located in the heart of the city.\nIncludes modern amenities, spacious rooms, and a scenic view.\nPerfect for families or individuals seeking comfort and elegance.A beautiful luxury apartment located in the heart of the city.\nIncludes modern amenities, spacious rooms, and a scenic view.\nPerfect for families or individuals seeking comfort and elegance.A beautiful luxury apartment located in the heart of the city.\nIncludes modern amenities, spacious rooms, and a scenic view.\nPerfect for families or individuals seeking comfort and elegance.",
//     authors: [
//       {
//         name: "Sophia Sena Berdie",
//         role: "Senior Associate",
//         image: "/SBAK-Headshot-Square.png",
//       },
//       {
//         name: "Akua Serwaa Agyepong",
//         role: "Associate",
//         image: "/Seyram-Dzikunu.png",
//       },
//     ],
//   };

//   // Simulate loading and error states
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   // Find the property data
//   const data = id === mockData.id ? mockData : null;

//   if (isLoading) {
//     return (
//       <div className="wrapper">
//         <div className="flexCenter paddings">
//           <PuffLoader />
//         </div>
//       </div>
//     );
//   }

//   if (isError || !data) {
//     return (
//       <div className="wrapper">
//         <div className="flexCenter paddings">
//           <span>Error while fetching the property details</span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="wrapper">
//       {/* Hero Image Section */}
//       <div className="hero-image">
//         <div className="overlay"></div>
//         <div className="hero-text">
//           <h2 className="title">{data.title}</h2>
//         </div>
//         <img src={data.image} alt="property" />
//       </div>

//       {/* Bottom Section */}
//       <div className="details-container">
//         {/* Blue Section */}
//         <div className="blue-section">
//           <p className="update-time"> {data.updatedAt}</p>
//           <div className="description">
//             {data.description.split("\n").map((line, index) => (
//               <p key={index}>{line}</p>
//             ))}
//           </div>
//         </div>

//         {/* Green Section */}
//         <div className="green-section">
//           {data.authors.map((author, index) => (
//             <div className="author" key={index}>
//               <img src={author.image} a
//               lt={author.name} />
//               <div className="author-details">
//                 <p className="name">{author.name}</p>
//                 <p className="role">{author.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Property;





















// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { PuffLoader } from "react-spinners";
// import "./Property.css";

// const Property = () => {
//   const { pathname } = useLocation();
//   const id = pathname.split("/").slice(-1)[0];

//   // Mock data directly in the code
//   const mockData = {
//     id: "123",
//     image: "/Partners-BDM-February-Retreat.jpg",
//     title: "Luxury Apartment",
//     updatedAt: "time",
//     description:
//       "A beautiful luxury apartment located in the heart of the city.\nIncludes modern amenities, spacious rooms, and a scenic view.\nPerfect for families or individuals seeking comfort and elegance.",
//     authors: [
//       {
//         name: "Sophia Sena Berdie",
//         role: "Senior Associate",
//         image: "/SBAK-Headshot-Square.png",
//       },
//       {
//         name: "Akua Serwaa Agyepong",
//         role: "Associate",
//         image: "/Seyram-Dzikunu.png",
//       },
//     ],
//   };

//   // Simulate loading and error states
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   // Find the property data
//   const data = id === mockData.id ? mockData : null;

//   if (isLoading) {
//     return (
//       <div className="wrapper">
//         <div className="flexCenter paddings">
//           <PuffLoader />
//         </div>
//       </div>
//     );
//   }

//   if (isError || !data) {
//     return (
//       <div className="wrapper">
//         <div className="flexCenter paddings">
//           <span>Error while fetching the property details</span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="wrapper">
//       {/* Hero Image Section */}
//       <div className="hero-image">
//         <img src={data.image} alt="property" />
//       </div>

//       {/* Bottom Section */}
//       <div className="details-container">
//         {/* Blue Section */}
//         <div className="blue-section">
//           <h2>{data.title}</h2>
//           {/* <p className="price">$ {data.price}</p> */}
//           <div className="description">
//             {data.description.split("\n").map((line, index) => (
//               <p key={index}>{line}</p>
//             ))}
//           </div>
//         </div>

//         {/* Green Section */}
//         <div className="green-section">
//           {data.authors.map((author, index) => (
//             <div className="author" key={index}>
//               <img src={author.image} alt={author.name} />
//               <div className="author-details">
//                 <p className="name">{author.name}</p>
//                 <p className="role">{author.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Property;
















// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { PuffLoader } from "react-spinners";
// import "./Property.css";

// const Property = () => {
//   const { pathname } = useLocation();
//   const id = pathname.split("/").slice(-1)[0];

//   // Mock data directly in the code
//   const mockData = {
//     id: "123",
//     image: "https://example.com/image.jpg",
//     title: "Luxury Apartment",
//     price: 250000,
//     description:
//       "A beautiful luxury apartment located in the heart of the city.\nIncludes modern amenities, spacious rooms, and a scenic view.\nPerfect for families or individuals seeking comfort and elegance.",
//   };

//   // Simulate loading and error states
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   // Find the property data
//   const data = id === mockData.id ? mockData : null;

//   if (isLoading) {
//     return (
//       <div className="wrapper">
//         <div className="flexCenter paddings">
//           <PuffLoader />
//         </div>
//       </div>
//     );
//   }

//   if (isError || !data) {
//     return (
//       <div className="wrapper">
//         <div className="flexCenter paddings">
//           <span>Error while fetching the property details</span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="wrapper">
//       <div className="flexColStart paddings innerWidth property-container">
//         {/* Image */}
//         <img src={data.image} alt="home" />

//         <div className="property-details">
//           {/* Left */}
//           <div className="flexColStart left">
//             {/* Head */}
//             <div className="flexStart head">
//               <span className="primaryText">{data.title}</span>
//               <span className="orangeText" style={{ fontSize: "1.5rem" }}>
//                 $ {data.price}
//               </span>
//             </div>

//             {/* Description */}
//             <div className="secondaryText nd" style={{ textAlign: "justify" }}>
//               {data.description.split("\n").map((line, index) => (
//                 <p key={index}>{line}</p>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Property;




















// import React, { useContext, useState } from "react";
// import { useMutation, useQuery } from "react-query";
// import { useLocation } from "react-router-dom";
// import { getProperty, removeBooking } from "../../utils/api";
// import { PuffLoader } from "react-spinners";
// import { AiFillHeart } from "react-icons/ai";
// import "./Property.css";

// import { FaShower } from "react-icons/fa";
// import { AiTwotoneCar } from "react-icons/ai";
// import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
// import useAuthCheck from "../../hooks/useAuthCheck";
// import { useAuth0 } from "@auth0/auth0-react";
// import BookingModal from "../../components/BookingModal/BookingModal";
// import UserDetailContext from "../../context/UserDetailContext.js";
// import { Button } from "@mantine/core";
// import { toast } from "react-toastify";
// import Heart from "../../components/Heart/Heart";

// const Property = () => {
//   const { pathname } = useLocation();
//   const id = pathname.split("/").slice(-1)[0];
//   const { data, isLoading, isError } = useQuery(["resd", id], () =>
//     getProperty(id)
//   );


//   if (isLoading) {
//     return (
//       <div className="wrapper">
//         <div className="flexCenter paddings">
//           <PuffLoader />
//         </div>
//       </div>
//     );
//   }

//   if (isError) {
//     return (
//       <div className="wrapper">
//         <div className="flexCenter paddings">
//           <span>Error while fetching the property details</span>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="wrapper">
//       <div className="flexColStart paddings innerWidth property-container">
//         {/* like button */}

//         {/* image */}
//         <img src={data?.image} alt="home image" />

//         <div className="property-details">
//           {/* left */}
//           <div className="flexColStart left">
//             {/* head */}
//             <div className="flexStart head">
//               <span className="primaryText">{data?.title}</span>
//               <span className="orangeText" style={{ fontSize: "1.5rem" }}>
//                 $ {data?.price}
//               </span>
//             </div>

//             {/* description */}
//             {/* <span className="secondaryText" style={{ textAlign: "justify" }}>
//               {data?.description}
//             </span> */}

//             {/* new description */}
//             <div className="secondaryText nd" style={{ textAlign: "justify" }}>
//               {data?.description?.split("\n").map((line, index) => (
//                 <p key={index}>{line}</p>
//               ))}
//             </div>


//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Property;
