import { Router } from "express";
import { borrarColor, agregarColor, editarColor, listarColores, obtenerColor } from "../controllers/colores.controllers";
import { check } from "express-validator";
const router = Router();
router
    .route("/colores")
    .get(listarColores)
    .post([check("nombreColor").notEmpty().withMessage("El nombre del color es un dato obligatorio")], agregarColor);
router
    .route("/colores/:id")
    .get(obtenerColor)
    .put([check("nombreColor").notEmpty().withMessage("El nombre del color es un dato obligatorio")], editarColor)
    .delete(borrarColor);
export default router;
