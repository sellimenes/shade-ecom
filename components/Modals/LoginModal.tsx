import React from "react";
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
  const login = () => {
    signIn("credentials", {
      // ...data,
      email: "testemail@mail.com",
      password: "testpassword",
      redirect: false,
    }).then((callback) => {
      if (callback?.error) {
        console.log(callback.error);
      }
      if (callback?.ok) {
        console.log("giriş yapıldı");
      }
    });
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button size={"full"} variant={"destructive"}>
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            Login to your profile here. Click Login when you&apos;re done.
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
            />
          </div>
          <div className="grid grid-cols-4 items-center">
            <Label htmlFor="username">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="nothackablepassword"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={login}>
            Login
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
