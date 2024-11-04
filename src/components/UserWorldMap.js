import React, { useEffect, useState } from 'react';
import fetchCoordinates from './services/locationService'; // Adjust the path as needed

const UserWorldMap = () => {
  const [userLocations, setUserLocations] = useState([]);
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const getCoordinates = async () => {
      const location = 'Eritrea'; // Replace with the desired location
      const coords = await fetchCoordinates(location);
      setCoordinates(coords);
    };

    getCoordinates();
  }, []);

  return (
    <div>
      <h1>User Engagement Dashboard</h1>
      {coordinates && (
        <div>
          <p>Longitude: {coordinates[0]}</p>
          <p>Latitude: {coordinates[1]}</p>
        </div>
      )}
    </div>
  );
};

export default UserWorldMap;
