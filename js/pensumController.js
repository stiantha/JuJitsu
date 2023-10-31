function selectSubtype(event, id) {
    event.preventDefault();
    model.selectedSubtype = id;
    pensumView();
}

function setExerciseIsDone(id){
    const exercise = model.exercises.find(e=>e.id==id);
    exercise.isDone = !exercise.isDone;
    pensumView();
}