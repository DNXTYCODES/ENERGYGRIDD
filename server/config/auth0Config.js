// import { auth } from 'express-oauth2-jwt-bearer';
// import axios from 'axios';

// // Set your Auth0 credentials
// const clientId = 'vgHbkPBe3b4vcJK5kRtp3uQuGRDhbS4e';
// const clientSecret = 's735oKP1AHC2HALHxnzAtT3b86wrI5O5fyEAji2BuG_pNbFxrhQSSjikelj4YQRN';
// const audience = 'https://solarbackend-eight.vercel.app/';
// const tokenUrl = 'https://dev-y7agkmqetvk26r0j.us.auth0.com/oauth/token';

// // Prepare the token request data
// const data = {
//   client_id: clientId,
//   client_secret: clientSecret,
//   audience: audience,
//   grant_type: 'client_credentials'
// };

// // Function to get the access token from Auth0
// const getToken = async () => {
//   try {
//     const response = await axios.post(tokenUrl, data);
//     console.log('Access Token:', response.data.access_token);
//     return response.data.access_token;  // Return the token for further use
//   } catch (error) {
//     console.error('Error getting token:', error.response?.data || error.message);
//     throw error;
//   }
// };

// // Middleware to check JWT45
// const jwtCheck = auth({
//   audience: audience,
//   issuerBaseURL: 'https://dev-y7agkmqetvk26r0j.us.auth0.com',
//   tokenSigningAlg: 'RS256'
// });

// console.log(tokenUrl)

// // Export the JWT check middleware
// export default jwtCheck;

// // Example usage: get the JWT token (You can call this function where needed)
// getToken().then(token => {
//   // Use the token where necessary (e.g., in API requests or other logic)
// }).catch(error => {
//   console.error('Unable to retrieve JWT:', error);
// });

// prior version

// import {auth} from 'express-oauth2-jwt-bearer'

// const jwtCheck = auth({
//     clientSecret: "s735oKP1AHC2HALHxnzAtT3b86wrI5O5fyEAji2BuG_pNbFxrhQSSjikelj4YQRN",
//     audience: "http://localhost:8000",
//     issuerBaseURL: "https://dev-y7agkmqetvk26r0j.us.auth0.com",
//     tokenSigningAlg: "RS256"
// })

// export default jwtCheck

// import { auth } from 'express-oauth2-jwt-bearer';
// import axios from 'axios';
// import dotenv from 'dotenv';

// // Load environment variables
// dotenv.config();

// // Set your Auth0 credentials from environment variables
// const clientId = 'vgHbkPBe3b4vcJK5kRtp3uQuGRDhbS4e';
// const clientSecret = 's735oKP1AHC2HALHxnzAtT3b86wrI5O5fyEAji2BuG_pNbFxrhQSSjikelj4YQRN';
// const audience = 'https://solarbackend-eight.vercel.app/';
// const tokenUrl = 'https://dev-y7agkmqetvk26r0j.us.auth0.com/oauth/token';
// // const clientId = process.env.AUTH0_CLIENT_ID;
// // const clientSecret = process.env.AUTH0_CLIENT_SECRET;
// // const audience = process.env.AUTH0_AUDIENCE;
// // const tokenUrl = process.env.AUTH0_TOKEN_URL;

// // Prepare the token request data
// const data = {
//   client_id: clientId,
//   client_secret: clientSecret,
//   audience: audience,
//   grant_type: 'client_credentials',
// };

// // Function to get the access token from Auth0
// const getToken = async () => {
//   try {
//     const response = await axios.post(tokenUrl, data);
//     console.log('Access Token:', response.data.access_token);
//     return response.data.access_token; // Return the token for further use
//   } catch (error) {
//     console.error('Error getting token:', error.response?.data || error.message);
//     throw error;
//   }
// };

// // Middleware to check JWT
// const jwtCheck = auth({
//   audience: audience,
//   issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
//   tokenSigningAlg: 'RS256',
// });

// // Example Express app usage
// import express from 'express';
// const app = express();

// app.use('/protected', jwtCheck, (req, res) => {
//   res.send('This is a protected route!');
// });

// // Example token retrieval (You can call this function where needed)
// getToken()
//   .then((token) => {
//     console.log('Token retrieved successfully.');
//   })
//   .catch((error) => {
//     console.error('Unable to retrieve JWT:', error);
//   });

//   getToken();

// export default jwtCheck;

// // Start the Express server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// import { auth } from 'express-oauth2-jwt-bearer';
// import axios from 'axios';
// import dotenv from 'dotenv';
// import express from 'express';

// // Load environment variables
// dotenv.config();

// // Auth0 credentials loaded from environment variables
// const clientId = process.env.AUTH0_CLIENT_ID;
// const clientSecret = process.env.AUTH0_CLIENT_SECRET;
// const audience = process.env.AUTH0_AUDIENCE;
// const tokenUrl = process.env.AUTH0_TOKEN_URL;
// const issuerBaseURL = process.env.AUTH0_ISSUER_BASE_URL;

// // Validate environment variables
// if (!clientId || !clientSecret || !audience || !tokenUrl || !issuerBaseURL) {
//   console.error('Error: Missing required environment variables. Please check your .env file.');
//   process.exit(1);
// }

// // Token request payload
// const tokenRequestData = {
//   client_id: clientId,
//   client_secret: clientSecret,
//   audience: audience,
//   grant_type: 'client_credentials',
// };

