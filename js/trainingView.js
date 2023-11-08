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
                           </div>
                           
                           <div class="trainingContent" id="exerciseContent">
                           ${tempTrainingImg()}
                           ${createTrainingHtml(selectedSubtype, exercises)}
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

function createTrainingHtml() {
  if (model.selectedSubtype == null) return '';
  let html = '';
  for (let exercise of model.exercises) {
    if (exercise.subtypeId == model.selectedSubtype) {
      let medialinkHtml = '';
      if (exercise.medialink) {
        medialinkHtml = `
            
                  <div class="card_video">
                    <iframe width="600" height="315" src="${exercise.medialink}" frameborder="0" allowfullscreen></iframe>
                  </div>
                  `;
      }
      html += /*HTML*/`
          <div class="card-container">
          <div class="card">
              <div class="card_title"> 
              <h2>${exercise.name}</h2>
              <h3>${exercise.nameJapanese || ''}</h3>   
              </div>
              <div class="card_media">
              ${medialinkHtml}
              </div>
              <div class="card_body">
              <p align="justify">${exercise.description || ''} </p>
              </div>
              <div class="card_footer"><br><h3 onclick="setTrainingIsDone(${exercise.id}, ${exercise.subtypeId})">${exercise.isDone ? '☑' : '☐'}</h3>
              </div>
              </div>
              </div>
              <br>
              <br>
 
          `;
    }
  }
  return html;
}

function setTrainingIsDone(id, subtypeId){
  const exercise = model.exercises.find(e => e.id == id);
  const type = model.exercises.find(e => e.subtypeId == subtypeId);
  
  if (!exercise) {
    console.error(`No exercise found with id ${id}`);
    return;
  }

  if (type && type.subtypeId == 5){
    return "";
  }
  
  exercise.isDone = !exercise.isDone;
  exercise.categoryId = 5;

  // Create a new exercise using the information from the existing exercise
  const newExercise = {
    id: model.exercises.length + 1, // or generate a unique id
    subtypeId: 19,
    categoryId: 5,
    name: exercise.name,
    withPartner: exercise.withPartner,
    withRubberband: exercise.withRubberband,
    medialink: exercise.medialink,
    repetitions: exercise.repetitions,
    purpose: exercise.purpose,
    description: exercise.description,
    isDone: false,
  };
  model.exercises.push(newExercise);

  // Update the view
  trainingView();
}