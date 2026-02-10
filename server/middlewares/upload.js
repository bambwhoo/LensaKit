import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let dir = "public/images";

    if (req.baseUrl.includes("artikel")) {
      dir = "public/images/artikel";
    } else if (req.baseUrl.includes("client")) {
      dir = "public/images/client";
    } else if (req.baseUrl.includes("galleries")) {
      dir = "public/images/galeri";
    } else if (req.baseUrl.includes("services")) {
      dir = "public/images/service";
    } else if (req.baseUrl.includes("event")) {
      dir = "public/images/event"
    }

    // ⛑️ pastiin folder ada
    if (!fs.existsSync(dir)) {  
      fs.mkdirSync(dir, { recursive: true });
    }

    cb(null, dir);
  },

  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({ storage });
export default upload;
