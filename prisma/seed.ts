import { ProductType } from "@/components/products/ProductList";
import { PrismaClient } from "@prisma/client";
import { products } from "./products";

const prisma = new PrismaClient();

async function main() {
  for (let product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
