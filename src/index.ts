import { p5i } from "p5i";

const sketch = p5i(() => ({
  setup({ createCanvas }) {
    // Runs once
    createCanvas(800, 800);
  },
  draw() {
    // Runs every frame
  },
}));

sketch.mount(document.getElementById("canvas"));
