"use client";

import { useEffect, useMemo, useState } from "react";
import { Trash2 } from "lucide-react";
import axios from "axios";

import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import getProducts from "@/actions/getProducts";

type Props = {};

const tableHeaderItems = [
  {
    name: "Name",
    className: "",
  },
  {
    name: "Price",
    className: "",
  },
  {
    name: "Stock",
    className: "",
  },
  {
    name: "Category",
    className: "",
  },
  {
    name: "Action",
    className: "text-right",
  },
];

const AdminProductsTable = (props: Props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  const handleDelete = (id: string) => {
    axios.delete(`/api/products/${id}`);
  };
  return (
    <Table>
      <TableCaption>A list of your products.</TableCaption>
      <TableHeader>
        <TableRow>
          {tableHeaderItems.map((item, index) => (
            <TableHead key={index} className={cn("", item.className)}>
              {item.name}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product: any) => (
          <TableRow key={product?.id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.stock || 10}</TableCell>
            <TableCell className="">{product.categoryId}</TableCell>
            <TableCell>
              <Trash2
                size={18}
                className="ml-auto text-destructive hover:cursor-pointer hover:opacity-75"
                onClick={() => handleDelete(product.id)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AdminProductsTable;
