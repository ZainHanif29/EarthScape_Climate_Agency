import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.route.js";
import climateRouter from "./routes/climate.route.js";
dotenv.config();


const corsOptions = {
  origin:'http://localhost:5173' || "*", // Allow all origins temporarily
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

// midllerwares
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors(corsOptions));


app.use((req, res, next) => {
  console.log(`Received ${req.method} request for '${req.url}'`);
  next();
});

app.use('/api/auth',userRouter)
app.use('/api/data',climateRouter)




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDB()
  console.log(`Server is running this port ${`http://localhost:${PORT}`}`);
});
