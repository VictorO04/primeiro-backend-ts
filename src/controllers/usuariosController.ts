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

export const getUsuariosById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);

        if (isNaN(id)) {
            return res.status(400).json({
                total: 0,
                mensagem: "O id precisa ser um número"
            });
        }

        const usuario = await usuariosModel.findUsuariosById(id);

        if (!usuario) {
            return res.status(404).json({
                total: 0,
                mensagem: `Usuário com o id ${id} não encontrado`
            });
        }

        res.status(200).json({
            total: 1,
            mensagem: `Usuário com o id ${id} encontrado`,
            usuario: usuario
        });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Um erro desconhecido ocorreu.";

        res.status(500).json({
            mensagem: "Erro interno",
            detalhes: errorMessage
        });
    }
}