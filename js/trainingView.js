function trainingView() {
  updateNavBar('trainingView');
  let trainingCategoryHtml = model.categories;
  let subtypes = model.subtypes;
  let exercises = model.exercises;
  let selectedSubtype = model.selectedSubtype;

  document.getElementById("app").innerHTML = /*HTML*/ `
  <section class="training_section">
  <div class="container">
  <div class="training_container">
  
    <div class="box active">
      <div class="img-box">
      <img src="images/1.png" alt="">
      </div>
    </div>
  
    <div class="box">
      <div class="img-box">
        <img src="images/2.png" alt="">
      </div>
    </div>
  
    <div class="box">
      <div class="img-box"><img src="images/3.png" alt="">
    </div>
  </div>
  
  </section>
        <section class="display_section">
            <div class="container">
                <div class="rightSideExercise">
                    <div class="trainingContainer">
                        <div class="trainingSelect">
                            <pre hidden>selectedSubType = ${selectedSubtype}</pre>
                            <h6>${trainingCategoryHtml[3].name}</h6><br/>
                           ${createSubtypeHtml(4, subtypes)}<br/>
                           <h6>${trainingCategoryHtml[4].name}</h6><br/>
                           ${createSubtypeHtml(5, subtypes)}<br/>
                           <h6>${trainingCategoryHtml[5].name}</h6><br/>
                           ${createSubtypeHtml(6, subtypes)}<br/>
                           </div>
                           
                           <div class="trainingContent" id="exerciseContent">
                           ${tempTrainingImg()}
                           ${createExerciseHtml(selectedSubtype, exercises)}
                           </div>
                     </div>
                    </div>
                </div>
                </div>
        </section>
       `;
}

function tempTrainingImg() {
  if (model.selectedSubtype === null) {
    return '<div class="card"><img src="images/martinBilde.png" alt="404" style="min-width: 42.5rem; min-height: 33rem;"></div>';
  } else {
    return "";
  }
}