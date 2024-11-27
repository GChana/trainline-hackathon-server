import express from "express";
import {
  getAllItems,
  getItemById,
  addItem,
  deleteItem,
  updateItem,
} from "../controllers/exampleController.js";

const router = express.Router();

router.get("/", getAllItems);
router.get("/:id", getItemById);
router.post("/add", addItem);
router.patch("/:id/edit", updateItem);
router.delete("/:id", deleteItem);

export default router;
