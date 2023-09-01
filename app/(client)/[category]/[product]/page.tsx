import ProductDetailCarousel from "@/components/ProductDetailCarousel";
import ProductDetailInfo from "@/components/ProductDetailInfo";
import ProductDetailTabs from "@/components/ProductDetailTabs";
import RelatedProducts from "@/components/RelatedProducts";
import prismadb from "@/lib/prismadb";

type Props = {
  params: {
    product: string;
  };
};

const ProductDetails = async ({ params }: Props) => {
  const product = await prismadb.product.findUnique({
    where: {
      id: params.product,
    },
  });

  if (!product) {
    return <div>Product not found...</div>;
  }

  return (
    <div className="container my-4">
      <section className="flex items-center gap-10 mb-10">
        <ProductDetailCarousel />
        <ProductDetailInfo data={product} />
      </section>
      <ProductDetailTabs data={product} />
      <RelatedProducts />
    </div>
  );
};

export default ProductDetails;
