function selectSubtype(event, id) {
    event.preventDefault();
    model.selectedSubtype = id;
    if (id > 12) {
      trainingView();
    } else {
      pensumView();
    }
  }
  
  function setExerciseIsDone(id){
    const exercise = model.exercises.find(e=>e.id==id);
    exercise.isDone = !exercise.isDone;
    if (id > 12) {
      trainingView();
    } else {
      pensumView();
    }
  }

