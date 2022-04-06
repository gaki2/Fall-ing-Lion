import { isMobile } from "./utils/utils.js";
export default class Footer {
  constructor(makeFull) {
    this.makeFull = makeFull;
    this.wrapper();
    this.name();
    if (!isMobile()) {
      this.fullscreen();
    }
  }

  wrapper() {
    this.$wrapper = document.createElement("div");
    this.$wrapper.className = "footer_wrapper";
  }

  changeText(isFull) {
    if (isFull) {
      this.$footer_fullscreen.innerText = "exit fullscreen";
    } else {
      this.$footer_fullscreen.innerText = "fullscreen";
    }
  }

  fullscreen() {
    this.$footer_fullscreen = document.createElement("div");
    this.$footer_fullscreen.className = "fullscreen";
    this.$footer_fullscreen.innerText = "fullscreen";
    this.$footer_fullscreen.addEventListener("click", this.makeFull);
  }

  name() {
    this.$footer_name = document.createElement("div");
    this.$footer_name.className = "footer_name";
    this.$footer_name.innerText = "24:26 projects";
  }

  render() {
    this.$wrapper.appendChild(this.$footer_name);
    this.$wrapper.appendChild(this.$footer_fullscreen);
    document.body.appendChild(this.$wrapper);
  }
}
