-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customer_id" TEXT NOT NULL,
    "orderItems" TEXT NOT NULL,
    "total_price" INTEGER NOT NULL
);
INSERT INTO "new_Order" ("customer_id", "id", "orderItems", "total_price") SELECT "customer_id", "id", "orderItems", "total_price" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
