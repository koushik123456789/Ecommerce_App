import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRouts from "./routes/authRoute.js"
import categoryRoutes from "./routes/categoryRoutes.js"
import cors from "cors"
import productRoutes from "./routes/productRoutes.js"
import path from "path";




// cofigure env
dotenv.config();



// database config
connectDB();



//rest object
const app = express();


// middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "./client/build")))



// routes
app.use("/api/v1/auth", authRouts)
app.use("/api/v1/category", categoryRoutes)
app.use("/api/v1/product", productRoutes)



// rest api
app.use("*", function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})


// app.get("/",(req,res)=>{
//     res.send("<h1>wellcome to app</h2>")
// })


// POST
const PORT = process.env.PORT || 8085;



// run listen
app.listen(PORT, () => {
    console.log(`server running on mode on ${process.env.DEV_MODE} ${PORT}`.bgCyan.white);
});
