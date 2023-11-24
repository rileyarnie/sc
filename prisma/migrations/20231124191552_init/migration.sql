/*
  Warnings:

  - You are about to drop the column `percentageSavings` on the `Product` table. All the data in the column will be lost.
  - Added the required column `percentage_savings` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "original_price" INTEGER NOT NULL,
    "promotional_price" INTEGER NOT NULL,
    "percentage_savings" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    "product_name" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Product" ("createdAt", "id", "image_url", "original_price", "product_name", "promotional_price", "size", "updatedAt") SELECT "createdAt", "id", "image_url", "original_price", "product_name", "promotional_price", "size", "updatedAt" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
