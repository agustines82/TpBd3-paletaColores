import { validationResult } from "express-validator";
import Color from "../models/color";

export const listarColores = async (req, res) => {
    try {
        //buscar en la BD la collection de productos
        const colores = await Color.find();
        //enviar respuesa al frontend
        res.status(200).json(colores);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al buscar los colores",
        });
    }
};
export const agregarColor = async (req, res) => {
    try {
        //trabajar con el resultado de la validacion
        const errors = validationResult(req);
        //errors.isEmpty()true o flase dependiendo si tiene o no errores
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errores: errors.array(),
            });
        }

        console.log(req.body);
        //tomar el body y validarlo
        //guardar el objeto en la BD
        const colorNuevo = new Color(req.body);
        await colorNuevo.save();
        res.status(201).json({
            mensaje: "El color fue agregado correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "ocurrio un error al intentar agregar el color",
        });
    }
};
export const obtenerColor = async (req, res) => {
    try {
        //extraer id de la ruta
        console.log(req.params.id);
        //buscar en la BD el producto que tenga ese id
        const colorBuscado = await Color.findById(req.params.id);
        //responder al frontend con el objeto encontrado
        res.status(200).json(colorBuscado);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al buscar el color",
        });
    }
};
export const editarColor = async (req, res) => {
    try {
        //extraer id de la ruta y los datos del objeto a actualizar
        //validar los datos y luego solicitar a la BD actualizar el producto
        await Color.findByIdAndUpdate(req.params.id, req.body);
        //respondemos al fe
        res.status(200).json({
            mensaje: "Color editado correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: "Error al intentar editar el color",
        });
    }
};
export const borrarColor = async (req, res) => {
    try {
        //extraer id de la ruta  y luego solicitar a la BD borrar el producto
        await Color.findByIdAndDelete(req.params.id);
        //respondemos al FE
        res.status(200).json({
            mensaje: "Color borrado correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: "Error al intentar borrar el color",
        });
    }
};
