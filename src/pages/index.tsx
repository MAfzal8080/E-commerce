import Banner from "@/components/Banner";
import Products from "@/components/Products";
import { ProductProps } from "../../type";

interface Props{
  productData: ProductProps
}

export default function Home({productData}: Props) {
  return (
    <main>
      <div>
        <Banner />
        <Products productData = {productData} />
      </div>
    </main>
  );
}

export const getServerSideProps = async ()=>{
  const res = await fetch("https://fakestoreapi.com/products")
  const productData = await res.json()
  return {props: {productData}}
}
