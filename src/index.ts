import { p5i } from "p5i";

const sketch = p5i(() => ({
  setup({ createCanvas, background }) {
    // Runs once
    createCanvas(800, 800);
    background(200);
  },
  draw() {
    // Runs every frame
  },
}));

sketch.mount(document.getElementById("canvas-frame"));
