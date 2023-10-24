function navBar(){
    document.getElementById('header').innerHTML += /*HTML*/`
    <header>
    <img class="logo" src="images/logo.png" alt="logo">
    <nav>
        <ul class="nav__links">
            <li>
                <a onclick="landingView()">Startside</a>
                <a onclick="pensumView()">Øvelser</a>
                <a onclick="trainingView()">Trening</a>
                <a onclick="userGradeView()">Min Side</a>
            </li>
        </ul>
    </nav>
    <a href="#logginn" class="regLogBtn">
        <button onclick="authView()">Logg inn</button>
    </a>
</header>
`;
}