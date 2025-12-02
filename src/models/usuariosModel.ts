import { prisma } from "../../lib/prisma.js";

export const findAllUsuarios = async () => {
    return await prisma.usuarios.findMany({
        orderBy: { nome: "asc" }
    });
}

export const findUsuariosById = async (id: number) => {
    return await prisma.usuarios.findUnique({
        where: { id: id }
    });
}