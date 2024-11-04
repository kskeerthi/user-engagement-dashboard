import { generateMockData } from './data/mockData';
import { UserProvider } from './context/UserContext'; // Adjust the path to your UserContext
import  UserEngagementDashboard  from '../src/components/UserEngagementDashboard';
function App() {
  const mockData = generateMockData();

  console.log(mockData); // Check your console for generated mock data
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
      <UserProvider>
      <UserEngagementDashboard />
    </UserProvider>
      </div>
      {/* You can now use mockData to populate your charts */}
    </div>
  );
}

export default App;
