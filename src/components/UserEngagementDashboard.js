import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useUsers } from '../context/UserContext'; // Ensure this provides the right user data
import UserMap from './UserMap';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const UserEngagementDashboard = () => {
  const users = useUsers(); // Assume this hook gets users data correctly
  const [madePurchaseCount, setMadePurchaseCount] = useState(0);
  const [highlightUserId, setHighlightUserId] = useState(null);


  useEffect(() => {
    // Count purchases
    let count = 0;
    users.forEach(user => {
      user.sessions.forEach(session => {
        if (session.actions.includes('made_purchase')) {
          count++;
        }
      });
    });
    setMadePurchaseCount(count);
  }, [users]);

  const chartData = {
    labels: users.map(user => user.userId),
    datasets: [
      {
        label: 'User Age',
        data: users.map(user => user.age),
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'blue',
      },
    ],
  };

  return (
    <div>
      <h1>Active Users</h1>
      <h3>New Subscriptions: {madePurchaseCount}</h3>
      <h1>User Engagement Dashboard</h1>
      <Bar data={chartData} />
      {highlightUserId}
      <UserMap users={users} highlightUserId={highlightUserId} />
    </div>
  );
};

export default UserEngagementDashboard;
