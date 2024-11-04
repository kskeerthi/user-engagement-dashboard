import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const UserEngagementDashboard = () => {
  const [users, setUsers] = useState([]);
  const [madePurchaseCount, setMadePurchaseCount] = useState(0); // State to hold count of purchases
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
        let count = 0;
        response.data.forEach(user => {
          user.sessions.forEach(session => {
            if (session.actions.includes('made_purchase')) {
              count++;
            }
          });
        });
        setMadePurchaseCount(count);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);
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
      <h3>New Subscriptions, {madePurchaseCount}</h3>
      <div>
      <h1>User Engagement Dashboard</h1>
      <Bar data={chartData} />
    </div>
    </div>
  );
};

export default UserEngagementDashboard;
