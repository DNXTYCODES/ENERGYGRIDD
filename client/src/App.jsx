import { Suspense, useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Website from "./pages/Website";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Properties from "./pages/Properties/Properties";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Property from "./pages/Property/Property";
import UserDetailContext from "./context/UserDetailContext";
import Bookings from "./pages/Bookings/Bookings";
import Favourites from "./pages/Favourites/Favourites";
import Estimate from "./pages/Estimate/Estimate";
import Gallery from "./pages/Gallery/Gallery";
import FAQ from "./pages/Faq/Faq";
import PlansPage from "./pages/Plans/PlansPage";
import Admin from "./pages/Admin/Admin";
import { useAuth0 } from "@auth0/auth0-react";
import ExpertisePage from "./pages/ExpertisePage/ExpertisePage";
import People from "./pages/People/People";
import Careers from "./pages/Careers/Careers";
import PersonDetail from "./components/PersonDetail/PersonDetail";
import Publications from "./pages/Publications/Publications";
// import ExpertiseDetail from "./pages/ExpertiseDetail/ExpertiseDetail"; // New component for detailed expertise
// import ServiceDetail from "./pages/ServiceDetail/ServiceDetail"; // New component for detailed service
import SingleExpertisePage from "./pages/SingleExpertisePage/SingleExpertisePage";
import ServicePage from "./pages/ServicePage/ServicePage";
import { services } from "./utils/serviceData";
import About from "./pages/About/About";
import AuthorForm from "./pages/Authorform/Authorform";
import PublicationForm from "./pages/Publicationform/Publicationform";
import TestForm from "./pages/TestForm/TestForm";
import TestList from "./pages/TestForm/TestLIst";

function App() {
  const queryClient = new QueryClient();

  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,
    email: null, // This will be updated dynamically
  });

  const { user, isAuthenticated } = useAuth0();

  // List of allowed admin emails
  const allowedAdmins = ["ayomatthew891@gmail.com", "admin2@example.com"];

  // Check if the logged-in user is an admin
  const isAdmin = isAuthenticated && user && allowedAdmins.includes(user.email);

  // PrivateRoute component to protect the admin route
  const PrivateRoute = ({ children }) => {
    return isAdmin ? children : <Navigate to="/" />;
  };

  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Website />} />

                {/* Publications Route */}
                <Route path="/publications">
                  <Route index element={<Publications />} />
                  <Route path=":id" element={<Property />} />
                </Route>

                <Route path="/services/:serviceId" element={<ServicePage />} />

                {/* Other Routes */}

                <Route path="/about" element={<About />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/estimate" element={<Estimate />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/plans" element={<PlansPage />} />
                <Route path="/people" element={<People />} />
                <Route path="/people/:name" element={<PersonDetail />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/expertise" element={<ExpertisePage />} />
                <Route
                  path="/expertise/:expertiseId"
                  element={<SingleExpertisePage />}
                />
                <Route path="/uploadauthor" element={<AuthorForm />} /> 
                <Route path="/uploadpublication" element={<PublicationForm />} /> 
                <Route path="/testform" element={<TestForm />} /> 
                <Route path="/testlist" element={<TestList />} /> 
                
                

                {/* Protected Admin Route */}
                {isAdmin && (
                  <Route
                    path="/admin"
                    element={
                      <PrivateRoute>
                        <Admin />
                      </PrivateRoute>
                    }
                  />
                )}
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;

















// import { Suspense, useState } from "react";
// import "./App.css";
// import Layout from "./components/Layout/Layout";
// import Website from "./pages/Website";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Properties from "./pages/Properties/Properties";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Property from "./pages/Property/Property";
// import UserDetailContext from "./context/UserDetailContext";
// import Bookings from "./pages/Bookings/Bookings";
// import Favourites from "./pages/Favourites/Favourites";
// import Estimate from "./pages/Estimate/Estimate";
// import Gallery from "./pages/Gallery/Gallery";
// import FAQ from "./pages/Faq/Faq";
// import PlansPage from "./pages/Plans/PlansPage";
// import Admin from "./pages/Admin/Admin";
// import { useAuth0 } from "@auth0/auth0-react";
// import ExpertisePage from "./pages/ExpertisePage/ExpertisePage";
// import People from "./pages/People/People";
// import Careers from "./pages/Careers/Careers";
// import PersonDetail from "./components/PersonDetail/PersonDetail";
// import Publications from "./pages/Publications/Publications";
// // import ExpertiseDetail from "./pages/ExpertiseDetail/ExpertiseDetail"; // New component for detailed expertise
// // import ServiceDetail from "./pages/ServiceDetail/ServiceDetail"; // New component for detailed service
// import SingleExpertisePage from "./pages/SingleExpertisePage/SingleExpertisePage";
// import ServicePage from "./pages/ServicePage/ServicePage";
// import { services } from "./utils/serviceData";
// import About from "./pages/About/About";
// import AuthorForm from "./pages/Authorform/Authorform";
// import PublicationForm from "./pages/Publicationform/Publicationform";

// function App() {
//   const queryClient = new QueryClient();

//   const [userDetails, setUserDetails] = useState({
//     favourites: [],
//     bookings: [],
//     token: null,
//     email: null, // This will be updated dynamically
//   });

//   const { user, isAuthenticated } = useAuth0();

//   // List of allowed admin emails
//   const allowedAdmins = ["ayomatthew891@gmail.com", "admin2@example.com"];

//   // Check if the logged-in user is an admin
//   const isAdmin = isAuthenticated && user && allowedAdmins.includes(user.email);

//   // PrivateRoute component to protect the admin route
//   const PrivateRoute = ({ children }) => {
//     return isAdmin ? children : <Navigate to="/" />;
//   };

//   return (
//     <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
//       <QueryClientProvider client={queryClient}>
//         <BrowserRouter>
//           <Suspense fallback={<div>Loading...</div>}>
//             <Routes>
//               <Route element={<Layout />}>
//                 <Route path="/" element={<Website />} />

//                 {/* Publications Route */}
//                 <Route path="/publications">
//                   <Route index element={<Publications />} />
//                   <Route path=":id" element={<Property />} />
//                 </Route>

//                 <Route path="/services/:serviceId" element={<ServicePage />} />

//                 {/* Other Routes */}

//                 <Route path="/about" element={<About />} />
//                 <Route path="/bookings" element={<Bookings />} />
//                 <Route path="/favourites" element={<Favourites />} />
//                 <Route path="/estimate" element={<Estimate />} />
//                 <Route path="/gallery" element={<Gallery />} />
//                 <Route path="/faq" element={<FAQ />} />
//                 <Route path="/plans" element={<PlansPage />} />
//                 <Route path="/people" element={<People />} />
//                 <Route path="/people/:name" element={<PersonDetail />} />
//                 <Route path="/careers" element={<Careers />} />
//                 <Route path="/expertise" element={<ExpertisePage />} />
//                 <Route
//                   path="/expertise/:expertiseId"
//                   element={<SingleExpertisePage />}
//                 />
//                 <Route path="/uploadauthor" element={<AuthorForm />} /> 
//                 <Route path="/uploadpublication" element={<PublicationForm />} /> 
                

//                 {/* Protected Admin Route */}
//                 {isAdmin && (
//                   <Route
//                     path="/admin"
//                     element={
//                       <PrivateRoute>
//                         <Admin />
//                       </PrivateRoute>
//                     }
//                   />
//                 )}
//               </Route>
//             </Routes>
//           </Suspense>
//         </BrowserRouter>
//         <ToastContainer />
//         <ReactQueryDevtools initialIsOpen={false} />
//       </QueryClientProvider>
//     </UserDetailContext.Provider>
//   );
// }

// export default App;