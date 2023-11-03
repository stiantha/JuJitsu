function registerView() {
  document.getElementById("app").innerHTML = /*HTML*/ `
    <div class="form">
      <ul class="tab-group">
        <li class="tab active"><a onclick="registerView()">Lag Bruker</a></li>
        <li class="tab"><a onclick="loginView()">Logg Inn</a></li>
      </ul>
      <div class="tab-content">
        <div id="createUser">
          <br>
          <form id="registrationForm" method="post">
            <div class="top-row">
              <div class="field-wrap">
                <input id="firstName" type="text" required autocomplete="off" placeholder="Fornavn" />
              </div>
              <div class="field-wrap">
                <input id="lastName" type="text" required autocomplete="off" placeholder="Etternavn" />
              </div>
            </div>
            <div class="field-wrap">
              <input id="email" type="email" required autocomplete="off" placeholder="Email" />
            </div>
            <div class="field-wrap">
              <input id="password" type="password" required autocomplete="off" placeholder="Passord" />
            </div>
            <button type="submit" class="buttonForm buttonForm-block">Register</button>
          </form>
        </div>
      </div>
    </div>
    `;

  document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve form field values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Call the addUser function
    addUser(firstName, lastName, email, password);
    console.log(model.users); // Log the updated model.users array
  });
}

function loginView() {
  updateNavBar('userGradeView');
  document.getElementById("app").innerHTML = /*HTML*/ `
    <div class="form" id="loginForm">
      <ul class="tab-group">
        <li class="tab"><a onclick="registerView()">Lag Bruker</a></li>
        <li class="tab active"><a onclick="loginView()">Logg Inn</a></li>
      </ul>
      <div class="tab-content">
        <div id="loginUser">
        <div id="loginMessage"></div>
          <form id="loginForm"> <!-- Add an id to the form for easier access -->
            <div class="field-wrap">
              <input id="email" type="email" required autocomplete="off" placeholder="Email" />
            </div>
            <div class="field-wrap">
              <input id="password" type="password" required autocomplete="off" placeholder="Passord" />
            </div>
            <p class="forgot"><a href="mailto:marie@getacademy.no">Glemt passordet?</a></p>
            <button class="buttonForm buttonForm-block">Logg Inn</button>
          </form>
        </div>
      </div>
    </div>
    `;

    document.getElementById("loginForm").addEventListener("submit", function (event) {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const user = model.users.find(user => user.email === email && user.password === password);
    
      if (user) {
        model.user.id = user.id;
        model.user.loggedIn = true;
        model.user.name = user.name;
        navBar();
        userGradeView();
        saveModelToLocalStorage();
        console.log('Logged in successfully.');
      } else if (!user) {
        loginView();
        console.log('Incorrect email or password');
      }
    });
  }

function autofillForms() {
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  if (firstName && lastName && email && password) {
    firstName.value = 'Test';
    lastName.value = 'User';
    email.value = 'terje@getacademy.no';
    password.value = 'terje123';
    console.log('Autofilled forms.');
  } else if (email && password) {
    email.value = 'marie@getacademy.no';
    password.value = 'terje123';
    console.log('Autofilled forms.');
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === '|') {
    autofillForms();
    console.log('Autofill initiated.');
  }
});
