import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const UserMap = ({ users, highlightUserId }) => {
  const center = [20, 0]; // Default center for the map

  return (
    <MapContainer center={center} zoom={2} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {users.map((user) => {
        const { coords, userId } = user; // Ensure these fields exist in the user data
        const isHighlighted = userId === highlightUserId; // Highlight condition

        if (coords && coords.lat !== undefined && coords.lng !== undefined) {
          return (
            <React.Fragment key={userId}>
              <Marker position={[coords.lat, coords.lng]}>
                <Popup>{`${userId} - Age: ${user.age} - Device: ${user.device}`}</Popup>
              </Marker>

              {isHighlighted && (
                <Circle
                  center={[coords.lat, coords.lng]}
                  radius={200000} // Adjust as needed
                  pathOptions={{ color: 'red', fillColor: 'red', fillOpacity: 0.5 }}
                />
              )}
            </React.Fragment>
          );
        }
        return null; // Skip rendering if coords are invalid
      })}
    </MapContainer>
  );
};

export default UserMap;
