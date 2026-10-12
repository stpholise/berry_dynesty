"use client";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Tooltip,
  Circle,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Leaflet from "leaflet";

const MyMap = () => {
  const hotelIcon = Leaflet.icon({
    iconUrl: "/marker-icon.svg",
    iconRetinaUrl: "/marker-icon-2x.svg", 
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });
  return (
    <div className="h-120 w-full   ">
      <MapContainer
        className="w-full h-full z-10"
        center={[6.358141558514143, 5.73528689415746]}
        zoom={15}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[6.358141558514143, 5.73528689415746]}
          icon={hotelIcon}
        >
          <Circle
            center={[6.358141558514143, 5.73528689415746]}
            radius={150}
            pathOptions={{ color: "#5187CD" }}
          />
          <Popup>
            <div className="">
              <h3 className="font-semibold">Comfort Hotel</h3>
              <p>Benin City, Edo State</p>
            </div>
          </Popup>
          <Tooltip>14 Goshen Estate</Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MyMap;
