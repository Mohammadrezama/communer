import React from "react";
import { UserPopUp } from "./dependencies";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { useUser } from "hooks";
import { Icon } from "leaflet";

export const UserMap = () => {
  const {
    userState: { users },
  } = useUser();
  const position = { lat: 51.505, lng: -0.09 };

  const icon = new Icon({
    iconUrl: "marker.png",
    iconSize: [25, 25],
  });

  return (
    <div className="h-[400px] w-full">
      <MapContainer
        className="h-full w-full"
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {users?.map((item) => {
          return (
            <>
              <Marker position={item.location} icon={icon}>
                <UserPopUp item={item} />
              </Marker>
            </>
          );
        })}
      </MapContainer>
      ,
    </div>
  );
};
