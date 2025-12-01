import * as statusModel from "../models/statusmodel";
import { Request, Response } from "express";

export const getAllStatus = async (req: Request, res: Response) => {
    try {
        const status = await statusModel.findAllStatus();

        res.status(200).json({
            total: status.length,
            mensagem: status.length === 0 
                ? "Nenhum status na lista"
                : "Status encontrados",
            status: status
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Um erro desconhecido ocorreu.";

        res.status(500).json({
            mensagem: "Erro interno",
            detalhes: errorMessage
        });
    }
}