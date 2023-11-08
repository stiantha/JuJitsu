
function landingView() {
hideTitle()
updateNavBar('landingView');
  document.getElementById("app").innerHTML = /*HTML*/ `
  <section class="landing_section ">
    <div class="row">
      <div class="col-md-6 ">
        <div class="detail-box">
          <h1 id="landingTitle"><span>Ju</span>Jit<span>su</span>%</h1>
          <p id="pensumText">
          Velkommen til nettstedet vårt for Ju Jitsu-fremdriftssporing.<br><br>
          Her kan du se fremgangen din mot neste beltegradering prøve på en enkel og effektiv måte.
          </p>
          <h1 id="landingUser" onclick="registerView()"><span>@</span>Bli<span>Medlem</span></h1>
          
        </div>
      </div>
      <div class="col-md-6">
        <div class="img-box">
          <img src="./images/landingbg.png" alt="">
    </div>
  </div>
  </div>
  </section>
  `;
}