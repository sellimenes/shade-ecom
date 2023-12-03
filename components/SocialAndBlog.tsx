import Link from "next/link";
import React from "react";

type Props = {};

const SocialAndBlog = (props: Props) => {
  return (
    <section className="w-full h-72 flex flex-col sm:flex-row my-16 text-white">
      <div className="bg-primary flex-1 flex flex-col items-center justify-center gap-2">
        <p className="text-3xl font-semibold text-center">
          Office Chair <br />
          Collection
        </p>
        <Link href="/" className="text-xs underline">
          View All Products
        </Link>
      </div>
      <div className="bg-muted flex-1 flex flex-col items-center justify-center gap-2">
        <p className="text-3xl font-semibold text-center">
          Follow Our Store <br />
          On Instagram
        </p>
        <Link href="/" className="text-sm">
          @eselimenes
        </Link>
      </div>
    </section>
  );
};

export default SocialAndBlog;
