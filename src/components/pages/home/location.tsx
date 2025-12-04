import { Button } from "@/components/ui/button";
import { useGeoLocation } from "@/store/geolocation.store";
import { Locate, MapPin } from "lucide-react";

const Location = () => {
  const { location, preciseLocation, getLocation, setLocationPermission } =
    useGeoLocation();
  return (
    <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-2 md:gap-3">
        <MapPin className="h-5 w-5 text-muted-foreground md:h-6 md:w-6" />
        <p className="text-xl font-medium md:text-2xl">
          {location.city}, {location.country}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-sm md:text-lg">
        <p className="text-muted-foreground">
          {preciseLocation ? "Precise Location" : "Your Internet Location"}
        </p>
        <span className="hidden text-muted-foreground md:inline">•</span>
        <Button
          className="h-auto p-0 text-primary underline underline-offset-4 hover:no-underline"
          variant="link"
          onClick={() => {
            if (preciseLocation) {
              getLocation();
            } else {
              setLocationPermission(true);
            }
          }}
        >
          <Locate className="mr-1 h-4 w-4" />
          {preciseLocation ? "Locate again" : "Get precise location"}
        </Button>
      </div>
    </div>
  );
};

export default Location;
