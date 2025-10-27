import { Button } from "@/components/ui/button";
import { useGeoLocation } from "@/store/geoLocationStore";
import { Locate, MapPin } from "lucide-react";

const Home = () => {
  const { location, preciseLocation, getLocation, setLocationPermission } =
    useGeoLocation();

  return (
    <section>
      <div>
        <div className="flex items-center gap-3">
          <MapPin size={20} className="text-muted-foreground" />
          <p className="text-lg font-medium">
            {location.city}, {location.country}
          </p>
        </div>

        <div className="flex items-center">
          <p>
            {preciseLocation ? "Precise Location" : "Your Internet Location"}
          </p>
          <Button
            className="p-0 underline text-muted-foreground cursor-pointer"
            variant="link"
            onClick={() => {
              if (preciseLocation) {
                getLocation();
              } else {
                setLocationPermission(true);
              }
            }}
          >
            <Locate />
            {preciseLocation ? "Locate again" : "Get precise location"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
