import { WebAppBaseClass } from "https://webappdb.github.io/WebAppDBEngine/api/v01/WebAppBaseClass.mjs"

class WebAppTemplate extends WebAppBaseClass {

  constructor() {
    super();
  }

  initialize(iContainerDom) {
    //This is where you create your page dynamically using javascript

    iContainerDom.style.textAlign = "center";
    iContainerDom.style.display = "inline-grid";
    iContainerDom.style.gridTemplateColumns = "50% 50%";
    iContainerDom.style.gridTemplateRows = "50% 50%";

    const iconImage = new Image();
    iconImage.src = "./favicon.ico";
    iconImage.style.width = "75vw"
    
    iconImage.style.gridColumn = 2;
    iconImage.style.gridRow = 2;
    iconImage.style.position = "relative";
    iconImage.style.top = "calc( -75vw / 2 )";
    iconImage.style.left = "calc( -75vw / 2 )";

    
    iContainerDom.appendChild(iconImage);
  }

  destroy(iContainerDom) {
  }

  resize(iContainerDom) {
    //This is called when the size of iContainerDom
  }

  gameLoop(wDt, iContainerDom) {
    //This is called every iteration. Used for processing time base content

    // Returning true will exit the application if your application is not the first app in WebAppDBEngine
    return true;
  }
  
  render(iDt, iContainerDom) {
    //This is called every iteration. Used for rendering content
  }

}

export function getApp() {
  return new WebAppTemplate();
}