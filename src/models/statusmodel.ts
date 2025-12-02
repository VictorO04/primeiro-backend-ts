import { prisma } from "../../lib/prisma.js";

export const findAllStatus = async () => {
    return await prisma.status.findMany();
}

export const findStatusById = async (id: number) => {
    return await prisma.status.findUnique({
        where: { id: id }
    });
}