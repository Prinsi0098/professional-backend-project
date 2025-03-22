import { v2 as cloudinary } from "cloudinary";
import fs from "fs"



// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
  api_key: process.env.CLOUDNARY_API_KEY,
  api_secret: process.env.CLOUDNARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

// Upload an image
const uploadCoudnary = async (localFilePath) => {
  try {
    if (!localFilePath) return null
    const Response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto"
    })
    //file has been uploaded successfully
    console.log("file has been uploaded successfully", Response.url);
    return Response

  } catch (error) {

  }
}

// const uploadResult = await
//     public_id: 'shoes',
//   }
//   )
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(uploadResult);

//   // Optimize delivery by resizing and applying auto-format and auto-quality
//   const optimizeUrl = cloudinary.url('shoes', {
//     fetch_format: 'auto',
//     quality: 'auto'
//   });

//   console.log(optimizeUrl);

//   // Transform the image: auto-crop to square aspect_ratio
//   const autoCropUrl = cloudinary.url('shoes', {
//     crop: 'auto',
//     gravity: 'auto',
//     width: 500,
//     height: 500,
//   });

//   consol