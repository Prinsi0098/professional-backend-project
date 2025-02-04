import app from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

console.log("okk");

dotenv.config({
  path: './env'
})


connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running on port ${process.env.PORT}`);
    })
  })
  .catch((error) => {
    console.log("mongoDb connection error", error);

  })

// import express from "express";

// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Errr:-", error);
//       throw error
//     })

//     app.listen(process.env.PORT, () => {
//       console.log(`server is running on port ${process.env.PORT}`)
//     })

//   } catch (error) {
//     console.error("error", error)
//     throw error
//   }
// })()