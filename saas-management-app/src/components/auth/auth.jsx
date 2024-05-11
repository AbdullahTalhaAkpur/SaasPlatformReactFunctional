const loginData = require('../users/login.json');
const registerData = require('../users/register.json');

const login = (username, password) => {
  const user = loginData.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    user.loggedIn = true;
    return user;
  } else {
    throw new Error('Invalid email or password');
  }
};

const register = (fullName, email, password) => {
  const existingUser = registerData.find(
    (user) => user.fullName === fullName
  );

  let username;
  if (existingUser) {
    const nameParts = fullName.split(' ');
    const firstName = nameParts[0].toLowerCase();
    const lastName = nameParts[nameParts.length - 1].toLowerCase();
    const randomNumber = Math.floor(Math.random() * 1000);
    username = `${firstName}_${lastName}${randomNumber}`;
  } else {
    const usernameParts = fullName.split(' ').map(part => part.toLowerCase());
    username = usernameParts.join('');
  }

  const newUser = {
    fullName,
    username,
    email: Array.isArray(email) ? email : [email],
    password,
    loggedIn: true // Set to true for auto-login after registration
  };
  registerData.push(newUser);
  return newUser;
};

module.exports = { login, register };