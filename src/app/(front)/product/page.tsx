import FeaturesProduct from "@/components/features-product";
import prisma from "@/lib/prisma";
import type { Metadata } from "next";
import { cacheLife } from "next/cache";

export const metadata: Metadata = {
  title: "สินค้าทั้งหมด",
  description: "รายการสินค้าจากฐานข้อมูล eCommerce",
};

export default async function ProductPage() {
  "use cache";
  cacheLife("hours");

  const products = await prisma.products.findMany({
    include: {
      categories: true,
      product_images: {
        orderBy: {
          id: "asc",
        },
        take: 1,
      },
    },
    orderBy: {
      id: "asc",
    },
  });

  const serializedProducts = products.map((product) => ({
    id: product.id,
    name: product.name ?? "ไม่ระบุชื่อสินค้า",
    description: product.description ?? "",
    price: Number(product.price ?? 0),
    categoryName: product.categories?.name ?? "ไม่ระบุหมวดหมู่",
    imageName: product.product_images[0]?.image_name ?? null,
  }));

  return (
    <main>
      <FeaturesProduct products={serializedProducts} />
    </main>
  );
}
