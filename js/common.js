function init() {
  navBar();
  registerView();
  hideTitle();

}

function hideTitle(){
  let siteTitleElement = document.getElementById("siteTitle");
  if (siteTitleElement) {
      siteTitleElement.innerHTML = "";
  } 
  }

  function selectSubtype(event, id) {
    event.preventDefault();
    model.selectedSubtype = id;
    if (id > 12) {
      trainingView();
    } else {
      pensumView();
    }
  }
  
  function setExerciseIsDone(id){
    const exercise = model.exercises.find(e=>e.id==id);
    exercise.isDone = !exercise.isDone;
    if (id > 12) {
      trainingView();
    } else {
      pensumView();
    }
  }
  
  function navBar(){
    document.getElementById('header').innerHTML += /*HTML*/`
    <header>
    <div class="logo" onclick="landingView()">
    <img src="images/logo.png" alt="logo">
    <p id="siteTitle"><span>Ju</span>Jit<span>su</span>%</p></div>
    <nav>
        <ul class="nav__links">
            <li>
            <a onclick="landingView()">Startside</a>
            <a onclick="checkUserLoggedIn(pensumView()), navBar()">Pensum</a>
            <a onclick="ExerciseCollectionView(), navBar()">Øvelsesamling</a>
            <a onclick="checkUserLoggedIn(trainingView()), navBar()">Min trening</a>
            <a onclick="checkUserLoggedIn(userGradeView()), navBar()">Min Side</a>
            <a class="regLog"onclick="registerView(), navBar()">Bli Medlem</a>
            </li>
        </ul>
    </nav>
</header>
`;
}

function footer(){
    document.getElementById('footer').innerHTML += /*HTML*/`
    <footer>
    <div class="footer">
        <div class="footer__text">
            <p>© 2021 Ju Jitsu Pensum Oversikt</p>
        </div>
    </div>
</footer>
`;
}

