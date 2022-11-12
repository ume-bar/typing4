/*global Vue*/
var app = new Vue({
  el: "#app",
  data: {
    key: "",
    keyCode: 0,
    dice: 6,
    qDice: 1,
    score: 0,
    timer: 30,

    // min: 59,
    // sec: 59,
    // timerOn: false,
    // timerObj: null,
  },
  methods: {
    onKeyDown(event) {
      this.key = event.key;
      this.keyCode = event.keyCode;
      // if (this.key == "1") {
      //   this.dice = 1;
      // }
      // スコアをコントロールする
      if (this.keyCode > 48 && this.keyCode < 55 && this.timer > 0) {
        this.dice = this.keyCode - 48;
        if (this.dice === this.qDice) {
          this.score += 100;
        } else {
          this.score -= 50;
        }
      }
      // if (this.dice === this.qDice) {
      //   this.score += 100;
      // }
    },
    // count: function () {
    //   if (this.sec <= 0 && this.min >= 1) {
    //     this.min--;
    //     this.sec = 59;
    //   } else if (this.sec <= 0 && this.min <= 0) {
    //     this.complete();
    //   } else {
    //     this.sec--;
    //   }
    // },
    // start: function () {
    //   let self = this;
    //   this.timerObj = setInterval(function () { self.count() }, 1000)
    //   this.timerOn = true; //timerがONであることを状態として保持
    // },

    // stop: function () {
    //   clearInterval(this.timerObj);
    //   this.timerOn = false; //timerがOFFであることを状態として保持
    // },

    // complete: function () {
    //   clearInterval(this.timerObj)
    // }
  },
  mounted() {
    document.addEventListener("keydown", this.onKeyDown);
    // 時間をコントロール
    setInterval(() => {
      this.qDice = Math.floor(Math.random() * 6) + 1;
      // if (this.timer > 0) {
      //   this.timer--;
      // }
      this.timer = Math.max(this.timer - 1, 0)
    }, 1000)
  },
  // computed: {
  //   formatTime: function () {
  //     let timeStrings = [
  //       this.min.toString(),
  //       this.sec.toString()
  //     ].map(function (str) {
  //       if (str.length < 2) {
  //         return "0" + str
  //       } else {
  //         return str
  //       }
  //     })
  //     return timeStrings[0] + ":" + timeStrings[1]
  //   }
  // }
});
