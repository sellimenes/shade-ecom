import React from "react";

import { MailPlus } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {};

const SubscribeNewsletter = (props: Props) => {
  return (
    <div className="container py-5 flex flex-col md:flex-row gap-5 md:items-center justify-between">
      <div className="uppercase flex items-center gap-3">
        <MailPlus size={55} className="text-muted" />
        <p className="font-semibold">
          <span className="text-muted">$90 Off*</span> your first order!
          Subscribe to <br /> our newsletter today.
        </p>
      </div>
      <div className="flex items-center h-12 w-full md:w-1/3">
        <Input
          type="email"
          placeholder="Your email address"
          className="rounded-r-0 rounded-l-full border-0 text-white h-full bg-muted border-r border-white"
        />
        <Button className="bg-muted h-full rounded-r-full text-white hover:bg-transparent hover:text-destructive transition border border-muted">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default SubscribeNewsletter;
