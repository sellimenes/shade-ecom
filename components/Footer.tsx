import React from "react";
import { Separator } from "./ui/separator";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full bg-primary text-secondary flex flex-col">
      <div className="container py-5">test</div>
      <Separator />
      <div className="container py-5">test</div>
      <Separator />
      <div className="container flex items-center justify-between py-5">
        <p>
          Copyright © 2023 Shade Software. We hid all rights. You can't find
          them.
        </p>
        <p>Cards</p>
      </div>
    </footer>
  );
};

export default Footer;
