import multer from "multer";
import path from "path";

// Setup multer for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/temp"); // Directory for uploaded files
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); // Set unique filename
    },
  });
  export const upload = multer({ storage: storage });