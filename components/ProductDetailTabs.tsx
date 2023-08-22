import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Props = {};

const ProductDetailTabs = (props: Props) => {
  return (
    <Tabs
      defaultValue="description"
      className="w-full border shadow-md rounded-t-md"
    >
      <TabsList className="w-full justify-start bg-primary text-secondary rounded-b-none">
        <TabsTrigger
          value="description"
          className="rounded-r-none rounded-bl-none"
        >
          Product Description
        </TabsTrigger>
        <TabsTrigger value="reviews" className="rounded-none">
          Reviews
        </TabsTrigger>
        <TabsTrigger value="tags" className="rounded-none">
          Tags
        </TabsTrigger>
        <TabsTrigger value="additionals" className="rounded-none">
          Additional Information
        </TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="p-2">
        Product description will be here. All HTML etc. supported.
      </TabsContent>
      <TabsContent value="reviews" className="p-2">
        Reviews will be here. All HTML etc. supported.
      </TabsContent>
      <TabsContent value="tags" className="p-2">
        Tags will be here. All HTML etc. supported.
      </TabsContent>
      <TabsContent value="additionals" className="p-2">
        Additional informations will be here. All HTML etc. supported.
      </TabsContent>
    </Tabs>
  );
};

export default ProductDetailTabs;
