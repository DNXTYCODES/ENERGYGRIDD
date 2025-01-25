import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import testRoutes from "./routes/testRoutes.js";



// Import routes
import { userRoute } from "./routes/userRoute.js";
import { residencyRoute } from "./routes/residencyRoute.js";
// import { apiRoutes } from "./routes/apiRoutes.js";
import authorRoutes from "./routes/authorRoutes.js";
import publicationRoutes from "./routes/publicationRoutes.js";

// Prisma connection
import { prisma } from "./config/prismaConfig.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "https://energygrid.onrender.com" }));

// Test database connection
(async () => {
  try {
    await prisma.$connect();
    console.log("Connected to the database");
  } catch (err) {
    console.error("Error connecting to the database:", err.message);
    process.exit(1); // Exit if unable to connect to the database
  }
})();

// Routes
app.use("/api/user", userRoute);
app.use("/api/residency", residencyRoute);
app.use("/api/tests", testRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});















// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import { userRoute } from "./routes/userRoute.js";
// import { residencyRoute } from "./routes/residencyRoute.js";
// import {apiRoutes} from "./routes/apiRoutes.js"
// dotenv.config();

// const app = express();

// const PORT = process.env.PORT || 3000;

// app.use(express.json());
// app.use(cookieParser());
// // app.use(cors())
// // app.use(cors({ origin: 'https://solarfrontend-c9rcwk11o-matthewcodezs-projects.vercel.app' }));
// app.use(cors({ origin: "https://energygrid.onrender.com" }));

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// app.use("/api/user", userRoute);
// app.use("/api/residency", residencyRoute);
// app.use("/api", apiRoutes);

