/**
 * Developed by: Edwin Leiva
 * Last modified: 2024-06-08
 * Purpose: This script is a solution to the problem of filtering and sorting user data.
 * It imports user data from a separate file, filters active users, sorts users by a specified property,
 * and logs the results to the console.
 * The script is written in TypeScript.
 */

// import User interface from User.ts
import { User } from "./User";

// import users array from users.ts
import { users } from "./users";

/**
 * Function to add the current date to each user object
 * @param {User[]} users - Array of user objects
 * @returns {User[]} - Array of user objects with the current date added
 */
export const addCurrentDate = (users: User[]): User[] => {
  const currentDate = new Date().toLocaleString();
  return users.map((user) => ({
    ...user,
    lastUpdated: currentDate,
  }));
};

/**
 * Function to filter users by active status
 * @param users
 * @returns {User[]} - Array of user objects with active status
 */
const filterByActiveMembers = (users: User[]): User[] => {
  return users.filter((user) => user.status === "Active");
};

/**
 * Function to sort users by a specific property
 * @param {User[]} users - Array of user objects
 * @param {keyof User} property - Property to sort by
 * @returns {User[]} - Sorted array of user objects
 */
const sortUsersByProperty = (users: User[], property: keyof User): User[] => {
  return [...users].sort((a, b) => {
    // Sort by property in ascending order
    if (a[property]! < b[property]!) return -1;
    if (a[property]! > b[property]!) return 1;
    return 0;
  });
};

/**
 * Function to log active users to the console
 * @param users
 * @returns {void}
 */
const logUsers = (users: User[]): void => {
  // Log active users to the console or a message if no active users are found
  if (users.length === 0) {
    console.log("No records found.");
  } else {
    users.forEach((user) => {
      console.log(
        `Name: ${user.name}, Date: ${user.lastUpdated}, Favorite Movie: ${user.favoriteMovie}`,
      );
    });
  }
};

// Main script execution
// Add current date to each user object and log active users
const updatedUsers = addCurrentDate(users);

// Filter active users and log them
const activeUsers = filterByActiveMembers(updatedUsers);
console.log("Active Users:");
logUsers(activeUsers);

// Sort by any property and log again
// property: "name" | "favoriteFood" | "favoriteMovie" | "status" | "lastUpdated"
const sortedProperty: keyof User = "name";

// Sort active users by the specified property and log them
const sortedUsers = sortUsersByProperty(activeUsers, sortedProperty);
console.log(`Sorted Active Users by ${sortedProperty.toUpperCase()}:`);
logUsers(sortedUsers);
