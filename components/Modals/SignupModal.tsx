import React from "react";
import axios from "axios";

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
  const register = async () => {
    await axios.post("/api/register", {
      email: "testemail@mail.com",
      password: "testpassword",
    });
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button size={"full"} variant={"destructive"}>
          Signup
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Signup</DialogTitle>
          <DialogDescription>
            Create a new profile here. Click save when you&apos;re done.
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
          <div className="grid grid-cols-4 items-center">
            <Label htmlFor="username">Password (repeat)</Label>
            <Input
              id="password"
              type="password"
              placeholder="nothackablepassword"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={register}>
            Signup
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
