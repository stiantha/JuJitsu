function checkboxHtml(start, end) {
    let subType = model.subtypes;
    let partsABC = [];
    for (let i = start; i < subType.length - end; i++) {
        partsABC.push(subType[i].name)
    }

    let optionsHtml = '';
    for (let i = 0; i < partsABC.length; i++) {
        optionsHtml += `<li><input type="checkbox" class="subtype" id="subtype${i}"(${i})>${partsABC[i]}</a></li>`;
    }

    return /*HTML*/` <ul>${optionsHtml}</ul>`
}

// Forsøk på å tegne hele slik at vi bare trenger å kalle funksjonen en gang :)

// function checkboxHtml() {
//     let subType = model.subtypes;
//     let trainingCategory = model.categories;
//     let partsABC = [];
//     for (let i = 0; i < 5; i++) {
//         trainingCategory[0]
//         partsABC.push(subType[i].name)
//     } for (let j = 8; j < 1; j++){
//         trainingCategory[1]
//         partsABC.push(subType[j].name)
//     } for (let k = 12; k < 0; k++){
//         trainingCategory[2]
//         partsABC.push(subType[k].name)
//     }

//     let optionsHtml = '';
//     for (let i = 0; i < partsABC.length; i++) {
//         optionsHtml += `<li><input type="checkbox"(${i})>${partsABC[i]}</a></li>`;
//     }

//     return /*HTML*/` <ul>${optionsHtml}</ul>`
// }