import { WebAppBaseClass } from "https://webappdb.github.io/WebAppDBEngine/api/v01/WebAppBaseClass.mjs"

// Need to wrap url and have it resolve as a absolute path to the WebAppOrigin
// Otherwise the resource used will be relative to WebAppDB origin
function urlWrapper(iUrl) {
  const RgExp = new RegExp("^(?:[a-z]+:)?//", "i");
  if (RgExp.test(URL)) {
      return iUrl;
  }  
  const moduleUrl = new URL(import.meta.url);
  const moduleDir = moduleUrl.pathname.split("/").slice(0,-1).join("/");
  return new URL( moduleDir + "/" + iUrl, moduleUrl.origin).href;

}

// Inherit from WebAppBassClass to have all the required functions defined.
class WebAppTemplate extends WebAppBaseClass {

  constructor() {
    super();
  }

  initialize(iContainerDom) {
    //This is where you create your page dynamically using javascript

    iContainerDom.style.textAlign = "center";
    iContainerDom.style.display = "inline-grid";
    iContainerDom.style.gridTemplateColumns = "33% 33% auto";
    iContainerDom.style.gridTemplateRows = "33% 33% auto";

    var wSize = "200px";
    
    const wIconImage1 = new Image();
    wIconImage1.src = "./favicon.ico"; // Bad Path

    const wIconImage2 = new Image();
    wIconImage2.src = urlWrapper("./favicon.ico"); // User urlWrapper to use relative paths

    var setupImage = (iImage, iParent, iIndex) => {

      iImage.style.width = wSize;
      iImage.style.gridColumn = iIndex;
      iImage.style.gridRow = iIndex;
      iImage.style.position = "relative";
      iImage.style.top = "calc( -" + wSize  + " / 2 )";
      iImage.style.left = "calc( -" + wSize + " / 2 )";
  
      iParent.appendChild(iImage);
    }

    setupImage(wIconImage1, iContainerDom, 2);
    setupImage(wIconImage2, iContainerDom, 3);

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

// This function is required for WebAppDB Engine to be able to create the WebApp
export function getApp() {
  return new WebAppTemplate();
}