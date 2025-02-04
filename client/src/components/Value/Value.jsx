import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Value.css";
import mockData from "../../utils/publications.js";
import { useNavigate } from "react-router-dom";

const Value = () => {
    const navigate = useNavigate();

    // Group blogs by category
    const groupedData = mockData.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                },
            },
        ],
    };

    return (
        <div>
            <section id="value" className="v-wrapper paddings wrapper">
                <div className="v-container innerWidth flexColStart">
                    {/* Left Side */}
                    <div className="v-left">
                        <h2 className="kc left tex">Knowledge Centre</h2>
                    </div>

                    {/* Right Side */}
                    <div className="v-right montserrat">
                        <Slider {...sliderSettings}>
                            {Object.keys(groupedData).map((category, index) => (
                                <div key={index} className="v-page">
                                    {/* Section Title */}
                                    <h3 className="section-title montserrat">{category}</h3>
                                    {/* Blogs */}
                                    <div className="v-section">
                                        <ul>
                                            {groupedData[category].map((blog) => (
                                                <li
                                                    className="pb-list tex"
                                                    key={blog.id}
                                                    onClick={() => navigate(`/properties/${blog.id}`)}
                                                >
                                                    <span className="write-up clickable">
                                                        {blog.title}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>

            <p className="innerWidth right underline paddings">
                <a className="write-up" href="/publications">
                    Visit our Knowledge Centre
                </a>
            </p>
        </div>
    );
};

export default Value;

























// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./Value.css";
// import mockData from "../../utils/publications.js";
// import { useNavigate } from "react-router-dom";

// const Value = () => {
//     const navigate = useNavigate();

//   // Group blogs by category
//   const groupedData = mockData.reduce((acc, item) => {
//     if (!acc[item.category]) {
//       acc[item.category] = [];
//     }
//     acc[item.category].push(item);
//     return acc;
//   }, {});

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   };

//   return (
//     <div>
//     <section id="value" className="v-wrapper paddings wrapper">
//       <div className="v-container innerWidth flexColStart">
//         {/* Left Side */}
//         <div className="v-left">
//           <h2 className="kc left tex">Knowledge Centre</h2>
//         </div>

//         {/* Right Side */}
//         <div className="v-right montserrat">
//           <Slider {...sliderSettings}>
//             {Object.keys(groupedData).map((category, index) => (
//               <div key={index} className="v-page">
//                 {/* Section Title */}
//                 <h3 className="section-title montserrat">{category}</h3>
//                 {/* Blogs */}
//                 <div className="v-section">
//                   <ul>
//                     {groupedData[category].map((blog) => (
//                       <li className="pb-list montserrat" key={blog.id}>
//                         <a className="montserrat" href="#">
//                           {blog.title}
//                           {/* <p className="blog-meta">Updated: {blog.updatedAt}</p> */}
//                           {/* <p className="blog-description">{blog.description}</p> */}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </section>
    
//     <p className="innerWidth right underline">
//     <a className="left montserrat" href="/knowledge">
//       Visit our Knowledge Centre
//     </a>
//   </p></div>
//   );
// };

// export default Value;

















// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./Value.css";

// const Value = () => {
//   const pages = [
//     {
//       sections: [
//         {
//           title: "Insight",
//           blogs: [
//             "Understanding Market Trends",
//             "AI in Everyday Life",
//             "Sustainable Development",
//             "Future of Renewable Energy",
//             "Impact of Globalization",
//             "Technology and Innovation",
//           ],
//         },
//         {
//           title: "News and Updates",
//           blogs: [
//             "Global Economic Outlook",
//             "Tech Industry Shifts",
//             "Political Changes Worldwide",
//             "Climate Change Reports",
//             "Breaking News Headlines",
//           ],
//         },
//       ],
//     },
//     {
//       sections: [
//         {
//           title: "Podcast",
//           blogs: [
//             "Episode 1: Tech Revolution",
//             "Episode 2: Mental Health",
//             "Episode 3: Remote Work Insights",
//             "Episode 4: Green Energy",
//             "Episode 5: Space Exploration",
//             "Episode 6: History of AI",
//           ],
//         },
//         {
//           title: "More News and Updates",
//           blogs: [
//             "Tech Mergers and Acquisitions",
//             "Breaking Business News",
//             "Healthcare Policies",
//             "Major Sports Events",
//             "Global Climate Strikes",
//             "Economic Recession Trends",
//           ],
//         },
//       ],
//     },
//   ];

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//         },
//       },
//     ],
//   };

//   return (
//     <section id="value" className="v-wrapper paddings wrapper">
      
//       <div className="v-container innerWidth flexColStart">
//         {/* Left Side */}
//         <div className="v-left">
//           <h2 className="kc">Knowledge Centre</h2>
//         </div>

//         {/* Right Side */}
//         <div className="v-right">
//           <Slider {...sliderSettings}>
//             {pages.map((page, pageIndex) => (
//               <div key={pageIndex} className="v-page">
//                 {page.sections.map((section, sectionIndex) => (
//                   <div key={sectionIndex} className="v-section">
//                     <h3>{section.title}</h3>
//                     <ul>
//                       {section.blogs.map((blog, blogIndex) => (
//                         <li key={blogIndex}>
//                           <a href="#">{blog}</a>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </Slider>
//         </div>
//         <p className="underline"><a className="right" href="/knowledge">Visit our Knowledge Centre</a></p>
//       </div>
//     </section>
//   );
// };

// export default Value;

