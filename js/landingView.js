function landingView() {
  document.getElementById("app").innerHTML = /*HTML*/ `
  <section class="landing_section ">
  <img src="images\landingbg.png" alt="">
    <div class="row">
      <div class="col-md-6 ">
        <div class="detail-box">
          <h1 id="pensumTitle">Ju Jitsu Pensum Oversikt</h1>
          <p id="pensumText">
           Lag en bruker og se hvor mye du allerede<br>mestrer eller har behov for å forbedre
          </p>
          <a onclick="authView()" id="pensumMyPage">Lag Bruker</a>
        </div>
      </div>
      <div class="col-md-6">
        <div class="img-box">
          <img src="\images\landingbg.png" alt="">
    </div>
  </div>
  </div>
  </section>
  `;
}