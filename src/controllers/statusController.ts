import * as statusModel from "../models/statusmodel.js";
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

export const getStatusById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({
                total: 0,
                mensagem: "O id precisa ser um número"
            });
        }

        const status = await statusModel.findStatusById(id);

        if (!status) {
            return res.status(404).json({
                total: 0,
                mensagem: `Status com o id ${id} não encontrado`
            });
        }

        res.status(200).json({
            total: 1,
            mensagem: `Status com o id ${id} encontrado`,
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