import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {};

const ProductDetailTabs = (props: Props) => {
  return (
    <Tabs defaultValue="description" className="w-full">
      <TabsList className="w-full justify-start bg-primary text-secondary">
        <TabsTrigger value="description">Product Description</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
        <TabsTrigger value="tags">Tags</TabsTrigger>
        <TabsTrigger value="additionals">Additional Information</TabsTrigger>
      </TabsList>
      <TabsContent value="description">
        Product description will be here. All HTML etc. supported.
      </TabsContent>
      <TabsContent value="reviews">
        Reviews will be here. All HTML etc. supported.
      </TabsContent>
      <TabsContent value="tags">
        Tags will be here. All HTML etc. supported.
      </TabsContent>
      <TabsContent value="additionals">
        Additional informations will be here. All HTML etc. supported.
      </TabsContent>
    </Tabs>
  );
};

export default ProductDetailTabs;
