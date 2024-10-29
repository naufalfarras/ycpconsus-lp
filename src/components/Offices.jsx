import { getOffices } from "@/lib/api";

const Offices = async () => {
  const offices = await getOffices();
  return (
    <div className="max-w-6xl px-4 mx-auto 2xl:max-w-7xl">
      <h2 className="text-4xl tracking-tight text-center lg:text-5xl">
        Our Offices
      </h2>
      <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-10 text-base sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
        {offices.data.map((office, index) => (
          <div key={index}>
            <h3 className="pl-6 text-xl font-medium border-l border-brand-lightblue">
              {office.name}
            </h3>
            <p className="pt-2 pl-6 leading-snug border-l opacity-70 border-black/20">
              {office.address}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offices;
