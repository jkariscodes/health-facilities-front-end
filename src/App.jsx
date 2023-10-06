import { useState } from "react";
import { Icon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./App.css";
import * as facilities from "./data/health_facilities.json";
import health from "./assets/health.png";

export const myIcon = new Icon({
  iconUrl: health,
  iconSize: [30, 38],
  iconAnchor: [20, 90],
  shadowAnchor: [5, 64],
  popupAnchor: [-4, -79],
});
function App() {
  const [activeFacility, setActiveFacility] = useState(null);
  const position = [0.099, 38.0];
  const zoom = 7;

  return (
    <>
      <h2>Health Facilities Map</h2>
      <MapContainer center={position} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {facilities.features.map((facility, key) => (
          <Marker
            key={key}
            position={[
              facility.geometry.coordinates[1],
              facility.geometry.coordinates[0],
            ]}
            onClick={() => {
              setActiveFacility(facility);
            }}
            icon={myIcon}
          >
            <Popup
              position={[
                facility.geometry.coordinates[1],
                facility.geometry.coordinates[0],
              ]}
              onClose={() => {
                setActiveFacility(null);
              }}
            >
              <div>
                <h6>{facility.properties.name}</h6>
                <p>{facility.properties.amenity}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}

export default App;
