import Card from "@/components/Card";
import { productDetails } from "@/hooks/useProductDetail";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-2 gap-y-2.5 gap-x-2">
        {productDetails.map((item, index) => {
          <Card price= />;
        })}
      </div>
    </>
  );
}
