import { faker } from '@faker-js/faker';

// Function to generate mock user engagement data
export const generateMockData = () => {
  const users = [];

  // Generate a specified number of users
  for (let i = 0; i < 100; i++) {
    const user = {
      userId: `user_${i}`, // Unique user ID
      age: faker.number.int({ min: 18, max: 60 }), // Use `faker.number.int` for random age
      location: faker.location.country(), // Correctly call the country method
      device: faker.helpers.arrayElement(["Mobile", "Desktop", "Tablet"]), // Random device type
      sessions: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => ({
        sessionId: faker.string.uuid(), // Generate a unique session ID
        startTime: faker.date.past().toISOString(), // Random past date
        endTime: faker.date.past().toISOString(), // Random past date
        actions: faker.helpers.shuffle([
          "viewed_product",
          "clicked_ad",
          "added_to_cart",
          "made_purchase"
        ]).slice(0, faker.number.int({ min: 1, max: 3 })) // Random actions taken
      }))
    };
    users.push(user); // Add the user to the users array
  }

  return { users }; // Return the generated mock data
};

// Usage example
const mockData = generateMockData();

