<template>
<v-app>
  <div class="wrapper">
    <div class="canvas" id="maincanvas"></div>
  </div>
</v-app>
</template>

<script>
export default {
  head() {
    return {
      meta: [{
          hid: 'og:title',
          property: 'og:title',
          content: ''
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: ''
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: ''
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ''
        },
      ]
    }
  },
  data: () => ({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  }),
  mounted() {
    window.addEventListener('resize', this.getWindowSize)

    const p5mitori = function (p5) {
      var mitori_d;

      p5.preload = _ => {
        mitori_d = p5.loadImage('static/d.png');
      }

      let message = [' テスト', ' テスト2', ' テスト3'];
      var mes = message.length;
      var padding = 10;
      var size = 20;

      p5.setup = _ => {
        var canvas = p5.createCanvas(600, 600);
        canvas.parent(maincanvas);
        p5.noStroke();
        p5.noCursor();
        dialog();
      }

      async function dialog() {
        p5.textSize(size);
        p5.textFont('JFドット東雲明朝12');

        for (let i = 0; i < mes; i++) {
          p5.background(20);
          p5.image(mitori_d, 200, 50);

          //await mitori();
          p5.fill(255);
          p5.rect(60, 420, 480, 150);
          p5.fill(20);
          p5.rect(61, 421, 478, 148);
          var len = message[i].length;
          for (let k = 0; k < len; k++) {
            p5.fill(255);
            p5.text(message[i][k], 63 + padding + k * 20 - size, 440 + padding);
            await sleep(50);
          }
          while (!(p5.mouseIsPressed)) {
            await sleep(1)
          }
        }
      }

      async function mitori() {
        p5.image(mitori_d, 200, 50);
      }

      function sleep(ms) {
        return new Promise((resolve) => {
          setTimeout(resolve, ms);
        })
      }
    }

    const P5 = require('p5')
    new P5(p5mitori)
  },

  methods: {
    getWindowSize() {
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
    },
  },
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'JFドット東雲明朝12';
  src: url(./assets/JF-Dot-ShinonomeMin12.ttf);
}

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
}

a {
  text-decoration: none;
}
</style>
