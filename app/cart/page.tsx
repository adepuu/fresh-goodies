import CartList from "@/components/CartList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart - Fresh Goodies 🥦",
  description: "Cart - Buying Fresh Goodies 🥦",
};

export default function Home() {
  
  return (
    <main className="px-4 py-14">
      <h1 className="text-4xl font-bold font-sf-pro-display mb-8">Cart</h1>
      <CartList />
    </main>
  );
}
