import { create } from "zustand";
import { persist } from "zustand/middleware";

type GeoLocationType = {
  location: {
    latitude: number | null;
    longitude: number | null;
    country: string | null;
    city: string | null;
  };
  locationPermission: boolean;
  locationLoading: boolean;
  locationError: boolean;
  preciseLocation: boolean;
  lastFetched: Date;

  getLocation: () => void;
  setLocationPermission: (permission: boolean) => void;
};

export const useGeoLocation = create<GeoLocationType>()(
  persist(
    (set, get) => ({
      location: {
        latitude: null,
        longitude: null,
        country: null,
        city: null,
      },
      locationPermission: false,
      locationError: false,
      locationLoading: false,
      preciseLocation: false,
      lastFetched: new Date(),
      getLocation: () => {
        set({ locationLoading: true });
        if (get().locationPermission && navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(({ coords }) => {
            fetch(
              `https://api-bdc.io/data/reverse-geocode-client?latitude=${coords.latitude}&longitude=${coords.longitude}&localityLanguage=en`
            )
              .then((response) => response.json())
              .then((data) => {
                set({
                  locationError: false,
                  locationLoading: false,
                  lastFetched: new Date(),
                  preciseLocation: true,
                  location: {
                    latitude: data?.latitude,
                    longitude: data?.longitude,
                    country: data?.countryName,
                    city: data?.city,
                  },
                });
              })
              .catch(() => {
                set({ locationError: true });
              });
          });
        } else {
          fetch("https://api-bdc.io/data/reverse-geocode-client")
            .then((response) => response.json())
            .then((data) => {
              set({
                locationError: false,
                locationLoading: false,
                lastFetched: new Date(),
                preciseLocation: false,
                location: {
                  latitude: data?.latitude,
                  longitude: data?.longitude,
                  country: data?.countryName,
                  city: data?.city,
                },
              });
            })
            .catch(() => {
              set({ locationError: true });
            });
        }
      },
      setLocationPermission: (permission) => {
        set({ locationPermission: permission });
      },
    }),
    { name: "location" }
  )
);
