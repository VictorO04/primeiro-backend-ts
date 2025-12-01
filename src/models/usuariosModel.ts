import { prisma } from "../../lib/prisma";

export const findAllUsuarios = async () => {
    return await prisma.usuarios.findMany({
        orderBy: { nome: "asc" }
    });
}