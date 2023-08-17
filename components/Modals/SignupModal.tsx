"use client";

import React, { useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {};

const register = async (data: any) => {
  await axios.post("/api/register", {
    email: data.email,
    password: data.password,
  });

  await signIn("credentials", {
    email: data.email,
    password: data.password,
    redirect: false,
  } as any);
};

const LoginModal = (props: Props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (data.password === data.password2) {
      register(data);

      setOpen(false);
    } else {
      console.log("Passwords don't match");
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button size={"full"} variant={"destructive"}>
          Signup
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-primary">
        <DialogHeader>
          <DialogTitle>Signup</DialogTitle>
          <DialogDescription className="text-secondary">
            Create a new profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 ">
          <div className="grid grid-cols-4 items-center">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="user@mail.com"
              className="col-span-3"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-4 items-center">
            <Label htmlFor="username">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="nothackablepassword"
              className="col-span-3"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-4 items-center">
            <Label htmlFor="username">Password (repeat)</Label>
            <Input
              id="password"
              type="password"
              placeholder="nothackablepassword"
              className="col-span-3"
              value={data.password2}
              onChange={(e) => setData({ ...data, password2: e.target.value })}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit} variant={"secondary"}>
            Signup
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
