import mongoose from "mongoose";

const animationSchema = new mongoose.Schema({
    textarray: {
        type: [[String]],
        required: true,
        default: null,
    },
    name: {
        type: String,
        required: true,
    },
});

const Animation = mongoose.model("animation", animationSchema);
export default Animation;
