import express from "express";
import Admin from "../models/models.js";

const router = express.Router();

router.post("/validateAdmin", (req, res) => {
  const admin = Admin(req.body);
  admin
    .save()
    .then(res.send("User guardado"))
    .catch((error) => {
      res.send("Error en crear user");
    });
});

router.get("/alive", (req, res) => {
  res.send("Server is Alive");
});

export default router;
