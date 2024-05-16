import CategoryList from "@/components/CategoryList";
import Header from "@/components/Header";
import ProductList from "./components/ProductList";

export default function Home() {
  return (
    <main className="">
      <Header />
      <CategoryList />
      <ProductList />
    </main>
  );
}
