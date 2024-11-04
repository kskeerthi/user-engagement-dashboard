import { Line } from 'react-chartjs-2';
import UserEngagementDashboard from './UserEngagementDashboard';

const ActiveUsersChart = () => {
  const mockData = UserEngagementDashboard();

  // Example Data for Line Chart
  const lineChartData = {
    labels: mockData.users.map(user => user.userId),
    datasets: [
      {
        label: 'User Age',
        data: mockData.users.map(user => user.age),
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'blue',
      },
    ],
  };

  return (
    <div>
      <h1>User Engagement Dashboard</h1>
      <Line data={lineChartData} />
    </div>
  );
}

export default ActiveUsersChart;
