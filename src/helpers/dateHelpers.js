// Sample JavaScript code for a made-up application
// Function to display user details with standardized date formats

function standardizeDateFormat(dateStr) {
  // Logic to convert date to ISO format (YYYY-MM-DD)
  const [month, day, year] = dateStr.split(/\/|-/);
  return `${year}-${month}-${day}`;
}

function displayUserDetails(user) {
  // Convert dates to ISO format
  let signUpDate = standardizeDateFormat(user.signUpDate); // "2021-12-31"
  let lastLoginDate = standardizeDateFormat(user.lastLoginDate); // "2021-12-31"

  console.log(`User: ${user.name}`);
  console.log(`Signed up on (ISO Format): ${signUpDate}`);
  console.log(`Last login (ISO Format): ${lastLoginDate}`);
}

// Example user object with original date formats
const user = {
  name: "Jane Doe",
  signUpDate: "12/31/2021",
  lastLoginDate: "31-12-2021"
};

displayUserDetails(user);
