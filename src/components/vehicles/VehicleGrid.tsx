import VehicleCard from "./VehicleCard";
import { Vehicle } from "@/types/vehicle";

interface Props {
  vehicles: Vehicle[];
}

export default function VehicleGrid({ vehicles }: Props) {
  return (
    <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle.id}
          vehicle={vehicle}
        />
      ))}
    </section>
  );
}