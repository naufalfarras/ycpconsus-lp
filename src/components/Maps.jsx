import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";

const Maps = async () => {
  const offices = [
    {
      name: "Amsterdam",
      address: "Keizersgracht 482, 1017EG, Amsterdam, Netherlands",
      coordinate: {
        x: 10,
        y: 22,
      },
    },
    {
      name: "Hyderabad",
      address:
        "Level 5, Caddie Commercial Tower, Hospitality District Aerocity, IGI Airport, New Delhi - 110037, India",
      coordinate: {
        x: 26.5,
        y: 37,
      },
    },
    {
      name: "Mumbai",
      address:
        "#1141, 11th Floor, B Wing, Peninsula Business Park, S B Road, Lower Parel, Mumbai - 400 013",
      coordinate: {
        x: 26,
        y: 42,
      },
    },
    {
      name: "Bangalore",
      address:
        "#408, 4th Floor,Golden Square Prime, Opp. Madivala Police Station, Koramangala, Bangalore - 560 068",
      coordinate: {
        x: 27,
        y: 47,
      },
    },
    {
      name: "New Delhi",
      address:
        "S3-E, 3rd Floor, Hansalaya Building 15 Barakhamba 110001, New Delhi, India",
      coordinate: {
        x: 28.5,
        y: 37,
      },
    },
    {
      name: "Yangon",
      address:
        "Suite 606, 6th Floor, Crystal Tower, Junction Square Compound, Kyun Taw Road, Kamaryut Township, Yangon, Myanmar",
      coordinate: {
        x: 32,
        y: 42,
      },
    },
    {
      name: "Bangkok",
      address:
        "63 Athenee Tower, 15th Floor, Unit 1507/1, Wireless Road, Lumphini, Pathumwan, Bangkok, Thailand",
      coordinate: {
        x: 33,
        y: 46,
      },
    },
    {
      name: "Ho Chi Minh City",
      address:
        "Suite 704, Satra Dong Khoi Building, 58 Dong Khoi street , District 1, Ho Chi Minh City, Vietnam",
      coordinate: {
        x: 35,
        y: 46,
      },
    },
    {
      name: "Kuala Lumpur",
      address: [
        {
          company: "YCP Holdings",
          name: "The Horizon, Avenue 3, Tower 3, Unit 1-1, Bangsar South, Kuala Lumpur 59200, Malaysia",
        },
        {
          company: "YCP Consus",
          name: "Colony @ Eco City, Level 18 (Unit 1813), Boutique Office 1 (B-01-D), Menara 2, KL Eco City, No. 3 Jalan Bangsar, Kuala Lumpur, Malaysia",
        },
      ],
      coordinate: {
        x: 33,
        y: 52,
      },
    },
    {
      name: "Singapore",
      address: [
        {
          company: "YCP Holdings",
          name: "3 Fraser Street, DUO Tower, #05-21, Singapore 189352",
        },
        {
          company: "YCP Consus",
          name: "1 Fullerton Road #02-01, One Fullerton, 049213, Singapore",
        },
      ],
      coordinate: {
        x: 34.5,
        y: 53.5,
      },
    },
    {
      name: "Jakarta",
      address:
        "Satrio Tower, 22nd Floor – Unit C2, Jl. Prof. Dr. Satrio, Kav C4, Kuningan Timur, Setiabudi",
      coordinate: {
        x: 35.5,
        y: 61,
      },
    },
    {
      name: "Surabaya",
      address:
        "YCP Solidiance Digital Studio, Revio Space, 1st Floor, Jl. Kaliwaron No.58, Gubeng, Surabaya 60285",
      coordinate: {
        x: 37.5,
        y: 62,
      },
    },
    {
      name: "Hong Kong",
      address:
        "46-133, 46/F, 33 Hysan Avenue, Lee Garden One, Causeway Bay, Hong Kong.",
      coordinate: {
        x: 38.2,
        y: 39,
      },
    },
    {
      name: "Taiwan",
      address: "10F-1, No.209, Sec. 1, Civic Blvd., Datong Dist., Taipei City",
      coordinate: {
        x: 40,
        y: 39,
      },
    },
    {
      name: "Shanghai",
      address:
        "Room 2711, Hong Kong New World Tower, No. 300 Middle Huaihai Road, Huangpu District",
      coordinate: {
        x: 39.2,
        y: 34,
      },
    },
    {
      name: "Shanghai",
      address:
        "Room 2711, Hong Kong New World Tower, No. 300 Middle Huaihai Road, Huangpu District",
      coordinate: {
        x: 39.2,
        y: 34,
      },
    },
    {
      name: "San Diego",
      address: "12707 High Bluff Drive, Suite 200, San Diego, CA 92130",
      coordinate: {
        x: 74,
        y: 33,
      },
    },
    {
      name: "UAE",
      address:
        "Level 3, The Offices 3, One Central, World Trade Center, P.O.Box 9573 Dubai, UAE",
      coordinate: {
        x: 20.5,
        y: 38.3,
      },
    },
    {
      name: "Bengaluru",
      address:
        "Consus iTechnologies Pvt. Ltd.​ Koraya Business Synergy Center No. 07/2 2nd floor, 18h Main Rd. Jayanagara 9th Block, Bengaluru",
      coordinate: {
        x: 27,
        y: 44,
      },
    },
    {
      name: "Gurgaon",
      address:
        "Level 18, One Horizon Center, Golf Course Road, DLF Phase-5, Sector 43, Gurgaon, India, Haryana",
      coordinate: {
        x: 27.5,
        y: 40,
      },
    },
    {
      name: "USA",
      address: "250 Park Avenue, 7th Floor, New York, NY-10177 US",
      coordinate: {
        x: 84.4,
        y: 26.2,
      },
    },
    {
      name: "Canada",
      address:
        "Suite 900, 1959 Upper Water Street, Halifax, NS, B3J 3N2, Canada",
      coordinate: {
        x: 86.4,
        y: 24.2,
      },
    },
    {
      name: "Philippines",
      address: [
        {
          company: "YCP Holdings",
          name: "Penthouse, MSE Building, Ayala Triangle, 6767 Ayala Avenue",
        },
        {
          company: "YCP Consus",
          name: "20/F, Zuellig Building, Makati Ave, Corner Paseo De Roxas, Philippines",
        },
      ],
      coordinate: {
        x: 40,
        y: 49,
      },
    },
  ];
  return (
    <div className="max-w-6xl mx-auto overflow-x-auto lg:px-4 2xl:max-w-7xl lg:overflow-hidden">
      <div className="relative w-[230%] lg:w-full">
        <div className="aspect-[600/277]">
          <Image
            src={`/images/world-map.jpg`}
            alt={`World Map`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        {offices.map((office, index) => (
          <HoverCard key={index}>
            <HoverCardTrigger asChild>
              <span
                className="absolute inline-block w-5 cursor-pointer aspect-square"
                style={{
                  top: `${office.coordinate.y}%`,
                  left: `${office.coordinate.x}%`,
                }}
              >
                <span className="absolute inset-0 rounded-full bg-brand-primary animate-ping opacity-30"></span>
                <Image
                  src={`/images/ycp-icon.svg`}
                  alt={`Pin Icon`}
                  fill
                  className="object-cover w-full h-full rounded-full shadow"
                />
              </span>
            </HoverCardTrigger>
            <HoverCardContent className="w-[360px]">
              <p className="text-xl font-medium">{office.name} Office</p>
              {!!Array.isArray(office.address) ? (
                <>
                  {office.address.map((item, index) => (
                    <>
                      <p
                        className="mt-2 text-sm text-brand-lightblue"
                        key={index}
                      >
                        {item.company}
                      </p>
                      <p className="text-sm opacity-70" key={index}>
                        {item.name}
                      </p>
                    </>
                  ))}
                </>
              ) : (
                <>
                  <p className="mt-2 text-sm text-brand-lightblue">Address</p>
                  <p className="text-sm opacity-70">{office.address}</p>
                </>
              )}
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
};

export default Maps;
