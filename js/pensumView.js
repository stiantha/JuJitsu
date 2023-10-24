function pensumView() {
  let trainingCategoryHtml = model.categories;
  document.getElementById('app').innerHTML = /*HTML*/`
<section class="main_section ">
<div class="container ">
  <div class="row">
    <div class="col-md-6 ">
      <div class="detail-box">
        <h1>5 KYU GULT BELTE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur, tempora iusto, ad possimus soluta hic praesentium mollitia consequatur beatae, aspernatur culpa.
        </p>
        <a onclick="userGradeView()">Min Side</a>
      </div>
    </div>
    <div class="col-md-6">
      <div class="img-box">
        <img src="images/pensumImage.png" alt="">
      </div>
    </div>
  </div>
</div>
</section>
<!-- end main section -->
</div>

<!-- feature section -->
<section class="pensum_section">
<div class="container">
<div class="pensum_container">
  <div class="box active">
    <div class="img-box">
    <img src="images/yellowBelt.png" alt="">
    </div>
    <h5 class="name">Gult Belte</h5>
  </div>
  <div class="box">
    <div class="img-box"></div>
    <h5 class="name">Orange Belte</h5>
  </div>
  <div class="box">
    <div class="img-box"></div>
    <h5 class="name">Grønt Belte</h5>
  </div>
</div>
</div>
</section>
<section class="display_section layout_padding-bottom">
<div class="container">
<div class="rightSideExercise">
<div class="exerciseContent">
<div class="pensumSelect">
<pre>selectedSubType = ${model.selectedSubtype}</pre>
  <h2>${trainingCategoryHtml[0].name}</h2><br/>
  ${createSubtypeHtml(0,8)}
  <h2>${trainingCategoryHtml[1].name}</h2>
  ${createSubtypeHtml(8,12)}
  <h2>${trainingCategoryHtml[2].name}</h2>
  ${createSubtypeHtml(12,13)}
</div>

  <div class="pensumContent" id="exerciseContent">
      ${createExerciseHtml()}
      </div>
</div>
</section>
`;
}
// categories and subtypes
function createSubtypeHtml(start, end) {
  let subType = model.subtypes;
  let optionsHtml = '';
  let i = 1;
  for (let i = start; i < end; i++) {
      optionsHtml += `<li><a onclick="selectSubtype(${i}); return false;">${subType[i].name}</a></li>`;
  }

  return /*HTML*/` <ul>${optionsHtml}</ul>`
}

function createExerciseHtml() {
  if(model.selectedSubtype == null) return '';
  let html = '';
  for (let exercise of model.exercises) {
      if (exercise.subtypesId == model.selectedSubtype) {
          html += /*HTML*/` 
          <h2>${exercise.name}</h2>
          <h3>${exercise.nameJapanese}</h3>
          <p>${exercise.description}</p>
          `;
      }
  }
  return html;
}
