import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    text: {
        type: [String],
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
});
const Message = mongoose.model("message", messageSchema);
export default Message;
