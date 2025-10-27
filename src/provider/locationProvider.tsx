import { useGeoLocation } from "@/store/geoLocationStore";
import { useEffect, type ReactNode } from "react";

const LocationProvider = ({ children }: { children: ReactNode }) => {
  const { getLocation, locationPermission, locationError } = useGeoLocation();

  useEffect(() => {
    getLocation();
  }, [getLocation, locationPermission]);

  useEffect(() => {
    if (locationError) {
      getLocation();
    }
  }, [getLocation, locationError]);

  return children;
};

export default LocationProvider;
