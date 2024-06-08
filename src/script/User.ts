/**
 * User interface
 * @interface User
 * @property {string} key - User key
 * @property {string} name - User name
 * @property {string} favoriteFood - User favorite food
 * @property {string} favoriteMovie - User favorite movie
 * @property {"Active" | "Inactive"} status - User status
 * @property {Date} [lastUpdated] - User last updated date
 */

export interface User {
  key: string;
  name: string;
  favoriteFood: string;
  favoriteMovie: string;
  status: "Active" | "Inactive";
  lastUpdated?: string;
}
