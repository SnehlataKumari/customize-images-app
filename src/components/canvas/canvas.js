import { useEffect } from "react";
const fabric = require("fabric").fabric;

function CanVas({selectedImg}) {

  useEffect(() => {
    var canvas = new fabric.Canvas("canvas");
    var imgElement = document.getElementById("my-image");
    var imgInstance = new fabric.Image(imgElement, {
      height: 400,
      left: 300,
      top: 200,
      opacity: 0.85,
    });
    canvas.add(imgInstance);
  },[]);
  return (
    <>
      <canvas id="canvas" width="500" height="500">
        {selectedImg && (
          <img
            src={selectedImg.id.previewURL}
            id="my-image"
            alt="img"
            style={{ maxWidth: 400 }}
          ></img>
        )}
      </canvas>
    </>
  );
};

export default CanVas;