function userGradeView() {
  let trainingCategory = model.categories;
  const app = document.getElementById("app");
  if (app) {
    app.innerHTML = /*HTML*/ `
    <section class="profile">
        <!-- Sidenav -->
        <div class="sidenav">
            <div class="profile">
                <img src="./images/profile2.png" alt="" width="100" height="100">
                <div class="name">
                    Marie
                </div>
                <div class="job">
                    Administrator
                </div>
            </div>

            <div class="sidenav-url">
                <div class="url">
                    <a href="#profile" class="active">Gradering</a>
                    <hr align="center">
                </div>
                <div class="url">
                    <a onclick="userSettingsView()">Innstillinger</a>
                    <hr align="center">
                </div>
            </div>
        </div>

        <!-- Main -->
        <div class="main_settings">
        <div class="card_settings">
            <div class="card-body">
                <div id="progress">
                <div class="progress">
                <div class="knot"></div>
                <div class="knot-center"></div>
                  <div class="progress-done" data-done="${createProgressPercent()}">
                  ${createProgressPercent()}     
                  </div>
                </div>
       
           </div>
           <div class="pensumList">
           <div class="categoryAll">
           </div>
           <div class="category1" id="checklist">
           <h2>${trainingCategory[0].name}</h2>
           ${createSubtypeCheckbox(1)}
           </div>
           
           <div class="category2" id="checklist">
           <h2>${trainingCategory[1].name}</h2>
           ${createSubtypeCheckbox(2)}
           </div>
           
           <div class="category3" id="checklist">
           <h2>${trainingCategory[2].name}</h2> 
           ${createSubtypeCheckbox(3)}
           </div>
           
         </div>
           `;

  }

  function createSubtypeCheckbox(categoryId) {
    let html = `<h3> ${isCategoryDone(categoryId)}</h3>`;
    for (subtype of model.subtypes)
      if (subtype.categoryId === categoryId) {
        // for (let i = start; i < end; i++) {
        html += /*HTML*/`
                    <span style="font-size:200%; user-select: none">
                            ${isDoneSubtype(subtype.id) ? '☑' : '☐'}
                    </span>                
                    ${subtype.name}
                    ${createExerciseProgressHtml(subtype.id)}
                    <br/>
                `;
      }
    return html;
  }

  function isCategoryDone(categoryId) {
    const result = { total: 0, done: 0 };
    for (let subtype of model.subtypes) {
      if (subtype.categoryId === categoryId) {
        result.total++;
        if (isSubtypeDone(subtype.id)) {
          result.done++
        }
      }
    }
    return `${result.done} / ${result.total}`;
  }





  function isDoneSubtype(subtypeId) {
    for (let exercise of model.exercises) {
      if (exercise.subtypesId == subtypeId && !exercise.isDone) {
        return false;
      }
    }
    return true;
  }

  function createExerciseProgressHtml(subtypeId) {
    let html = '';
    let exerciseDoneCount = 0;
    let exerciseTotalCount = 0;
    for (let exercise of model.exercises) {
      if (exercise.subtypesId != subtypeId) continue
      exerciseTotalCount++;
      if (exercise.isDone) {
        exerciseDoneCount++;
      }
      // console.log(exerciseTotalCount,exerciseDoneCount,exercise)
    }
    html = exerciseDoneCount + '/' + exerciseTotalCount;
    if (exerciseDoneCount === exerciseTotalCount) {
      html = '';
    }
    return html;
  }

  function isSubtypeDone(subtypeId) {
    let exerciseDoneCount = 0;
    let exerciseTotalCount = 0;
    for (let exercise of model.exercises) {
      if (exercise.subtypesId != subtypeId) continue
      exerciseTotalCount++;
      if (exercise.isDone) {
        exerciseDoneCount++;
      }

      return exerciseDoneCount == exerciseTotalCount;
    }
  }


  const progress = document.querySelector('.progress-done');
  progress.style.width = progress.getAttribute('data-done');
  progress.style.opacity = 1;
}



