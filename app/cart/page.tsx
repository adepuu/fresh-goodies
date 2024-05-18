import CartList from "@/components/CartList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart - Fresh Goodies 🥦",
  description: "Cart - Buying Fresh Goodies 🥦",
};

export default function Home() {
  
  return (
    <main className="">
      <CartList />
    </main>
  );
}
