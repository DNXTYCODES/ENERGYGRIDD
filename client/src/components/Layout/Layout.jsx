// import React, { useContext, useEffect } from "react";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
// import { Outlet } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
// import UserDetailContext from "../../context/UserDetailContext";
// import { useMutation } from "react-query";
// import { createUser } from "../../utils/api";
// import useFavourites from "../../hooks/useFavourites";
// import useBookings from "../../hooks/useBookings";

// const Layout = () => {

//   useFavourites()
//   useBookings()

//   const { isAuthenticated, user, getAccessTokenWithPopup } = useAuth0();
//   const { setUserDetails } = useContext(UserDetailContext);

//   const { mutate } = useMutation({
//     mutationKey: [user?.email],
//     mutationFn: (token) => createUser(user?.email, token),
//   });

//   useEffect(() => {
//     const getTokenAndRegsiter = async () => {

//       const res = await getAccessTokenWithPopup({
//         authorizationParams: {
//           audience: "http://localhost:8000",
//           scope: "openid profile email",
//         },
//       });
//       localStorage.setItem("access_token", res);
//       setUserDetails((prev) => ({ ...prev, token: res }));
//       mutate(res)
//     };

//     isAuthenticated && getTokenAndRegsiter();
//   }, [isAuthenticated]);

//   return (
//     <>
//       <div style={{ background: "var(--black)", overflow: "hidden" }}>
//         <Header />
//         <Outlet />
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Layout;

// post-gpt layout

// import React, { useContext, useEffect } from "react";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
// import { Outlet } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
// import UserDetailContext from "../../context/UserDetailContext";
// import { useMutation } from "react-query";
// import { createUser } from "../../utils/api";
// import useFavourites from "../../hooks/useFavourites";
// import useBookings from "../../hooks/useBookings";

// const Layout = () => {
//   useFavourites();
//   useBookings();

//   const { isAuthenticated, user, getAccessTokenSilently } = useAuth0(); // Use `getAccessTokenSilently` for silent token retrieval
//   const { setUserDetails } = useContext(UserDetailContext);

//   // Mutation for creating a user
//   const { mutate } = useMutation({
//     mutationKey: [user?.email],
//     mutationFn: (token) => createUser(user?.email, token),
//     onSuccess: () => {
//       // Optionally handle success, like logging or notifying the user
//     },
//     onError: (error) => {
//       // Handle errors appropriately, e.g., logging the error
//       console.error("Error creating user:", error);
//     },
//   });

//   useEffect(() => {
//     const getTokenAndRegister = async () => {
//       try {
//         const token = await getAccessTokenSilently({
//           audience: "https://solar-project-snowy.vercel.app",
//           scope: "openid profile email",
//         });
//         localStorage.setItem("access_token", token);
//         setUserDetails((prev) => ({ ...prev, token }));
//         mutate(token);
//       } catch (error) {
//         console.error("Error fetching access token:", error);
//         // Handle token retrieval errors (e.g., user not authenticated, network issues)
//       }
//     };

//     if (isAuthenticated && user) {
//       getTokenAndRegister();
//     }
//   }, [isAuthenticated, user, mutate, setUserDetails]); // Ensure `mutate` and `setUserDetails` are dependencies
//   // console.log(isAuthenticated);
//   // console.log(user);

//   return (
//     <>
//       <div style={{ background: "var(--black)", overflow: "hidden" }}>
//         <Header />
//         <Outlet />
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Layout;

// post-post-gpt layout

import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../../context/UserDetailContext";
import { useMutation } from "react-query";
import { createUser } from "../../utils/api";
import useFavourites from "../../hooks/useFavourites";
import useBookings from "../../hooks/useBookings";

const Layout = () => {
  useFavourites();
  useBookings();

  const { isAuthenticated, user, getAccessTokenSilently } = useAuth0();
  const { setUserDetails } = useContext(UserDetailContext);

  // Mutation for creating a user
  const { mutate } = useMutation({
    mutationKey: [user?.email || ""], // Fallback in case user email is undefined
    mutationFn: (token) => createUser(user?.email, token),
    onSuccess: () => {
      // Optionally handle success, like logging or notifying the user
    },
    onError: (error) => {
      // Handle errors appropriately, e.g., logging the error
      console.error("Error creating user:", error);
    },
  });

  useEffect(() => {
    const getTokenAndRegister = async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: "https://dnxtsolarprojectttbackend.onrender.com/",
          scope: "openid profile email",
        });
        localStorage.setItem("access_token", token);

        // Ensure setUserDetails is defined before using it
        if (setUserDetails) {
          setUserDetails((prev) => ({ ...prev, token }));
        } else {
          console.error("UserDetailContext is not properly initialized.");
        }

        mutate(token);
      } catch (error) {
        console.error("Error fetching access token:", error);
        // Handle token retrieval errors (e.g., user not authenticated, network issues)
      }
    };

    if (isAuthenticated && user) {
      getTokenAndRegister();
    }
  }, [isAuthenticated, user, mutate, setUserDetails, getAccessTokenSilently]);

  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
