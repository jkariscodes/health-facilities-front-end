import { MapContainer, TileLayer } from "react-leaflet";
import "./App.css";
function App() {
  const position = [0.099, 38.0];
  const zoom = 7;

  return (
    <>
      <h1>Health Facilities Map</h1>
      <MapContainer center={position} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
  );
}

export default App;
