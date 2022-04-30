<template>
    <div id="profile">
      <div id="wrapper">
        <div id="icons">
          <div id="mitori">

          </div>
            <div id="gw-tw">
            <a
              href="https://twitter.com/kadomache/"
              target="_blank"
              rel="noreferrer"
            >
              <div id="twitter">
                <div class="icon">
                  <v-icon color="#ffffff" x-large>
                    mdi-twitter
                  </v-icon>
                </div>
              </div>
            </a>
            </div>

            <div id="gw-gh">
            <a
              href="https://github.com/kdmch/"
              target="_blank"
              rel="noreferrer"
            >
              <div id="github">
                <div class="icon">
                  <v-icon color="#ffffff" x-large>
                    mdi-github
                  </v-icon>
                </div>
              </div>
            </a>
            </div>

            <div id="gw-ig">
            <a
              href="https://instagram.com/kadomache/"
              target="_blank"
              rel="noreferrer"
            >
              <div id="instagram">
                <div class="icon">
                  <v-icon color="#ffffff" x-large>
                    mdi-instagram
                  </v-icon>
                </div>
              </div>
            </a>
            </div>
            
              <div id="t1">
              </div>
              <div id="t2">
              </div>
              <div id="t3">
              </div>
              <div id="t4">
              </div>
              <div id="t5">
              </div>
              <div id="t6">
              </div>
              <div id="t7">
              </div>
              <div id="t8">
              </div>
        </div>
      </div>
    </div>
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

<style scoped lang="scss">

  @mixin applike-temp-icon() {
    background-size: contain;
    border-radius: 16px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }





  #wrapper {
    display: flex;


  }
  #icons {
    position: relative;
    margin: 25% auto 25%;
    padding-left: 3vh;
    padding-right: 3vh;
    display: grid;
    grid-template-columns: repeat(5, 9vh);
    grid-template-rows: repeat(9, 9vh) ;
    gap: 3vh 3vh;
  }
  #mitori {
    grid-column: 1/3;
    grid-row: 1/3;
    background-image: url('../assets/cover.jpg');
    @include applike-temp-icon();
  }

  #gw-tw {
    grid-column: 3/4;
    grid-row: 1/2;
    #twitter {
      background-color: #1da1f2;
      @include applike-temp-icon();
    }
  }

  #gw-gh {
    grid-column: 3/4;
    grid-row: 2/3;
    #github {
      background-color: #334455;
      @include applike-temp-icon();
    }
  }

  #gw-ig {
    grid-column: 4/5;
    grid-row: 1/2;
    #instagram {
      background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
      @include applike-temp-icon();
    }
  }

  #t1 {
    grid-column: 5/6;
    grid-row: 1/2;
    background-color: #1da1f2;
    @include applike-temp-icon();
  }
  #t2 {
    grid-column: 1/2;
    grid-row: 3/5;
    background-color: #1da1f2;
    @include applike-temp-icon();
  }
  #t3 {
    grid-column: 2/4;
    grid-row: 3/4;
    background-color: #1da1f2;
    @include applike-temp-icon();
  }
  #t4 {
    grid-column: 4/6;
    grid-row: 2/4;
    background-color: #1da1f2;
    @include applike-temp-icon();
  }
  #t5 {
    grid-column: 2/3;
    grid-row: 4/5;
    background-color: #1da1f2;
    @include applike-temp-icon();
  }
  #t6 {
    grid-column: 3/6;
    grid-row: 4/7;
    background-color: #1da1f2;
    @include applike-temp-icon();
  }
  #t7 {
    grid-column: 1/3;
    grid-row: 5/8;
    background-color: #1da1f2;
    @include applike-temp-icon();
  }
  #t8 {
    grid-column: 3/4;
    grid-row: 7/8;
    background-color: #1da1f2;
    @include applike-temp-icon();
  }


  .icon {

  }
  a {
    text-decoration: none;
  }
</style>