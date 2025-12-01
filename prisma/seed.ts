import { prisma } from "../lib/prisma";

async function main() {

    const statusParaCriar = [
        {
            status: "A fazer"
        },
        {
            status: "Fazendo"
        },
        {
            status: "Feito"
        }
    ];

    const status = await prisma.status.createMany({
        data: statusParaCriar
    });

    console.log("Seed ocorreu como deveria");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });