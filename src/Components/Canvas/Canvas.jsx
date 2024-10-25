import React, { useEffect, useState, useRef } from "react";
import { useImageContext } from "../../store/ImageContext.jsx";
import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";
import styles from "./Canvas.module.css";

const Canvas = () => {
  const mainCanvasRef = useRef(null);
  const { editor, onReady } = useFabricJSEditor();
  const { imageUrl } = useImageContext();
  const [caption, setCaption] = useState("");

  const onAddCircle = () => {
    editor?.addCircle();
  };

  const onAddRectangle = () => {
    editor?.addRectangle();
  };

  const onAddCaption = () => {
    const text = new fabric.Text(caption, {
      left: 100,
      top: 100,
      fontSize: 24,
      fill: "black",
    });
    editor?.canvas.add(text);
    setCaption("");
  };

  // Initialize canvases
  useEffect(() => {
    mainCanvasRef.current = new fabric.Canvas("canvas");
  }, []);

  // Load image on main canvas
  useEffect(() => {
    if (imageUrl) {
      fabric.Image.fromURL(imageUrl, function (oImg) {
        editor?.canvas.add(oImg);
      });
    }
  }, [fabric, editor, imageUrl]);
  const logCanvasLayers = () => {
    const mainCanvasObjects = mainCanvasRef.current?.getObjects() || [];
  };
  const downloadCanvas = () => {
    if (mainCanvasRef.current) {
      const mainDataURL = mainCanvasRef.current.toDataURL({
        format: "png",
      });
      const mainLink = document.createElement("a");
      mainLink.href = mainDataURL;
      mainLink.download = "mainCanvas.png";
      mainLink.click();
    }
  };

  return (
    <div>
      <input
        className={styles.input}
        type="text"
        placeholder="Add the caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button className={styles.btn} onClick={onAddCaption}>
        Add Caption
      </button>
      <FabricJSCanvas
        width={400}
        hieght={400}
        className={styles.sampleCanvas}
        onReady={onReady}
      />
      <button className={styles.btn} onClick={onAddCircle}>
        Add Circle
      </button>
      <button className={styles.btn} onClick={onAddRectangle}>
        Add Rectangle
      </button>
      <button className={styles.btn} onClick={downloadCanvas}>
        Download Canvas
      </button>
    </div>
  );
};

export default Canvas;
