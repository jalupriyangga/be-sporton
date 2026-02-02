import mongoose, { Schema } from "mongoose";
const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    stock: { type: Number, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        required: true,
    },
}, { timestamps: true });
export default mongoose.model("Product", ProductSchema);
