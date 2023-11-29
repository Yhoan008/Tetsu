import express from "express";
import multer from "multer";
import { v4 } from "uuid";
import Admin from "../models/adminSchema.js";
import productSchema from "../models/productSchema.js";

// config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, v4() + ".jpg");
  },
});

//MiddleWars
const router = express.Router();
const uploads = multer({ dest: "uploads", storage });

//Routes

router.post("/validateAdmin", async (req, res) => {
  const { user, pass } = req.body;
  try {
    const userValid = await Admin.findOne({ $and: [{ user }, { pass }] });
    if (!userValid) {
      return res.status(404).json({ user: false });
    } else {
      res.json({ user: true });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ user: "Error" });
  }
});

router.post("/catallog", uploads.array("images"), (req, res) => {
  const { name, cost, descrip, score } = req.body;
  const imagesPath = req.files.map((file) => file.path);

  const newProduct = {
    name,
    cost,
    descrip,
    score,
    images: imagesPath,
  };

  const product = productSchema(newProduct);

  product
    .save()
    .then(() => {
      res.json({ message: "Producto Guardado" });
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

router.get("/catallog", (req, res) => {
  productSchema
    .find()
    .then((product) => {
      res.json(product);
    })
    .catch((error) => {
      res.status(404);
    });
});

router.get("*", (req, res) => {
  res.redirect("/");
});

export default router;