// // Function to fetch an access token
// const getToken = async () => {
//   try {
//     const response = await axios.post(tokenUrl, tokenRequestData);
//     console.log('Access Token retrieved successfully:', response.data.access_token);
//     return response.data.access_token;
//   } catch (error) {
//     console.error('Error fetching token:', error.response?.data || error.message);
//     throw error;
//   }
// };

// // JWT middleware for route protection
// const jwtCheck = auth({
//   audience: audience,
//   issuerBaseURL: issuerBaseURL,
//   tokenSigningAlg: 'RS256',
// });

// // Initialize Express app
// const app = express();

// // Example protected route
// app.get('/protected', jwtCheck, (req, res) => {
//   res.send('You have accessed a protected route with a valid JWT!');
// });

// // Example route to demonstrate token usage
// app.get('/token-demo', async (req, res) => {
//   try {
//     const token = await getToken();
//     res.send(`Your access token: ${token}`);
//   } catch (error) {
//     res.status(500).send('Error retrieving token.');
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// // Demonstration: Fetch a token when the server starts
// (async () => {
//   try {
//     const token = await getToken();
//     console.log('Example token for usage:', token);
//   } catch (error) {
//     console.error('Unable to retrieve token at startup:', error);
//   }
// })();

// // CURRENT CONFIG

// import { auth } from "express-oauth2-jwt-bearer";
// import axios from "axios";
// import express from "express";

// // Auth0 credentials from environment variables
// const clientId = process.env.AUTH0_CLIENT_ID;
// const clientSecret = process.env.AUTH0_CLIENT_SECRET;
// const audience = process.env.AUTH0_AUDIENCE;
// const tokenUrl = process.env.AUTH0_TOKEN_URL;
// const issuerBaseURL = process.env.AUTH0_ISSUER_BASE_URL;

// // Validate environment variables
// if (!clientId || !clientSecret || !audience || !tokenUrl || !issuerBaseURL) {
//   throw new Error("Missing required environment variables.");
// }

// // Token request payload
// const tokenRequestData = {
//   client_id: clientId,
//   client_secret: clientSecret,
//   audience: audience,
//   grant_type: "client_credentials",
// };

// // Function to fetch an access token
// const getToken = async () => {
//   try {
//     const response = await axios.post(tokenUrl, tokenRequestData);
//     const token = response.data.access_token;
//     console.log("✅ Token fetched successfully:", token); // Log success message
//     return token;
//   } catch (error) {
//     console.error(
//       "❌ Error fetching token:",
//       error.response?.data || error.message
//     );
//     throw error;
//   }
// };

// // JWT middleware for route protection
// const jwtCheck = auth({
//   audience: audience,
//   issuerBaseURL: issuerBaseURL,
//   tokenSigningAlg: "RS256",
// });

// // Initialize Express app
// const app = express();

// // Protected route example
// app.get("/protected", jwtCheck, (req, res) => {
//   res.send("You have accessed a protected route with a valid JWT!");
// });

// // Token demo route
// app.get("/token-demo", async (req, res) => {
//   try {
//     const token = await getToken();
//     res.json({ accessToken: token });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Start the server and fetch the token on startup
// (async () => {
//   try {
//     const token = await getToken(); // Fetch token on startup
//     console.log("🌟 Example token retrieved on startup:", token); // Log token fetched at startup
//   } catch (error) {
//     console.error("⚠️ Unable to retrieve token at startup:", error);
//   }
// })();

// // Export the Express app for Vercel
// export default app;

import { auth } from "express-oauth2-jwt-bearer";
import axios from "axios";
import express from "express";

// Auth0 credentials from environment variables
const clientId = process.env.AUTH0_CLIENT_ID;
const clientSecret = process.env.AUTH0_CLIENT_SECRET;
const audience = process.env.AUTH0_AUDIENCE;
const tokenUrl = process.env.AUTH0_TOKEN_URL;
const issuerBaseURL = process.env.AUTH0_ISSUER_BASE_URL;

// Validate environment variables
if (!clientId || !clientSecret || !audience || !tokenUrl || !issuerBaseURL) {
  throw new Error("Missing required environment variables.");
}

// Token request payload
const tokenRequestData = {
  client_id: clientId,
  client_secret: clientSecret,
  audience: audience,
  grant_type: "authorization_code",
  redirect_uri: "https://dnxtsolarprojecttt.onrender.com",
  // grant_type: "client_credentials",
};

// Function to fetch an access token
const getToken = async () => {
  try {
    const response = await axios.post(tokenUrl, tokenRequestData);
    const token = response.data.access_token;
    console.log("✅ Token fetched successfully:", token); // Log success message
    return token;
  } catch (error) {
    console.error(
      "❌ Error fetching token:",
      error.response?.data || error.message
    );
    throw error;
  }
};

// JWT middleware for route protection
const jwtCheck = auth({
  audience: audience,
  issuerBaseURL: issuerBaseURL,
  tokenSigningAlg: "RS256",
});

// Initialize Express app
const app = express();

// Protected route example
app.get("/protected", jwtCheck, (req, res) => {
  res.send("You have accessed a protected route with a valid JWT!");
});

// Token demo route
app.get("/token-demo", async (req, res) => {
  try {
    const token = await getToken();
    res.json({ accessToken: token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server and fetch the token on startup
(async () => {
  try {
    const token = await getToken(); // Fetch token on startup
    console.log("🌟 Example token retrieved on startup:", token); // Log token fetched at startup
  } catch (error) {
    console.error("⚠️ Unable to retrieve token at startup:", error);
  }
})();

// Export the Express app for Vercel
export default app;
