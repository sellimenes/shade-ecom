"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

type Props = {};

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name must be at least 1 character long" }),
  price: z.string().min(0, { message: "Price must be at least 0" }),
  description: z
    .string()
    .min(1, { message: "Description must be at least 1 character long" }),
  categoryId: z.string(),
  isFeatured: z.boolean(),
  isArchived: z.boolean(),
});

const AdminAddProductForm = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: "0",
      description: "",
      categoryId: "",
      isFeatured: false,
      isArchived: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    await axios.post("/api/products", {
      ...values,
      price: parseFloat(values.price),
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>*Name</FormLabel>
              <FormControl>
                <Input placeholder="Name..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>*Description</FormLabel>
              <FormControl>
                <Input placeholder="Description..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>*Price</FormLabel>
              <FormControl>
                <Input type="number" placeholder="0" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>*Category</FormLabel>
              <FormControl>
                <Input placeholder="Category..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isFeatured"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-3 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Featured</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-8">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default AdminAddProductForm;
