import "./styles.css";
import WebGLFont from "./components/WebGLFont/WebGLFont";
import { shaders } from "./components/WebGLFont/shaders";

const type = new WebGLFont({
  word: "COSMOS",
  position: [-95, -15, 0],
  rotation: [Math.PI, 0, 0],
  zoom: 150,
  vertex: shaders[4].vertex,
  fragment: shaders[4].fragment
});
