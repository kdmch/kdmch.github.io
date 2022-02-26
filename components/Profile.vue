<template>
    <v-card
    :width="windowWidth"
    :height="windowHeight"
    style="background-color: #0c242f"
  >
    <div id="profile">
      <div align="center">
        <div id="icons">
          <div id="mitori">

          </div>
          <div id="twitter">
            <div class="icon">
              <a
                href="https://twitter.com/kadomache/"
                target="_blank"
                rel="noreferrer"
              >
                <v-icon color="#ffffff" x-large>
                  mdi-twitter
                </v-icon>
              </a>
            </div>
          </div>
          <div id="github">
            <div class="icon">
              <a
                href="https://github.com/kdmch/"
                target="_blank"
                rel="noreferrer"
              >
                <v-icon color="#ffffff" x-large>
                  mdi-github
                </v-icon>
              </a>
            </div>
          </div>
          <div id="instagram">
            <div class="icon">
              <a
                href="https://instagram.com/kadomache/"
                target="_blank"
                rel="noreferrer"
              >
                <v-icon color="#ffffff" x-large>
                  mdi-instagram
                </v-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
export default{
  data: () => ({
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  }),

  mounted() {
    window.addEventListener('resize', this.getWindowSize)
  },

  methods: {
    getWindowSize() {
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
    },
  },
}
</script>

<style scoped>
  #profile {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    -webkit-transform: translateY(-50%) translateX(-50%);
  }
  #icons {
    display: grid;
    grid-template-columns: 8vh 8vh 8vh 8vh;
    grid-template-rows: 8vh 8vh;
    gap: 2vh 2vh;
  }
  #mitori {
    grid-column: 1/3;
    grid-row: 1/3;
    background-image: url('../assets/cover.jpg');
    background-size: contain;
    border-radius: 25%;
  }
  #twitter {
    grid-column: 3;
    grid-row: 1;
    background-color: #1da1f2;
    background-size: contain;
    border-radius: 25%;
  }
  #github {
    grid-column: 3;
    grid-row: 2;
    background-color: #9f7be1;
    background-size: contain;
    border-radius: 25%;
  }
  #instagram {
    grid-column: 4;
    grid-row: 1;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
    background-size: contain;
    border-radius: 25%;
  }
  .icon {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    -webkit-transform: translateY(-50%) translateX(-50%);
  }
  a {
    text-decoration: none;
  }
</style>