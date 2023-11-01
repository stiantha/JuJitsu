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
            <a onclick="pensumView(), navBar()">Pensum</a>
            <a onclick="ExerciseCollectionView(), navBar()">Øvelsesamling</a>
            <a onclick="trainingView(), navBar()">Min trening</a>
            <a onclick="userGradeView(), navBar()">Min Side</a>
            <a class="regLog"onclick="authView(), navBar()">Bli Medlem</a>
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
// Add this line