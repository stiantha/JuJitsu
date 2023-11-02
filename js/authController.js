function checkUserLoggedIn(viewLoad) {
  const loggedIn = model.user.loggedIn;
  if (loggedIn === true) {
    viewLoad;
    return;
  } else {
    loginView();
  }
}

window.onload = function() {
  checkUserLoggedIn();
};

function addUser(firstName, lastName, email, password) {
  // Check if a user with the provided email already exists
  const emailExists = model.users.some(user => user.email === email);
  if (emailExists) {
    console.log('A user with this email already exists.');
    return;
  }

  const highestId = Math.max(...model.users.map(user => user.id));
  const newUser = {
    id: highestId + 1,
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password
  };

  model.users.push(newUser);
  model.user.id = newUser.id;
  model.user.loggedIn = true;
  landingView();
}