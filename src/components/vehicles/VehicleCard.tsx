import Image from "next/image";
import { Vehicle } from "@/types/vehicle";

interface Props {
  vehicle: Vehicle & {
    vehicle_images?: {
      image_url: string;
    }[];
  };
}

export default function VehicleCard({ vehicle }: Props) {
  const image =
    vehicle.vehicle_images?.[0]?.image_url || "/images/car-placeholder.jpg";

  return (
    <article className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg">
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={image}
          alt={vehicle.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="text-lg font-semibold">{vehicle.title}</h3>

          <p className="mt-1 text-2xl font-bold text-red-600">
            {Number(vehicle.price).toLocaleString("pt-PT")} €
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm text-neutral-600">
          <span>{vehicle.year}</span>
          <span>{Number(vehicle.kms).toLocaleString("pt-PT")} km</span>
          <span>{vehicle.fuel}</span>
          <span>{vehicle.transmission}</span>
        </div>
      </div>
    </article>
  );
}