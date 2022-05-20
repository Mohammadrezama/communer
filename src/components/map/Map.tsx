import React, { useState, FC } from "react";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import { LeafletMouseEvent } from "leaflet";
import { Icon } from "leaflet";

type IMapOnChange = ({}: { lat: number; lng: number }) => void;

interface IMyComponent {
  setMarkerPosition: any;
  onChange: IMapOnChange;
}

interface IMap {
  onChange: IMapOnChange;
}
const MyComponent: FC<IMyComponent> = ({ setMarkerPosition, onChange }) => {
  const map = useMap();
  map.on("click", (e: LeafletMouseEvent) => {
    setMarkerPosition(e.latlng);
    onChange(e.latlng);
  });
  return null;
};
export const Map: FC<IMap> = ({ onChange }) => {
  const [markerPosition, setMarkerPosition] = useState({
    lat: 51.505,
    lng: -0.09,
  });
  const icon = new Icon({
    iconUrl: "marker.png",
    iconSize: [25, 25],
  });

  return (
    <MapContainer
      center={markerPosition}
      zoom={13}
      scrollWheelZoom={false}
      className="h-full w-full"
    >
      <MyComponent setMarkerPosition={setMarkerPosition} onChange={onChange} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={markerPosition} icon={icon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
