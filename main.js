/*global Vue*/
var app = new Vue({
  el: "#app",
  data: {
    key: "",
    keyCode: 0,
  },
  methods: {
    onKeyDown(event) {
      this.key = event.key;
      this.keyCode = event.keyCode;
    },
  },
  mounted() {
    document.addEventListener("keydown", this.onKeyDown);
  },
});
