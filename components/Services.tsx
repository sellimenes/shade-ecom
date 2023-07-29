import { Ship, Gem, Shapes, BadgeDollarSign } from "lucide-react";

type Props = {
  data?: Object;
};

const Services = ({ data }: Props) => {
  return (
    <section className="bg-primary flex flex-wrap items-center justify-between gap-6 sm:gap-0 max-w-7xl w-3/4 mx-auto  rounded-lg -mt-20 z-10 relative shadow-md p-8 lg:py-12">
      <div className="flex items-center justify-center gap-1 w-full sm:w-1/2 lg:w-1/4 text-secondary">
        <Ship size={32} className="pb-1" />
        <div>
          <h3 className="text-xl font-semibold leading-none">Free Shipping</h3>
          <p className="text-sm font-normal">On most orders</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 w-full sm:w-1/2 lg:w-1/4 text-secondary">
        <Gem size={32} className="pb-1" />
        <div>
          <h3 className="text-xl font-semibold leading-none">Expert Advices</h3>
          <p className="text-sm font-normal">On most orders</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 w-full sm:w-1/2 lg:w-1/4 text-secondary">
        <Shapes size={32} className="pb-1" />
        <div>
          <h3 className="text-xl font-semibold leading-none">
            Best Collections
          </h3>
          <p className="text-sm font-normal">On most orders</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 w-full sm:w-1/2 lg:w-1/4 text-secondary">
        <BadgeDollarSign size={32} className="pb-1" />
        <div>
          <h3 className="text-xl font-semibold leading-none">
            Price Guarantee
          </h3>
          <p className="text-sm font-normal">On most orders</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
