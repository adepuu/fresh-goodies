import CategoryList from "@/components/CategoryList";
import Header from "@/components/Header";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

export default function Home() {
  return (
    <main className="">
      <Header />
      <CategoryList />
      <ProductList />
      <ProductDetail />
    </main>
  );
}
