import React from "react";

type Props = {};

const TripleBanners = (props: Props) => {
  return (
    <section className="my-10 px-10 w-full flex items-center justify-between gap-6">
      <div className="flex-1 aspect-video bg-gray-200"></div>
      <div className="flex-1 aspect-video bg-gray-200"></div>
      <div className="flex-1 aspect-video bg-gray-200"></div>
    </section>
  );
};

export default TripleBanners;
