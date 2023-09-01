import React from "react";

import AdminAddProductForm from "@/components/AdminAddProductForm";
import AdminProductsTable from "@/components/AdminProductsTable";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex-1 mx-10 my-4 space-y-12">
      <AdminAddProductForm />
      <AdminProductsTable />
    </div>
  );
};

export default page;
