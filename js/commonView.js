function navBar(){
    document.getElementById('header').innerHTML += /*HTML*/`
    <header>
    <img class="logo" src="images/logo.png" alt="logo">
    <nav>
        <ul class="nav__links">
            <li>
            <a onclick="landingView()">Startside</a>
            <a onclick="pensumView()">Pensum</a>
            <a onclick="ExerciseCollectionView()">Øvelsesamling</a>
            <a onclick="trainingView()">Min trening</a>
            <a onclick="userGradeView()">Min Side</a>
            </li>
        </ul>
    </nav>
    <a href="#logginn" class="regLogBtn">
        <button onclick="authView()">Bli Medlem</button>
    </a>
</header>
`;
}