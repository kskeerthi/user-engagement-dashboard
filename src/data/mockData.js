import { faker } from '@faker-js/faker';

// Function to generate mock user engagement data
export const generateMockData = () => {
  const users = [];
  
  // Generate a specified number of users
  for (let i = 0; i < 100; i++) {
    const user = {
      userId: `user_${i}`,  // Unique user ID
      age: faker.datatype.number({ min: 18, max: 60 }),  // Random age
      location: faker.address.country(),  // Random country
      device: faker.helpers.randomize(["Mobile", "Desktop", "Tablet"]),  // Random device type
      sessions: Array.from({ length: faker.datatype.number({ min: 1, max: 5 }) }, () => ({
        sessionId: faker.datatype.uuid(),  // Unique session ID
        startTime: faker.date.past(),  // Random start time within the past
        endTime: faker.date.past(),  // Random end time within the past
        actions: faker.helpers.shuffle(["viewed_product", "clicked_ad", "added_to_cart", "made_purchase"]).slice(0, faker.datatype.number({ min: 1, max: 3 }))  // Random actions taken during the session
      }))
    };
    users.push(user);  // Add the user to the users array
  }
  
  return { users };  // Return the generated mock data
};

// Usage example
const mockData = generateMockData();
console.log(mockData);  // Outputs the generated mock data to the console
