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

const AdminProductsTable = async (props: Props) => {
  const products = await getProducts();
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
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
            <TableCell className="text-right">İşlemler</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AdminProductsTable;
