"use client";

import React, { useState } from "react";
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

const LoginModal = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button size={"full"} variant={"destructive"}>
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-primary">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription className="text-secondary">
            Login to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 ">
          <div className="grid grid-cols-4 items-center">
            <Label htmlFor="name">Username</Label>
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
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  login();
                }
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={login} variant={"secondary"}>
            Login
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
