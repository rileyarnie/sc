import ProductList from "@/components/products/ProductList";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  // const { data } = useSession();

  // const router = useRouter();

  // if (!data) return router.push("/auth");

  const session = await getServerSession(authOptions);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* <p>Home Page</p> */}
        <ProductList />
      </div>
    </main>
  );
}
