function pensumView() {
  let trainingCategoryHtml = model.categories;
  document.getElementById('app').innerHTML = /*HTML*/`
<section class="main_section ">
<div class="container ">
  <div class="row">
    <div class="col-md-6 ">
      <div class="detail-box">
        <h1 id="pensumTitle">5 KYU GULT BELTE PENSUM</h1>
        <p id="pensumText">
         Oversikt over hva du må mestre før du kan gå opp til prøve i gult belte.<br><br>  Kryss av hva du mestrer
        </p>
        <a onclick="userGradeView()" id="pensumMyPage">Min Side</a>
      </div>
    </div>
    <div class="col-md-6">
      <div class="img-box">
        <img src="images/pensumImage.png" alt="">
      </div>
    </div>
  </div>
</div>
</div>
</section>
<section class="pensum_section">
<div class="container">
<div class="pensum_container">

  <div class="box active">
    <div class="img-box">
    <img src="images/yellowBelt.png" alt="">
    <h5 class="name">Gult Belte</h5>
    </div>
  </div>

  <div class="box">
    <div class="img-box">
      <img src="images/orangeBelt.png" alt="">
      <h5 class="name">Orange Belte</h5>
    </div>
  </div>

  <div class="box">
    <div class="img-box"><img src="images/greenBelt.png" alt="">
    <h5 class="name">Grønt Belte</h5>
  </div>
</div>

</section>
<section class="display_section">
<div class="container">
<div class="rightSideExercise">
<div class="exerciseContent">
<div class="pensumSelect">
<pre hidden>selectedSubType = ${model.selectedSubtype}</pre>
  <h6>${trainingCategoryHtml[0].name}</h6><br/>
  ${createSubtypeHtml(1)}<br/>
  <h6>${trainingCategoryHtml[1].name}</h6><br/>
  ${createSubtypeHtml(2)}<br/>
  <h6>${trainingCategoryHtml[2].name}</h6><br/>
  ${createSubtypeHtml(3)}<br/>
</div>

  <div class="pensumContent" id="exerciseContent">
      ${createExerciseHtml()}
      </div>
</div>
</div>
</section>
`;
}
// categories and subtypes

function createSubtypeHtml(categoryId) {
  let optionsHtml = '';
  for (let subtype of model.subtypes) {
    if (subtype.categoryId === categoryId) {
      optionsHtml += `<li><a class="subtypeLink" onclick="selectSubtype(event, ${subtype.id})">${subtype.name}</a></li>`;
    }
  }

  return /*HTML*/ `<ul>${optionsHtml}</ul>`;
}

function createExerciseHtml() {
  if (model.selectedSubtype == null) return '';
  let html = '';
  for (let exercise of model.exercises) {
    if (exercise.subtypesId == model.selectedSubtype) {
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
              <!--<div class="card_body">
              <p align="justify">${exercise.description || ''} </p>
              </div><!---->
              <div class="card_footer"><br><h3 onclick="setExerciseIsDone(${exercise.id})">${exercise.isDone ? '☑' : '☐'}</h3>

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
