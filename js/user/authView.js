function authView() {
  document.getElementById("app").innerHTML = /*HTML*/ `
    <div class="form">
      <ul class="tab-group">
        <li class="tab active"><a href="#lagbruker">Lag Bruker</a></li>
        <li class="tab"><a href="#logginn">Logg Inn</a></li>
      </ul>
      <div class="tab-content">
        <div id="lagbruker">
          <br>
          <form action="/" method="post">
            <div class="top-row">
              <div class="field-wrap">
                <label>
                  Fornavn<span class="req">*</span>
                </label>
                <input type="text" required autocomplete="off" />
              </div>
              <div class="field-wrap">
                <label>
                  Etternavn<span class="req">*</span>
                </label>
                <input type="text" required autocomplete="off" />
              </div>
            </div>
            <div class="field-wrap">
              <label>
                Email<span class="req">*</span>
              </label>
              <input type="email" required autocomplete="off" />
            </div>
            <div class="field-wrap">
              <label>
                Passord<span class="req">*</span>
              </label>
              <input type="password" required autocomplete="off" />
            </div>
            <button type="submit" class="buttonForm buttonForm-block">Bli Medlem</button>
          </form>
        </div>
        <div id="logginn">
          <form action="/" method="post">
            <div class="field-wrap">
              <label>
                Email<span class="req">*</span>
              </label>
              <input type="email" required autocomplete="off" />
            </div>
            <div class="field-wrap">
              <label>
                Password<span class="req">*</span>
              </label>
              <input type="password" required autocomplete="off" />
            </div>
            <p class="forgot"><a href="mailto:marie@getacademy.no">Glemt passordet?</a></p>
            <button class="buttonForm buttonForm-block">Log In</button>
          </form>
        </div>
      </div>
    </div>
  `;
  initializeFormEvents() ;
}
