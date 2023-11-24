-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "original_price" INTEGER NOT NULL,
    "promotional_price" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
