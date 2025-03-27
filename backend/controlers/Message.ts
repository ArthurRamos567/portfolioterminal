import mongoose from "mongoose";
import Message from "../models/message.model";
import { Request, Response } from "express";

export const getMessage = async (req:Request, res:Response) => {
    try {
        const { name } = req.params;
        const message = await Message.findOne({name: name}).exec()
        res.status(200).json({ success: true, data: message });
    } catch (error) {
        console.log("Erro no pegar mensagem");
        res.status(500).json({ success: false, message: "Erro no server" });
    }
};
export const postMessage = async (req:Request, res:Response) => {
    const message = req.body;
    if (!message.text) {
        console.log("Erro na requisição: Dados incompletos");
        res.status(400).json({ success: false, message: "Dados incompletos" });
    }
    const newMessage = new Message(message);
    try {
        await newMessage.save();
        res.status(201).json({ success: true, data: newMessage });
    } catch (error) {
        console.log("Erro do sistema");
        res.status(500).json({ success: false, message: "Erro no sistema" });
    }
};
export const updateMessage = async (req:Request, res:Response) => {
    const { id } = req.params;
    const message = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ success: false, message: "Invalid Product Id" });
    }
    try {
        const udpatedMessage = await Message.findByIdAndUpdate(id, message, { new: true });
        res.status(200).json({ success: true, data: udpatedMessage });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
export const deleteMessage = async (req:Request, res:Response) => {
    const { id } = req.params;
    try {
        await Message.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Mensagem deletada" });
    } catch (error) {
        console.log("Erro no deletar mensagem", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
