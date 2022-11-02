import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema({
    nombreColor: {
        type: String,
        required: true,
        unique: true,
        minLenght: 1,
    },
});

const Color = mongoose.model("color", colorSchema);

export default Color;
