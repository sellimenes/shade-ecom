import React from "react";
import {
  CheckCircle2,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import SubscribeNewsletter from "@/components/SubscribeNewsletter";
import IconsPayment from "/public/icons-payment.svg";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full bg-primary text-primary-foreground flex flex-col mt-auto">
      <SubscribeNewsletter />
      <Separator />
      <div className="container py-5 flex flex-col gap-10 lg:flex-row justify-between">
        {/* Top Footer Left */}
        <div className="flex flex-col gap-3 lg:max-w-[33%]">
          <h2 className="italic text-2xl font-bold">Shade E-Com</h2>
          <p className="text-sm mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            nesciunt, eius esse quasi distinctio deleniti eveniet, natus
            veritatis aspernatur dicta doloremque voluptates rem quam aperiam
            iure ducimus? Voluptates, quibusdam voluptatum.
          </p>
          <div className="flex gap-3">
            <div className="p-3 bg-muted aspect-square">
              <Facebook size={18} className="text-white" />
            </div>
            <div className="p-3 bg-muted aspect-square">
              <Instagram size={18} className="text-white" />
            </div>
            <div className="p-3 bg-muted aspect-square">
              <Youtube size={18} className="text-white" />
            </div>
            <div className="p-3 bg-muted aspect-square">
              <Linkedin size={18} className="text-white" />
            </div>
          </div>
        </div>
        {/* Footer Links */}
        <div className="flex items-start gap-10 flex-wrap text-sm">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold uppercase underline underline-offset-4">
              Informations
            </h3>
            <ul className="flex flex-col gap-1 text-primary-foreground">
              <li>
                <Link href="/#" className="flex items-center gap-1">
                  <CheckCircle2 size={15} /> Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/#" className="flex items-center gap-1">
                  <CheckCircle2 size={15} /> Returns & Exchange
                </Link>
              </li>
              <li>
                <Link href="/#" className="flex items-center gap-1">
                  <CheckCircle2 size={15} /> Shipping Information
                </Link>
              </li>
              <li>
                <Link href="/#" className="flex items-center gap-1">
                  <CheckCircle2 size={15} /> Help Topic
                </Link>
              </li>
              <li>
                <Link href="/#" className="flex items-center gap-1">
                  <CheckCircle2 size={15} /> Give Us Feedback
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold uppercase underline underline-offset-4">
              Polices
            </h3>
            <ul className="flex flex-col gap-1 text-primary-foreground">
              <li>
                <Link href="/#" className="flex items-center gap-1">
                  <CheckCircle2 size={15} /> Delivery
                </Link>
              </li>
              <li>
                <Link href="/#" className="flex items-center gap-1">
                  <CheckCircle2 size={15} /> Product Warranty
                </Link>
              </li>
              <li>
                <Link href="/#" className="flex items-center gap-1">
                  <CheckCircle2 size={15} /> Sales and Refunds
                </Link>
              </li>
              <li>
                <Link href="/#" className="flex items-center gap-1">
                  <CheckCircle2 size={15} /> FAQ
                </Link>
              </li>
              <li>
                <Link href="/#" className="flex items-center gap-1">
                  <CheckCircle2 size={15} /> COVID-19 Update
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold uppercase underline underline-offset-4">
              Product Links
            </h3>
            <ul className="flex flex-col gap-1 text-primary-foreground">
              <li>
                <Link href="/#" className="flex items-center gap-1">
                  <CheckCircle2 size={15} /> 3 Seater Sofas
                </Link>
              </li>
              <li>
                <Link href="/#" className="flex items-center gap-1">
                  <CheckCircle2 size={15} /> Loveseats
                </Link>
              </li>
              <li>
                <Link href="/#" className="flex items-center gap-1">
                  <CheckCircle2 size={15} /> Sofa Beds
                </Link>
              </li>
              <li>
                <Link href="/#" className="flex items-center gap-1">
                  <CheckCircle2 size={15} /> Sectional Sofas
                </Link>
              </li>
              <li>
                <Link href="/#" className="flex items-center gap-1">
                  <CheckCircle2 size={15} /> Armchairs & Accent Chairs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Separator />
      <div className="container flex flex-col md:flex-row sm:items-start sm:gap-3 justify-between py-5">
        <p>
          Copyright &copy; 2023 Shade Software. We hid all rights. You can&#39;t
          find them.
        </p>
        <Image src={IconsPayment} alt="payments" width={283} height={24} />
      </div>
    </footer>
  );
};

export default Footer;
