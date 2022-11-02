import { Router } from "express";
import { borrarColor, agregarColor, editarColor, listarColores, obtenerColor } from "../controllers/colores.controllers";
import { check } from "express-validator";
const router = Router();
router.route("/colores").get(listarColores).post(agregarColor);
router.route("/colores/:id").get(obtenerColor).put(editarColor).delete(borrarColor);
