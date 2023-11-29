// Sample JavaScript code for a made-up application
// Function to display user details

function displayUserDetails(user) {
  // Date in MM/DD/YYYY format
  let signUpDate = user.signUpDate; // e.g., "12/31/2021"

  // Date in DD-MM-YYYY format
  let lastLoginDate = user.lastLoginDate; // e.g., "31-12-2021"

  console.log(`User: ${user.name}`);
  console.log(`Signed up on: ${signUpDate}`);
  console.log(`Last login: ${lastLoginDate}`);
}

// Example user object
const user = {
  name: "Jane Doe",
  signUpDate: "12/31/2021",
  lastLoginDate: "31-12-2021"
};

displayUserDetails(user);
