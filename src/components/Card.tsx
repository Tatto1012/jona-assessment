import Image from "next/image";
import { JSX } from "react";
import { Button } from "@/components";
import { Sailing } from "@/types";
import { formatDate, formatPrice } from "@/helpers";

type CardProps = {
  sailing: Sailing;
  [key: string]: unknown;
};

export default function Card({ sailing, ...rest }: CardProps): JSX.Element {
  return (
    <div
      className="rounded-xl overflow-hidden w-full shadow-2xl flex flex-col lg:flex-row justify-between border"
      {...rest}
    >
      <div className="relative">
        <div className="h-full w-full lg:w-60 relative">
          {sailing.ship.image && (
            <Image
              className="w-full h-full object-cover"
              src={sailing.ship.image}
              alt={sailing.ship.name}
              width={288}
              height={160}
            />
          )}
        </div>
        <span className="absolute top-3 left-5 rounded bg-secondary-350 text-primary-100 px-2 py-1">
          {formatDate(sailing.departureDate, sailing.returnDate)}
        </span>
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex flex-col lg:flex-row justify-between px-5 py-4 flex-1">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold">{sailing.name}</h2>
            <div className="text-secondary-50 flex flex-col lg:flex-row gap-5 my-3">
              <span>{sailing.region}</span>
              <span>{sailing.duration} nights</span>

              <div className="flex items-center">
                <b className="material-icons text-primary-250">star</b>
                <b className="text-primary-300">{sailing.ship.rating}</b>
                <span className="ml-1 text-sm">
                  {sailing.ship.reviews} reviews
                </span>
              </div>
            </div>

            <div className="font-bold truncate max-w-[60vw] lg:max-w-[20vw]">
              {sailing.itinerary.map((itinerary, index) => (
                <div key={index} className="inline-block items-center">
                  <span>{itinerary}</span>
                  {index !== sailing.itinerary.length - 1 && (
                    <b className="material-icons text-sm text-primary-150 m-1">
                      arrow_forward
                    </b>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center p-8 lg:p-0 lg:items-end  w-auto">
            {sailing.ship.line.logo && (
              <Image
                src={sailing.ship.line.logo}
                alt={sailing.ship.line.name}
                width={120}
                height={300}
              />
            )}

            <span className="text-secondary-150">{sailing.ship.name}</span>
          </div>
        </div>

        <div className="flex flex-row justify-end flex-2 bg-secondary-250 p-5">
          <div className="flex flex-col mr-3 items-end">
            <span className="text-secondary-150">Interior from</span>
            <b className="flex flex-row items-start">
              <span>$</span>
              <span className="text-3xl">{formatPrice(sailing.price)}</span>
            </b>
          </div>
          <Button size="large" color="primary">
            See Sailings
          </Button>
        </div>
      </div>
    </div>
  );
}
