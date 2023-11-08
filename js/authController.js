function checkUserLoggedIn(callback) {
  model.selectedSubtype = null;
  const loggedIn = model.user.loggedIn;
  if (loggedIn === true) {
    callback();
  } else {
    loginView();
  }
}

window.onload = function() {
  checkUserLoggedIn();
};

function addUser(firstName, lastName, email, password) {
  const emailExists = model.users.some(user => user.email === email);
  if (!firstName || !lastName || !email || !password) {
    console.log('All fields must be filled in.');
    return;
  }
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
  model.user.name = newUser.firstName;
  model.user.loggedIn = true;
  navBar();
  landingView();
  saveModelToLocalStorage();
}