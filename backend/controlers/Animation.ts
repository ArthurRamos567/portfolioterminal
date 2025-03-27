import mongoose from "mongoose";
import Animation from "../models/animation.model";
import { Request, Response } from "express";


export const getAnimation = async (req: Request, res: Response) => {
    try {
        const { name } = req.params;
        const animation = await Animation.findOne({name: name}).exec()
        res.status(200).json({ success: true, data: animation });
    } catch (error) {
        console.log("Erro no pegar animação");
        res.status(500).json({ success: false, message: "Erro no server" });
    }
};
export const postAnimation = async (req: Request, res: Response) => {
    const animation = req.body;
    if (!animation.textarray || !animation.name) {
        console.log("Erro na requisição: Dados incompletos");
        res.status(401).json({ success: false, message: "Dados incompletos" });
    }
    const newAnimation = new Animation(animation);
    try {
        await newAnimation.save();
        res.status(201).json({ success: true, data: newAnimation, message: "Animação cadastrada" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Erro no sistema" });
    }
};
export const updateAnimation = async (req: Request, res: Response) => {
    const { id } = req.params;
    const animation = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ success: false, message: "Invalid Product Id" });
    }
    try {
        const udpatedAnimation = await Animation.findByIdAndUpdate(id, animation, { new: true });
        res.status(200).json({ success: true, data: udpatedAnimation });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
export const deleteAnimation = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await Animation.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Animação deletada" });
    } catch (error) {
        console.log("Erro no deletar animação", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
