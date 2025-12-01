import { prisma } from "../../lib/prisma";

export const findAllStatus = async () => {
    return await prisma.status.findMany();
}
