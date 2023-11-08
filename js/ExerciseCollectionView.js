// media link er kommenter ut - Stian

"use strict";

function ExerciseCollectionView() {
    let exercises = sort(model.exercises);

    document.getElementById('app').innerHTML = /*HTML*/`
        <table>
            <tr>
                <th>Navn${getSortButtonsHtml('name')}</th>
                <th>id${getSortButtonsHtml('id')}</th>
                <th>subtypeid${getSortButtonsHtml('subtypeId')}</th>
                <th>Med partner ${getSortButtonsHtml('withPartner')}</th>
                <th>Med strikk ${getSortButtonsHtml('withRubberband')}</th>
                <th>Video</th>
                <th>Legg til Min Trening ${getSortButtonsHtml('isDone')}</th>
                <th>Kan du dette? ${getSortButtonsHtml('isDone')}</th>
            </tr>
            ${createCollectionHtml(exercises)}
        </table>
    `;
}

/*
Torsdag 2023.09.10 || Lister med objekter (KPI)video 
Del 2
22:00 Når vi skal sortere en liste med objekter så må vi sende med en sorteringsfunksjon.
.sort krever at vi sammenligner to parametere A og B, og returnerer:
(Sorteringfunksjonen skal sammenligne to parametere A og B, så skal den returnere:)
1) 0 hvis de to parameterne er like -> A==B
2) 1 hvis A skal sorteres før B OG -1 hvis B skal sorteres før A
*/
// function compareExercises (exerciseA, exerciseB) {
//     if (exerciseA.withPartner == exerciseB.withPartner) return 0;
//     if (exerciseA.withPartner > exerciseB.withPartner) return 1;
//     return -1;
// }
/* 24:30: Det vanlige er å bruke en såkalt ANONYM FUNKSJON. Beskriver LAMBDAUTTRYKK
dette ville stått i starten av ExerciseCollectionView()

let exercises = [...model.exercises];
exercises.sort((exerciseA, exerciseB) =>
exerciseA.withPartner == exerciseB.withPartner ? 0 :
exerciseA.withPartner > exerciseB.withPartner ? 1 : -1
 ); 
*/
function createCollectionHtml(exercises) {
    let collectionHtml = '';
    /*
    MÅL loope igjennom alle exercises og legge til html for hver øvelse
    (torsdag 14.9 - lister av objekter ca 22:10 / Video: https://photos.app.goo.gl/rBJkTxTyYV3psd1E8 ):
    i vår model har vi mange ulike felt inne i objektet model (belts, catagories, subtypes og exercises)
    
    en iterasjon skal produsere en rad = tr = tabel Row.
    td er Tabel Data
    */
    for (let exercise of exercises) {
        collectionHtml += /*HTML*/ ` 
                <tr>
                    <td>${exercise.name}</td>
                    <td>id=${exercise.id}</td>
                    <td>id=${exercise.subtypeId}</td>
                    <td>${exercise.withPartner}</td>
                    <td>${exercise.withRubberband}</td>
                    <!--<td><iframe width="150" height="50" src="${exercise.medialink}" frameborder="0" allowfullscreen="true"></iframe></td><!---->
                    <td>Legg til "Min trening"</td>
                    <td>${exercise.isDone}</td>
                </tr>
            `;
    }
    return collectionHtml;
}
//
function sort(exercises) {
    exercises = [...exercises];
    const sortField = model.sort.field;
    if (sortField != null) {
        const direction = model.sort.direction;
        exercises.sort((exerciseA, exerciseB) => exerciseA[sortField] == exerciseB[sortField] ? 0 :
            exerciseA[sortField] > exerciseB[sortField] ? direction : -direction
        );
    }
    return exercises;
}

function getSortButtonsHtml(sortField) {
    return /*HTML*/`
        <span onclick="setSort('${sortField}', 1)">▲</span>
        <span onclick="setSort('${sortField}', -1)">▼</span>
    `;
}