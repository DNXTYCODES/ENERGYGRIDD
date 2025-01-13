import React, { useState } from "react";
import { useParams } from "react-router-dom";
import people from "../../utils/people";
import "./PersonDetail.css";

const PersonDetail = () => {
  const { name } = useParams();
  const person = people.find((p) => p.name === decodeURIComponent(name));

  if (!person) return <div>Person not found</div>;

  const { picture, role, expertise } = person;
  const { about, experience, publications } = expertise || {};

  // Safely check for data availability
  const hasAbout = about && about.bio;
  const hasExperience = Array.isArray(experience) && experience.length > 0;
  const hasPublications =
    publications &&
    ((Array.isArray(publications.chaptersInBooks) &&
      publications.chaptersInBooks.length > 0) ||
      (Array.isArray(publications.journalArticles) &&
        publications.journalArticles.length > 0) ||
      (Array.isArray(publications.otherPublications) &&
        publications.otherPublications.length > 0));

  // State for switching tabs
  const [activeTab, setActiveTab] = useState(
    hasAbout ? "about" : hasExperience ? "experience" : "publications"
  );

  return (
    <div className="person-detail-container bg-white">
      {/* Blue Section */}
      <div className="blue-section">
        <img src={picture} alt={name} className="person-image" />
        <h1 className="person-name">{name}</h1>
        <p className="person-role">{role}</p>
        <div className="contact-icons">
          {/* Add contact and LinkedIn icons */}
        </div>
      </div>

      {/* Yellow Section */}
      <div className="yellow-section">
        {/* Tabs Header */}
        <div className="tabs">
          <ul>
            {hasAbout && (
              <li
                className={activeTab === "about" ? "active-tab" : ""}
                onClick={() => setActiveTab("about")}
              >
                About
              </li>
            )}
            {hasExperience && (
              <li
                className={activeTab === "experience" ? "active-tab" : ""}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </li>
            )}
            {hasPublications && (
              <li
                className={activeTab === "publications" ? "active-tab" : ""}
                onClick={() => setActiveTab("publications")}
              >
                Publications
              </li>
            )}
          </ul>
        </div>

        {/* Tab Content */}
        <div className="content">
          {activeTab === "about" && hasAbout && (
            <div className="about-section">
              <h2>About</h2>
              <p>{about.bio}</p>
              <h3>Testimonials</h3>
              <ul>
                {about.testimonials?.map((testimonial, index) => (
                  <li key={index}>{testimonial}</li>
                ))}
              </ul>
              <h3>Awards</h3>
              <ul>
                {about.awards?.map((award, index) => (
                  <li key={index}>{award}</li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === "experience" && hasExperience && (
            <div className="experience-section">
              <h2>Experience</h2>
              <ul>
                {experience.map((exp, index) => (
                  <li key={index}>{exp}</li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === "publications" && hasPublications && (
            <div className="publications-section">
              <h2>Publications</h2>
              {publications.chaptersInBooks?.length > 0 && (
                <>
                  <h3>Chapters in Books</h3>
                  <ul>
                    {publications.chaptersInBooks.map((chapter, index) => (
                      <li key={index}>{chapter}</li>
                    ))}
                  </ul>
                </>
              )}
              {publications.journalArticles?.length > 0 && (
                <>
                  <h3>Journal Articles</h3>
                  <ul>
                    {publications.journalArticles.map((article, index) => (
                      <li key={index}>{article}</li>
                    ))}
                  </ul>
                </>
              )}
              {publications.otherPublications?.length > 0 && (
                <>
                  <h3>Other Publications</h3>
                  <ul>
                    {publications.otherPublications.map((other, index) => (
                      <li key={index}>{other}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonDetail;
















// import React from "react";
// import { useParams } from "react-router-dom";
// import people from "../../utils/people";
// import "./PersonDetail.css";

// const PersonDetail = () => {
//   const { name } = useParams();
//   const person = people.find((p) => p.name === decodeURIComponent(name));

//   if (!person) return <div>Person not found</div>;

//   const { picture, role, expertise } = person;

//   const { about, experience, publications } = expertise || {};

//   // Safely check for data availability
//   const hasExperience = Array.isArray(experience) && experience.length > 0;
//   const hasPublications =
//     publications &&
//     (Array.isArray(publications.chaptersInBooks) &&
//       publications.chaptersInBooks.length > 0) ||
//     (Array.isArray(publications.journalArticles) &&
//       publications.journalArticles.length > 0) ||
//     (Array.isArray(publications.otherPublications) &&
//       publications.otherPublications.length > 0);

//   return (
//     <div className="person-detail-container bg-white">
//       {/* Blue Section */}
//       <div className="blue-section">
//         <img src={picture} alt={name} className="person-image" />
//         <h1 className="person-name">{name}</h1>
//         <p className="person-role">{role}</p>
//         <div className="contact-icons">
//           {/* Add icons here */}
//         </div>
//       </div>

//       {/* Yellow Section */}
//       <div className="yellow-section">
//         <div className="tabs">
//           <ul>
//             {about && about.bio && <li>About</li>}
//             {hasExperience && <li>Experience</li>}
//             {hasPublications && <li>Publications</li>}
//           </ul>
//         </div>
//         <div className="content">
//           {about && (
//             <div className="about-section">
//               <h2>About</h2>
//               <p>{about.bio}</p>
//               <h3>Testimonials</h3>
//               <ul>
//                 {about.testimonials?.map((testimonial, index) => (
//                   <li key={index}>{testimonial}</li>
//                 ))}
//               </ul>
//               <h3>Awards</h3>
//               <ul>
//                 {about.awards?.map((award, index) => (
//                   <li key={index}>{award}</li>
//                 ))}
//               </ul>
//               <h3>Posts</h3>
//               <ul>
//                 {about.posts?.map((post, index) => (
//                   <li key={index}>{post}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {hasExperience && (
//             <div className="experience-section">
//               <h2>Experience</h2>
//               <ul>
//                 {experience.map((exp, index) => (
//                   <li key={index}>{exp}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {hasPublications && (
//             <div className="publications-section">
//               <h2>Publications</h2>
//               {publications.chaptersInBooks?.length > 0 && (
//                 <>
//                   <h3>Chapters in Books</h3>
//                   <ul>
//                     {publications.chaptersInBooks.map((chapter, index) => (
//                       <li key={index}>{chapter}</li>
//                     ))}
//                   </ul>
//                 </>
//               )}
//               {publications.journalArticles?.length > 0 && (
//                 <>
//                   <h3>Journal Articles</h3>
//                   <ul>
//                     {publications.journalArticles.map((article, index) => (
//                       <li key={index}>{article}</li>
//                     ))}
//                   </ul>
//                 </>
//               )}
//               {publications.otherPublications?.length > 0 && (
//                 <>
//                   <h3>Other Publications</h3>
//                   <ul>
//                     {publications.otherPublications.map((other, index) => (
//                       <li key={index}>{other}</li>
//                     ))}
//                   </ul>
//                 </>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PersonDetail;


















// import React from "react";
// import { useParams } from "react-router-dom";
// import people from "../../utils/people";
// import "./PersonDetail.css";

// const PersonDetail = () => {
//   const { name } = useParams();
//   const person = people.find((p) => p.name === decodeURIComponent(name));

//   if (!person) return <div>Person not found</div>;

//   const { picture, role, expertise } = person;

//   const { about, experience, publications } = expertise || {};

//   const hasExperience = experience && experience.length > 0;
//   const hasPublications =
//     publications &&
//     (publications.chaptersInBooks.length > 0 ||
//       publications.journalArticles.length > 0 ||
//       publications.otherPublications.length > 0);

//   return (
//     <div className="person-detail-container">
//       {/* Blue Section */}
//       <div className="blue-section">
//         <img src={picture} alt={name} className="person-image" />
//         <h1 className="person-name">{name}</h1>
//         <p className="person-role">{role}</p>
//         <div className="contact-icons">
//           {/* Add icons here */}
//         </div>
//       </div>

//       {/* Yellow Section */}
//       <div className="yellow-section">
//         <div className="tabs">
//           <ul>
//             {about && about.bio && <li>About</li>}
//             {hasExperience && <li>Experience</li>}
//             {hasPublications && <li>Publications</li>}
//           </ul>
//         </div>
//         <div className="content">
//           {about && (
//             <div className="about-section">
//               <h2>About</h2>
//               <p>{about.bio}</p>
//               <h3>Testimonials</h3>
//               <ul>
//                 {about.testimonials.map((testimonial, index) => (
//                   <li key={index}>{testimonial}</li>
//                 ))}
//               </ul>
//               <h3>Awards</h3>
//               <ul>
//                 {about.awards.map((award, index) => (
//                   <li key={index}>{award}</li>
//                 ))}
//               </ul>
//               <h3>Posts</h3>
//               <ul>
//                 {about.posts.map((post, index) => (
//                   <li key={index}>{post}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {hasExperience && (
//             <div className="experience-section">
//               <h2>Experience</h2>
//               <ul>
//                 {experience.map((exp, index) => (
//                   <li key={index}>{exp}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {hasPublications && (
//             <div className="publications-section">
//               <h2>Publications</h2>
//               <h3>Chapters in Books</h3>
//               <ul>
//                 {publications.chaptersInBooks.map((chapter, index) => (
//                   <li key={index}>{chapter}</li>
//                 ))}
//               </ul>
//               <h3>Journal Articles</h3>
//               <ul>
//                 {publications.journalArticles.map((article, index) => (
//                   <li key={index}>{article}</li>
//                 ))}
//               </ul>
//               <h3>Other Publications</h3>
//               <ul>
//                 {publications.otherPublications.map((other, index) => (
//                   <li key={index}>{other}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PersonDetail;
























// import { useParams } from "react-router-dom";
// import React from "react";

// const PersonDetail = () => {
//     const { name } = useParams();
//     return <div>{`Details for ${name}`}</div>;
// };

// export default PersonDetail;
