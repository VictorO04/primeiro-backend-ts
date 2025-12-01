import * as usuariosModel from "../models/usuariosModel.js";
import { Request, Response } from "express";

export const getAllUsuarios = async (req: Request, res: Response) => {
    try {
        const usuarios = await usuariosModel.findAllUsuarios();

        res.status(200).json({
            total: usuarios.length,
            mensagem: usuarios.length === 0
                ? "Nenhum usuário na lista"
                : "Usuários encontrados",
            usuarios: usuarios
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Um erro desconhecido ocorreu.";

        res.status(500).json({
            mensagem: "Erro interno",
            detalhes: errorMessage
        });
    }
}