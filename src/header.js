export default class Header {
  constructor() {
    this.header();
  }

  header() {
    this.$header = document.createElement("div");
    this.$header.className = "header";
    this.$header.innerText = "24:26";
  }

  render() {
    document.body.appendChild(this.$header);
  }
}
