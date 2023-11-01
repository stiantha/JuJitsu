function init() {
  navBar();
  trainingView();
  hideTitle();

}

function hideTitle(){
  let siteTitleElement = document.getElementById("siteTitle");
  if (siteTitleElement) {
      siteTitleElement.innerHTML = "";
  } 
  }