function createProgressPercent() {
  let progress = 0;
  let exerciseDone = 0;
  let totalExercises = 0;
  const categoryNr = 13; // Kategoriene som telles i pensum
  for (let exercise of model.exercises) {
    if (exercise.subtypesId < categoryNr)
      totalExercises++;
    if (exercise.isDone && exercise.subtypesId < categoryNr) {
      exerciseDone++;
    }
    progress = (exerciseDone / totalExercises) * 100
  }
  if (progress >= 1) {
    return Math.round(progress) + "%";
  } else {
    return "⠀"; // or whatever you want to return when progress is less than 1
  }
}

















//-----------------Visuelt------------------
// Function to update the bottom checkboxes based on the top checkboxes
//   function updateCheckboxes() {
//     const exerciseCheckboxes = document.querySelectorAll(".exercise"); //
//     const subtype1 = document.getElementById("subtype0"); //

//     // Check if all exercise checkboxes are checked
//     const areAllExercisesChecked = Array.from(exerciseCheckboxes).every(
//       (checkbox) => checkbox.checked
//     );

//     // Check or uncheck subtype1 based on all exercise checkboxes
//     subtype1.checked = areAllExercisesChecked;

//     // Recalculate the progress
//     updateProgress();
//   }
//   // Add event listeners to exercise checkboxes to update subtype1
//   const exerciseCheckboxes = document.querySelectorAll(".exercise");
//   exerciseCheckboxes.forEach((checkbox) => {
//     checkbox.addEventListener("change", updateCheckboxes);
//   });
//   // Function to calculate progress percentage and update the circular chart
//   function updateProgress() {
//     const exerciseCheckboxes = document.querySelectorAll(".subtype");
//     const checkedCount = Array.from(exerciseCheckboxes).filter((checkbox) => checkbox.checked).length;
//     const totalCount = exerciseCheckboxes.length;
//     const percentage = (checkedCount / totalCount) * 100;
//     /////////////////////////////////////////////////////////////////////////////////////////////////////////
//     // Update the circular chart
//     const circle = document.querySelector(".circleCategory");
//     // Calculate the stroke-dasharray values
//     const progressValue = percentage * 0.01 * (2 * Math.PI * 15.9155); // Radius is 15.9155
//     const dasharray = `${progressValue}, ${2 * Math.PI * 15.9155 - progressValue
//       }`;

//     circle.style.strokeDasharray = dasharray;

//     // Set the stroke color to your desired color
//     circle.style.stroke = "#0fa8d6";

//     // Update the percentage text in the SVG
//     const percentageText = document.querySelector(
//       ".percentage-text-category tspan"
//     );
//     percentageText.textContent = Math.round(percentage) + "%";
//   }
// }


/* <h2>Del A - Grunnteknikker</h2>
<ul>
    <!-- Apply the "disabled-checkbox" class to make the checkbox unclickable -->
    <li><input type="checkbox" class="subtype" id="subtype1">Guardstillinger / Benstillinger</li>
    <li><input type="checkbox" class="subtype" id="subtype2">Forflytninger</li>
    <li><input type="checkbox" class="subtype" id="subtype3">Fallteknikk</li>
    <li><input type="checkbox" class="subtype" id="subtype4">Kast / Fellinger</li>
    <li><input type="checkbox" class="subtype" id="subtype5">Slag</li>
    <li><input type="checkbox" class="subtype" id="subtype6">Spark</li>
    <li><input type="checkbox" class="subtype" id="subtype7">Mønster</li>
    <li><input type="checkbox" class="subtype" id="subtype8">Forflytninger</li>
    <li><input type="checkbox" class="subtype" id="subtype9">Blokkeringer</li>
</ul>
<h2>Guardstillinger / Benstillinger</h2>
<ul>
    <li><input type="checkbox" class="exercise subtype1" checked>1</li>
    <li><input type="checkbox" class="exercise subtype1">2</li>
    <li><input type="checkbox" class="exercise subtype1" checked>3</li>
    <li><input type="checkbox" class="exercise subtype1" checked>4</li>
</ul>
<h2>Del C - Selvforsvarstrening</h2>
<ul>
    <li><input type="checkbox" class="exercise subtype1" >1</li>
 </ul>

</div>
</div>
`;
} */
